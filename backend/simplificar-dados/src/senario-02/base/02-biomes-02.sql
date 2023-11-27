-- criar campos de classificacao
alter table "bazil_luccme_cr_base"
    drop column if exists "biome_id";
alter table "bazil_luccme_cr_base"
    drop column if exists "biome_nm";
alter table "bazil_luccme_cr_base"
    drop column if exists "biome_intersection_percentage";

alter table "bazil_luccme_cr_base"
    add column "biome_id" INTEGER;
alter table "bazil_luccme_cr_base"
    add column "biome_nm" VARCHAR;
alter table "bazil_luccme_cr_base"
    add column "biome_intersection_percentage" NUMERIC;


-- popular atributos internos
update "bazil_luccme_cr_base"
set "biome_id"                      = s_intersets.b_id,
    "biome_nm"                      = s_intersets.b_nm,
    "biome_intersection_percentage" = s_intersets.b_intersection_percentage
from (select s.id,
             b.id b_id,
             b.nm b_nm,
             1    b_intersection_percentage
      from "bazil_luccme_cr_base" s,
           "biomes" b
      where st_intersects(s.geom, b.geom)
        and st_within(s.geom, b.geom)) s_intersets
where "bazil_luccme_cr_base".id = s_intersets.id
  and "bazil_luccme_cr_base"."biome_id" is null;


-- popular atributos de borda
update "bazil_luccme_cr_base"
set "biome_id"                      = s_intersets.b_id,
    "biome_nm"                      = s_intersets.b_nm,
    "biome_intersection_percentage" = s_intersets.b_intersection_percentage
from (select s.id,
             b.id                                                       b_id,
             b.nm                                                       b_nm,
             st_area(st_intersection(s.geom, b.geom)) / st_area(s.geom) b_intersection_percentage
      from "bazil_luccme_cr_base" s,
           "biomes" b
      where st_intersects(s.geom, b.geom)
        and not st_within(s.geom, b.geom)) s_intersets
where "bazil_luccme_cr_base".id = s_intersets.id
  and "bazil_luccme_cr_base"."biome_id" is null
  and s_intersets.b_intersection_percentage > 0.7;


-- ajustar atributos de borda
update "bazil_luccme_cr_base"
set "biome_id"                      = s_intersets.b_id,
    "biome_nm"                      = s_intersets.b_nm,
    "biome_intersection_percentage" = s_intersets.b_intersection_percentage
from (select s.id,
             b.id                                                       b_id,
             b.nm                                                       b_nm,
             st_area(st_intersection(s.geom, b.geom)) / st_area(s.geom) b_intersection_percentage
      from "bazil_luccme_cr_base" s,
           "biomes" b
      where st_intersects(s.geom, b.geom)) s_intersets
where "bazil_luccme_cr_base".id = s_intersets.id
  and "bazil_luccme_cr_base"."biome_id" is null;

create index "bazil_luccme_cr_base_biome_id_idx" on "bazil_luccme_cr_base" ("biome_id");
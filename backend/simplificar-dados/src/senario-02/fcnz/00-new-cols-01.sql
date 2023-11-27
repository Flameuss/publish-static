begin;alter table "bazil_luccme_cr_base" add column if not exists "cr_carbon00" numeric;commit;
begin;alter table "bazil_luccme_cr_base" add column if not exists "cr_carbon10" numeric;commit;
begin;alter table "bazil_luccme_cr_base" add column if not exists "cr_carbon20" numeric;commit;
begin;alter table "bazil_luccme_cr_base" add column if not exists "cr_carbon30" numeric;commit;
begin;alter table "bazil_luccme_cr_base" add column if not exists "cr_carbon40" numeric;commit;
begin;alter table "bazil_luccme_cr_base" add column if not exists "cr_carbon50" numeric;commit;

update "bazil_luccme_cr_base"
set
    "cr_carbon00" = "bazil_luccme_cr_carbon".idc22000,
    "cr_carbon10" = "bazil_luccme_cr_carbon".idc22010,
    "cr_carbon20" = "bazil_luccme_cr_carbon".idc22020,
    "cr_carbon30" = "bazil_luccme_cr_carbon".idc22030,
    "cr_carbon40" = "bazil_luccme_cr_carbon".idc22040,
    "cr_carbon50" = "bazil_luccme_cr_carbon".idc22050
from "bazil_luccme_cr_carbon"
where "bazil_luccme_cr_base".id = "bazil_luccme_cr_carbon".id;

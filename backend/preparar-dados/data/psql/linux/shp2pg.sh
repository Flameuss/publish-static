#!/bin/bash

export PGPASSWORD=geospatialservice

shp2pgsql -s 4326 "/home/luis/Ti/Inpe/publish-static/database/dados/shapefile/shapes-corretos/brazil_luccme_cr_base.shp" brazil_luccme_cr_base | psql -h localhost -p 5432 -U geospatialservice -d geospatialservice

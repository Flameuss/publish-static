#!/bin/bash

export PGPASSWORD=geospatialservice

pg_restore -h localhost -p 5432 -U geospatialservice -d geospatialservice -v "/home/luis/Ti/Inpe/publish-static/database/2022-10-02_geospatialservice.backup"

#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER cdcuser WITH REPLICATION PASSWORD 'cdcuser';
    CREATE DATABASE storedb;
    GRANT ALL PRIVILEGES ON DATABASE storedb TO cdcuser;
EOSQL
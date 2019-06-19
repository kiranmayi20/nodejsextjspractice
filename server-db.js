var mysql      = require('pg'),
    nconf      =require('nconf');

    const { Pool, Client } = require('pg')
     module.exports = {
        createConnection: function() {
          const pool = new Pool({
            host : 'localhost',
            user : 'postgres',
            password : 'empower',
            database : 'Organisation_Info',
            port : 5432
          });
         return pool;
        },
        createClientConnection : function() {
          const client = new Client({
            host : 'localhost',
            user : 'postgres',
            password : 'empower',
            database : 'Organisation_Info',
            port : 5432
          });
          client.connect();
         return client;
    
        }
      }
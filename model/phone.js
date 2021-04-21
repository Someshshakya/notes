const knex  = require('./db_config');
// to create a table
module.exports = knex.schema.hasTable('phone')
                    .then(async(exists)=>{
                        if (!exists){
                            return await knex.schema.createTable('phone',(t)=>{
                                t.increments();
                                t.integer('phone').unique();
                            });
                        }
                    },console.log("phone table created"))
                    .catch((err)=>{
                        console.log(err)
                    })


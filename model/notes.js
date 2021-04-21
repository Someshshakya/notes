const knex  = require('./db_config');
// to create a table
module.exports = knex.schema.hasTable('notes')
                    .then(async(exists)=>{
                        if (!exists){
                            return await knex.schema.createTable('notes',(t)=>{
                                t.increments();
                                t.string("notes");
                                t.integer("ph_id").unsigned();
                            t.foreign('ph_id').references('id').inTable('phone');
                            });
                        }
                    },console.log("notes table created"))
                    .catch((err)=>{
                        console.log(err)
                    })

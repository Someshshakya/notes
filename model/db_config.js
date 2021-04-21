const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1', 
      user : 'root',
      password : '',
      database : 'notes1'
    }
  },
  console.log('Notes database connected..'));
module.exports = knex;
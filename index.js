const express = require('express');
const app = express();
app.use(express.json());
const knex = require('./model/db_config')

// db configuration
require('./model/db_config')
// to create a Phon/e table
require('./model/phone')

// to create notes table
// require('./model/notes');

app.post('/register',async (req,res)=>{
    try {
        let phone = req.body.phone;
        let ph_id = await knex('phone').insert({"phone":phone})
        res.send({msg:"Registeration done"})
    } catch (error) {
        console.log(error)
        res.send({msg_err:error})
    }
})

app.post("/add_notes",async (req,res)=>{
   try {
    var body = req.body.notes;
    for (i in body){
        let ph_id = body[i].pn_id;
        let notes = body[i].notes;
        await knex('notes').insert({"notes":notes}).where("ph_id",ph_id);
    }
    res.send({Msg:"working"})
   } catch (error) {
       console.log(error)
       res.send({erMsg:error})
   }
})


app.get('/display_notes', async(req,res)=>{
    try {
        let phone = req.body.phone;
        let id = await knex('phone').select('id').where('phone',phone);
        console.log(id);
    } catch (error) {
        console.log(error)
        res.send({errmsg:error})
    }
})

app.listen(8000,()=>{
    console.log("Server is runing.. ")
})
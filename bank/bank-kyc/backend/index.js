const express = require('express');
const cors = require('cors');
const userModel = require('./mongo')
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.json({
        msg : "connection successfull"
    })
})

app.post('/addData', async(req, res) => {
    try{
   const body = req.body;
   const user = await userModel.create({
    name: body.name,
    number: body.number,
    startDate: body.startDate,
    endDate: body.endDate,
    currentlyWork: body.currentlyWork
   })
   res.json({
       msg : "body received successfully",
       res : user._id, 
   })
   console.log(user._id)
   }catch(error){
    console.log(error);
    res.status(500).json({msg : "Error"});
   }
})
app.listen(3000);
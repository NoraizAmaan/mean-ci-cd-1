const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Connect to MONGODB
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
mongoose.connect(uri)
.then(()=> console.log('MongoDB conneted..'))
.catch(err=> console.error(err));

app.get('/',(req,res)=>{
    res.send("Backend is running!");
});
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})
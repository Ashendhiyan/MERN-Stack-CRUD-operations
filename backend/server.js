const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;
const host = 'localhost';
const router = require('./router')


app.use(cors());
app.use(express.json());


const uri = 'mongodb+srv://ashendhiyan:ashendp@cluster0.dkttrgf.mongodb.net/?retryWrites=true&w=majority';





const connect = async() => {
    try{
        await mongoose.connect(uri);
        console.log("Connected to mongoDBbbb")
    }
    catch(error){
            console.log("MongoDb error : ",error);
    }
};

connect();

const server = app.listen(port,host, () => {
    console.log(`Node server is listning to ${server.address().port}`);
});

app.use('/api', router);


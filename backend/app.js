const express = require('express');
const app = express();
const cors = require('cors');
const controller = require("./controller");
const User = require('./model');

app.use(cors());
app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

app.get("/users",(req,res) =>{
    console.log(req)
    controller.getUsers((req,res,next) => {
        res.send();
    });
});

app.get("/getUsers",(req,res) =>{
    const id = req.params.id;
    
    User.findById({_id:id})
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        })
});

app.post("/save",(req,res) => {
    controller.addUser(req.body,(callback) => {
        res.send();
    });
});

app.put("/update/:id",(req,res) => {
    controller.updateUser(req.body,(callback) => {
        res.send(callback);
    });
});

app.delete("/delete/:id",(req,res) => {
    controller.deleteUser(req.body,(callback) => {
        res.send(callback);
    });
}); 


// app.delete("/delete/:id",(req,res) => {
//     const id = req.params.id;
//     User.findByIdAndDelete({_id:id})
//         .then(response => {
//             res.json({ response });
//         })
//         .catch(error => {
//             res.json({ error });
//         })
// }); 

module.exports = app;
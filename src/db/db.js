const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then((req,res)=>{
        console.log("Database is connected");
    })
    
}
module.exports = connectToDB;
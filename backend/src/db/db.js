const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connect to database");
    }).catch((err)=>{
        console.log(err);
        
    })
}
module.exports = connectToDB;
//  create a server 
const express= require('express');
const app = express();
// import the route and mount them,
const users= require('./routes/user')
app.use('',users)
app.listen(3000,(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("server running on port 3000");
    }
})


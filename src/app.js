const express = require('express');

const app = express();

app.use(("/user"),(req,res,next) =>{
    console.log("route handler initiated");
   // res.send("hello from the hlo");
   next();

});
app.use((req,res) =>{
    res.send("2nd response");
});


app.use((req,res) =>{
    res.send("hello from the server");
});
app.listen(7777, ()=> {
    console.log("My server is running successfully on port 7777")
});
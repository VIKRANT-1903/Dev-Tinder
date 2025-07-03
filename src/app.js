const express = require('express');

const app = express();

app.use(("/hlo"),(req,res) =>{
    res.send("hello from the hlo");
});
app.use(("/test"),(req,res) =>{
    res.send("hello from the test");
});

app.use((req,res) =>{
    res.send("hello from the server");
});
app.listen(7777, ()=> {
    console.log("My server is running successfully on port 7777")
});
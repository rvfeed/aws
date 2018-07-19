const express = require("express");
const app = express();
app.get("/", (req, res) =>{
    res.send("Welcome to Node AWS");
    res.end();
})
app.listen(9000, () =>{
    console.log("Node server is running on port "+9000);
})
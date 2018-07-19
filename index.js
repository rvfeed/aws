const express = require("express");
const minimist = require("minimist");
const app = express();
const args = minimist(process.argv.slice(2));
console.log(args)
args.port  = args.port || 3000;
app.get("/", (req, res) =>{
    res.send("Welcome to Node AWS");
    res.end();
})
app.listen(args.port, () =>{
    console.log("Node server is running on port "+args.port);
})
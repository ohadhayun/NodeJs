const express = require('express');
const app = express();

const route = express.Router();

route.get('/bla', (req,res)=>{
    res.send("akjsddajks")
})

route.get('/', (req,res)=>{
    res.send("akjsddajks")
})

module.exports = route;
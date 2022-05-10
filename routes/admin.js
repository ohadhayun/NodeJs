const express = require('express');
const app = express();

const router = express.Router();

app.get('/', (req, res, next)=>{
    res.send("This is blabla");
})

router.post('/', (req, res)=>{
    res.send("blabla");
});

module.exports = router;
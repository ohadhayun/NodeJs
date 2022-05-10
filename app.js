const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use('/', (req, res)=>{
    res.status(404).send("<h1>PAGE NOT FOUND :( </h1>")
})

app.listen(3000)
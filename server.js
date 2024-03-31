const express = require('express');

const app = express();
const port = 5500;
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/portfolio').then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log(err)
})
// app.get('/', async (req, res)=>{

// })
const portfolioRoute = require('./routes/portfolioRoute');
app.use('/api/portfolio',portfolioRoute);

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
});
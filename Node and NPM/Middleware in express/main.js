const express = require('express')
const app = express()
const port=3000
const blogs=require('./routes/blogs')
const fs=require('fs')

app.use(express.static("public"));
app.use('/blogs', blogs);

//middleware-1
app.use((req,res,next) =>{
    console.log('Hello, we are going to print m1')
    fs.appendFileSync('logs.txt', `At this time ${new Date().toLocaleString()} we got a ${req.method} request \n`)
    console.log(`At this time ${new Date().toLocaleString()} we got a ${req.method}`);
    req.hecker=" I am hecker"
    // res.send("Hacked by middleware-1")
    next()
})
//middleware-2
app.use((req,res,next) =>{
    console.log('Hello we are going to print m2')
    next()
})
app.get('/', (req, res) => {
  res.send('Hello World, This is the response we are getting!' + req.hecker)
})
app.get('/about', (req, res) => {
  res.send('Hello World, this is the about page!')
})
app.get('/contact', (req, res) => {
  res.send('Hello World, this is the contacts page!')
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
}) 
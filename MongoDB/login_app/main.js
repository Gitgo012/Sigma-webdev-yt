const express = require ("express")
const mongoose = require ("mongoose")
const port = 3000
const app= express()
const path=require("path")

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/Login_db")
app.use('/public',express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "views",'index.html'));
});

app.listen(port, ()=>{
    console.log(`App is running on port number ${port}`)
})
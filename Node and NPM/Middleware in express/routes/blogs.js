const express = require('express');
const router = express.Router();
const fs=require('fs')
// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

//middleware specific to the blog wala route
router.use((req,res,next) =>{
    fs.appendFileSync('blogs_log.txt', `Logs timing is as follows ${new Date().toLocaleString()} \n`)
    console.log('Logs', new Date().toLocaleString() )
    next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs')
})

module.exports=router;
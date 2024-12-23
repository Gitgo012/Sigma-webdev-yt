const express = require('express')
const app = express()
const port = 3000


// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About page')
})
app.get('/contacts', (req, res) => {
  res.send('Contact page')
})
app.get('/products', (req, res) => {
  res.send('Products page')
})
app.get('/products/:slug/:page', (req, res) => {
  res.send(`Hello ${req.params.slug} and ${req.params.page}`)
  //this will return the params we are passing in the page
  //main-link: http://127.0.0.1:3000/products/intro%20to%20java/mongo%20db?mode=dark&location=india
  //example: { slug: 'intro to java', page: 'mongo db' }
  console.log(req.params)
  //this will return the query string which is basically a key value pair 
  //example: { mode: 'dark', location: 'india' }
  console.log(req.query)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
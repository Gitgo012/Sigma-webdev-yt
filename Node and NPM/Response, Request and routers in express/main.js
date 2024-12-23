const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public"));

//GET REQUEST IS USED TO GET DATA FROM SERVER. ITS UNSAFE AND HAS A DATA LIMIT THEREFORE FOR SENSITIVE DATA, TEXT AND FILES WE GENERALLY MAKE USE OF POST REQUEST.
app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("hey its a get request!")
})
//POST REQUEST IS GENERALLY GREAT FOR HANDLING ISSUES RELATED TO GET REQUEST. IT IS USED FOR SENDING DATA TO SERVER
app.post('/', (req, res) => {
  res.send('Hello World post!')
  console.log("hey its a post request!")
})
//PUT REQUEST IS USED FOR UPDATING DATA IN THE SERVER.
app.put('/', (req, res) => {
  res.send('Hello World put!')
  console.log("hey its a put request!")
})
//DELETE REQUEST IS USED TO DELETE DATA FROM DATABASE SERVER
app.delete('/', (req, res) => {
  res.send('Hello World delete!')
  console.log("hey its a delete request!")
})

app.get('/myfile', (req, res) => {
  res.sendFile("templates/myhtml.html", {root:__dirname})
//   res.sendFile("A:\\html css codes\\sigma-webdev\\Node and NPM\\Response, Request and routers in express\\templates\\myhtml.html")
  console.log("hey its a get request!")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
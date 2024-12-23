const fs= require('fs')

console.log("starting")
fs.writeFile("harry.txt","harry is good boy", ()=>{
    console.log("done")
    fs.readFile("harry.txt", (error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("harry.txt"," .Harry puttar tussi great ho!", (e,d)=>{
    console.log(d)
})
console.log("ending")
import fs from "fs/promises"

let a = await fs.readFile("harry.txt")
// let c=await fs.writeFile("harry.txt", "")
let b=await fs.appendFile("harry.txt", "This is an amazing promise")
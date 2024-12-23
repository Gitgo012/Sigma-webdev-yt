import fsn from 'fs'
import path from 'path'
import fs from 'fs-extra'
const pathname = "D:\\Designing Works"

let files= await fs.readdir(pathname);
// console.log(files)

for (const item of files) {
    let ext= item.split(".")[1] || "unkown"
    console.log(item)
    if (fsn.existsSync(path.join(pathname, ext))){
        fs.move(path.join(pathname, item), path.join(pathname,ext,item))
    }
    else{
        fs.mkdir(item.split(".")[1])
    }
}
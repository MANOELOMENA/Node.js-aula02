const fs = require('node:fs')

fs.readFileSync("tes.txt", 'utf-8',(err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
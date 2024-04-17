// Módulos Externos
// Módulos internos
// Módulos Cores - fs, os, path, url, http
const path = require('node:path')

const extensao = path.extname('documento.css')

if(extensao === '.pdf'){
    console.log('Arquivo enviado')
}else{
    console.log('Arquivo com extensão diferente')
}

console.log(extensao)
const fs=require('fs')
const fsp=fs.promises;
const path=require('path');
const dirPath='src/assets/icons/svg'

async function main() {
const files=await fsp.readdir(dirPath)

files.forEach(file=>{
const newName=file.replaceAll(' ','-').replaceAll(')','').replaceAll('(','').toLowerCase();

// когда меняю название, то нужно указать полный путь,а не только имя файла,поэтому используется метод join(), который соединяет корневой путь и имя файла
 fsp.rename(path.join(dirPath,file),path.join(dirPath,newName));

})
}
void main();
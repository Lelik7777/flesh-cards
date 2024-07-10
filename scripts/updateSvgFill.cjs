const fs=require('fs')
const fsp=fs.promises;
const path=require('path');
const dirPath='src/assets/icons/components'

async function main() {
const files=await fsp.readdir(dirPath);

files.forEach(async(file)=>{
const fileContent= await fsp.readFile(path.join(dirPath,file),'utf-8')
const newContent=fileContent.replaceAll('#000','currentColor')

 await fsp.writeFile(path.join(dirPath,file),newContent)
})


}
void main();
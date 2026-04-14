    //asignment 3  
    //Part1: Core Modules ( 1.5 Grades)
 //number 1 
    const fs =require('fs');
const zlib=require('zlib');
const{pipeline}=require('stream');

    // const readStream=fs.createReadStream('./big.txt');
    // readStream.on('data',(chunk)=>{
    //     console.log(chunk.toString());
    // });
    // readStream.on('end',()=>{
    //     console.log('finished');
    // });
    //____________________________________________________________________________      
    //number 2
//  const writeStream=fs.createWriteStream('./source.txt');
//  const readstream1=fs.createReadStream('./dest.txt');
//  readstream1.pipe(writeStream);
//  writeStream.on('finish', () => {
//     console.log('File copied using streams.');
// });
//_________________________________________________________________
//number 3
// pipeline(
//     fs.createReadStream('./data.txt'),
//     zlib.createGzip(),
//     fs.createWriteStream('./data.txt.gz'),
//     (error)=>{
//         if(error){
//             console.error('Pipeline failed:',error);
//         }        else{
//             console.log('Pipeline succeeded.');
//         }
//     }
// )
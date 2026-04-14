const http=require ('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const  users= JSON.parse(fs.readFileSync('users.json','utf-8'))
let{url,method} = req;
// get  method
if(url == '/user' && method == "GET"){

res.end(JSON.stringify(users));


}
// post method
else if (url =='/user' && method == "POST"){

let data;
req.on('data',(chunk)=>{

data=JSON.parse(chunk);

})
req.on('end',()=>{
const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
let {name,age} = data;    
users.push({id,name,age});
fs.writeFileSync('users.json',JSON.stringify(users));
    res.end('user added successfully');
    console.log(users);
    
})
} 
// patch method
else if (url == '/user' && method =="PATCH"){
let id='';
let data='';
req.on('data',(chunk)=>{
data=JSON.parse(chunk);
const id = parseInt(url.split('/')[2]);})
req.on('end',()=>{
let userupdate =users.find(user => user.id == id)
if(userupdate){
    userupdate.name = data.name;
    userupdate.age = data.age;
    fs.writeFileSync('users.json',JSON.stringify(users));
    res.end('user updated successfully');
console.log(users);

}
else{
res.end('user not found');
}

})
}
else if (url=='/user' && method == "DELETE"){
 let id='';
 req.on('data',(chunk)=>{
const id = parseInt(url.split('/')[2]);
 })
 req.on('end',()=>{

let userindex= users.findIndex(user => user.id ==id)
if(userindex !=-1){
    users.splice(userindex,1);
    fs.writeFileSync('users.json',JSON.stringify(users));
    res.end('user deleted successfully');
    console.log(users);
    
}else{
    res.end('user not found');
}
 })

}
});

server.listen(3000,()=>{
console.log('server is running on port 3000');
})
/*
12. Write a JavaScript function to uncamelize a string. Go to the editor
Test Data :
console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_'));
"hello world" 
"hello-world" 
"hello_world
 */
let uncamelize=(str,n)=>{
 let v
let ar=str.split('')

  for(let i=0;i<ar.length;i++)
  {
    if (ar[i]==ar[i].toUpperCase())
      {
      ar[i]=ar[i].toLowerCase();
        ar.splice(i,0,n) 
        v=ar.join('')
      }
   
    
}

return v
}
console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_'));


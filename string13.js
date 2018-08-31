/*
13. Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
"Ha!" 
"Ha!Ha!" 
"Ha!Ha!Ha!"

 */

const repeat=(str,n)=>{
  if(n==undefined)
    return str
  else
 return str.repeat(n)
  
}
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
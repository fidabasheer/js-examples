/*
1. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
Test Data :
console.log(is_string('w3resource')); 
true
console.log(is_string([1, 2, 4, 0]));
false

 */
let is_string=(a)=>{
let  b=a.toString();
  if (a===b)
    return true;
  else
    return false;
  
  
}
console.log(is_string('w3resource')); 
console.log(is_string([1, 2, 4, 0]));
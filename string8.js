/*
8. Write a JavaScript function to capitalize the first letter of a string. Go to the editor
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises
 */
const capitalize=(str)=>{

  return str.replace(str[0],str[0].toUpperCase())
  
  
  
}
console.log(capitalize('js string exercises'))
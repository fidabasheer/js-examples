/*
4. Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"

 */
let truncate_string=(a,n)=>{
  return a.substr(0,n);
  
}
console.log(truncate_string("Robin Singh",4));

/*
6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"

 */

const protect_email=(a)=>{
  let sp=a.split('@');
 let  tail= '@'+ sp[1];
 let head= sp[0];
let b=head.slice(0,5);
  b=b.padEnd(10,'.')
  return b+tail;
  
}

console.log(protect_email("robin_singh@example.com"));

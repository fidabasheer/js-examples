/*
20. Write a JavaScript function that can pad (left, right) a string to get to a determined length. Go to the editor
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output : 
"0123" 
"12300000"
 */

const formatted_string=(str,sub,d)=>{
  sub=sub.toString();
  let k=str.length-sub.length
  
  if(d=='l'){
   
   let c=str.slice(0,k);

   return c.padEnd(str.length,sub)
  }
   else 
     {
      let c=str.slice(k-1,str.length);
     
   return c.padStart(str.length-1,sub)
     }
}
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
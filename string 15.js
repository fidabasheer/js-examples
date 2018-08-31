/*

15. Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
Test Data :
console.log(humanize_format()); 
console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 
"1st" 
"8th" 
"301st" 
"402nd"

 */

const humanize_format=(n)=>{
let result;
  if(n==undefined)
    return null
 
  let x=n%10;
  if(x==1){
  result=n.toString();
    return result.concat("st")
      
  }
else  if(x==2)
  {
      result=n.toString();
    return result.concat("nd")
  }
  else if(x==3)
    {
      result=n.toString();
    return result.concat("rd")
    }
  else
    {
      result=n.toString();
    return result.concat("th")
    }

  
  
}
console.log(humanize_format()); 
console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 
 


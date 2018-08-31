/*
10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */
const swapcase=(str)=>{
  let ar=str.split('')
  for(let i=0;i<ar.length;i++)
  {
    if (ar[i]==ar[i].toUpperCase() )
      {
      ar[i]=ar[i].toLowerCase();
        
      }
       else
      ar[i]=ar[i].toUpperCase();
}


return ar.join('')
}
console.log(swapcase('AaBbc'));

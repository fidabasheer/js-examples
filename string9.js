/*
9. Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"

 */

const capitalize_Words=(str)=>{
  let i,k=0,p
 let a=str.split(' ')
  for(i=0;i<a.length;i++)
   {
       
       a[i]=a[i].replace(a[i][0],a[i][0].toUpperCase())
      
        
    }

  return a.join(' ')
                           
}
console.log(capitalize_Words('js string exercises'));
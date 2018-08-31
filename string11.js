/*
11. Write a JavaScript function to convert a string into camel case.Go to the editor
Test Data :
console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises" 
"JavaScriptExercises" 
"JavaScriptExercises"
 */

const camelize=(str)=>{
  let i,k=0,p
 let a=str.split(' ')
  for(i=0;i<a.length;i++)
   {
       
       a[i]=a[i].replace(a[i][0],a[i][0].toUpperCase())
      
        
    }

  return a.join('')
                           
}
console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));
/*Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2] */

const last=(arr,n)=>{
 let array=arr.reverse();
    if (n==null)
    {
      return arr[0];
    }
  if (n > 0)
  
  {
   let array= arr.slice(0,n)
    return array.reverse();  }
  if(n<0)
    {
      return [];
    }
  
}
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));





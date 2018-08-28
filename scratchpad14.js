/*
 Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 
 */

let lrg=(a,b,c,d,e)=>{
let arr=[a,b,c,d,e];
for(let i=0;i<arr.length;i++)
   for(let j=0;j<arr.length;j++)
 if(arr[j]>arr[j+1])
     {
       temp=arr[j];
       arr[j]=arr[j+1]
       arr[j+1]=temp
     }
        alert (+arr[arr.length-1]+ "is greater");
}
lrg( -5, -2, -6, 0, -1 );





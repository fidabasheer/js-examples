/*
5. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.


 */

let sep=(num)=>{
  let ar = Array.from(num);
  console.log(Array.from(num.toString()));
  for(let i=0; i<ar.length ; i++){
   if (ar[i]%2==0 && ar[i+1]%2==0 ){
    ar.splice(i+1,0,'-')
    }
  }
     console.log(ar.join(''))
    
}
sep("025468" );

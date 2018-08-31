/*
18. Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1

 */
const count=(str,sub)=>{


    let re = new RegExp(sub, 'gi');
return(str.match(re).length);
  
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
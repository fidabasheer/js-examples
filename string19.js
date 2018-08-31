/*
19th question
Write a JavaScript function to escape a HTML string. Go to the editor
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
 */

const escape_HTML=(str)=>{
let i=0,c;

 while(i<str.length)
   {
if(str[i]==='<')
 {     

  c=str.replace('<','&lt;')
 } if(str[i]==='>'){
  ;
     c=c.replace('>','&gt;')
 }
  if(str[i]=='"')
        {
     c=c.replace('"','&quot;')
        }
  i++
   }return c
}
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
/*
Exception: SyntaxError: redeclaration of const escape_HTML
@Scratchpad/1:1:1
*/
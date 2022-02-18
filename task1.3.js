function trueOrFalse ( num1, num2) {
 var sum = num1 + num2;
 
 if (num2 == 65 || num1 ==65){
   return true
 } else if (sum === 65){
   return true
 }
     else {
       return false; 
     }
   }
   
   console.log(trueOrFalse(1, 64));
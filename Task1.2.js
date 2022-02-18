function trueOrFalse ( num1, num2) {
 var sum = num1 + num2;
 var sumStr = sum.toString();
 var lengthOfSumStr = sumStr.length;
 
 if ((num1 == 3 || num2 ==3) || (sumStr.charAt(lengthOfSumStr-1) =='3')){
   return true
 }
     else {
       return false; 
     }
   }
   console.log(trueOrFalse(23, 10));
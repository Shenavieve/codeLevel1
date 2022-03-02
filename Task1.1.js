function multiples (num) {
  let sum = 0;
  for (let i =1; i < num ; i++) {
    if ((i% 3 === 0) || (i% 5=== 0)){
      sum+= i;
    }
  }
  console.log(sum);
}
multiples(1000);

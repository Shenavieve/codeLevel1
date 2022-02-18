function multiples (num) {
  var sum = 0;
  for (var i =1; i < num ; i++) {
    if ((i% 3 == 0) || (i% 5== 0)){
      sum+= i;
    }
  }
  console.log(sum);
}
multiples(1000);
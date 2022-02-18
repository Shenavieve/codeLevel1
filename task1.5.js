function triangle(num){
let n = num;
let string = "" ;

if (n >0){
for (let i = 1; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    string += "#";
  }

  string += "\n";
}
}

else (n*=-1)
  for (let i = 0; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    string += "#";
  }
  
  string += "\n";
}


return string + "\n"
  

}
console.log(triangle(10))
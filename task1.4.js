function square(shape){
let n = shape;

let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    string += "#";
  }

  string += "\n";
}

console.log(string);
}
console.log(square(5))
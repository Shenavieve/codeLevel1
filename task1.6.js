function longest (arrayofStrings){
  var maxLength = 0;
  var listOfMax =[];
  
  for (var x =0; x < arrayofStrings.length; x++){
    if ( arrayofStrings[x].length > maxLength){
      maxLength = arrayofStrings[x].length;
    }
  }
  
  for (var y = 0; y < arrayofStrings.length; y++){
    if (arrayofStrings[y].length == maxLength){
      listOfMax.push(arrayofStrings[y]);
    }
  }
  
  for ( var z = 0; z < listOfMax.length; z++){
    console.log (listOfMax[z].toString());
  }
}
longest (["ba" , "a" ,"c"]);
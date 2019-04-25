
/*
* Custom implementation of string indexing.
* returning the index positions of letters of the alphabet.
*/




function alphabetPosition(text) {
  const alphabetAZ = "abcdefghijklmnopqrstuvwxyz";
  var alphaPos = [];
  text = text.toLowerCase();
  
  for (let i = 0; i < text.length; i++){
    let idex = alphabetAZ.indexOf(text[i].toString());
    
    if (idex === -1){
      continue;
    }else{
      alphaPos.push(idex + 1);
      
      }
  
  }
  
  return alphaPos.join(" ");
}
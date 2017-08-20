export default  function platzom(str) {

var array = str.split("");


var inver = array.map((item, index) => array[array.length -1 - index]);

// palindromo
if (array.join("") == inver.join("")) {
  var palindromo = array.map( (item, index) => (index %2 == 0) ? item.toUpperCase("") : item);

  return palindromo.join("");
}
//regla 1
else if (array[array.length-1] == "r" || array[array.length-2] == "a") {
       array.splice(array.length-2,array.length-1);
}
//regla 2



 if (array[0] == "z") {
array.push("p","e");
}
// regla 3
 if (array.length >= 10) {
array.splice(Math.floor(array.length/2),0,"-")
}


return array.join("");

}

//otras formas de intercalar mayusculas

function mM(str) {
var array = str.split("");

var ar =  array.map( function(item,index) {
  if (index % 2== 0) {
    return item.toUpperCase();
  }

  else {
    return item;
  }
}
);

return ar.join("");
}

function intercalar(str) {
  let translation = '';
  capitalize = true;
  for (var i = 0; i < str.length; i++) {
    capitalize ? translation += str.charAt(i).toUpperCase() : translation += str.charAt(i);
    capitalize = !capitalize;
  }
  return translation;
}

// Decimal to Binary 
function toBinary(d) {
    var counter = d;
    var binary = "";
    var expo = Math.ceil(Math.log(d));
    for (var i = expo; i >= 0; i--) {
      if (counter >= Math.pow(2, i)) {
        binary += "1";
        counter -= Math.pow(2, i);
      } else {
        binary += "0";
      }
    }
    return binary;
}
  
console.log(toBinary(5));
console.log(toBinary(8));
console.log(toBinary(15));
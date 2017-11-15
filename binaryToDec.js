// Binary to Decimal 
function toDec(b) {
    var binary = b.toString();
    var sum = 0;
    var blank = 0;
    var bcounter = binary.length-1;
    for (var i = 0; i < binary.length; i++) {
      if (binary[i] === "1") {
        sum += Math.pow(2, bcounter);
        bcounter --;
      } else if (binary[i] === "0") {
        sum + blank;
        bcounter --;
      }
    }
    return sum;
}
  
console.log(toDec(101));
console.log(toDec(1000));
console.log(toDec(100011));
console.log(toDec(11100011));
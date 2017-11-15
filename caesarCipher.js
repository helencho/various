// Caesar's Cipher 
// Free Code Camp Exercise 
// Write a function which takes a ROT13 encoded string as input 
// and returns a decoded string.

function rot13(str) {
    var arrayCode = [];
    var arrayCode2 = [];
    var arrayChar = [];
    for (var i = 0; i < str.length; i++) {
        arrayCode.push(str.charCodeAt(i))
    }

    for (var j = 0; j < arrayCode.length; j++) {
        if (arrayCode[j] >= 65 && arrayCode[j] <= 77) {
            arrayCode2.push(arrayCode[j] + 13)
        } else if (arrayCode[j] >= 78 && arrayCode[j] <= 90) {
            arrayCode2.push(arrayCode[j] - 13)
        } else {
            arrayCode2.push(arrayCode[j])
        }
    }

    for (var k = 0; k < arrayCode2.length; k++) {
        arrayChar.push(String.fromCharCode(arrayCode2[k]))
    }

    return arrayChar.join("");
}

console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("SERR CVMMN!"))
console.log(rot13("SERR YBIR?"))
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."))

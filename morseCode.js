// Type English 
// Return morse code 
// October 6, 2017 

var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

var abcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
var morseCode = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', "......."
];

function translate(string) {
    var stringArray = string.toLowerCase().split("");
    console.log(stringArray.map((x) => morseCode[abcArray.indexOf(x)], []).join(" "));
}

rl.on('line', function (input) {
    clear();
    translate(input);
})
console.log("send your message")
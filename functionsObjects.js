// Iterate through key-values in an array 

var arrayOfObj = [
    {a: "one", b: "two", c: "three"},
    {a: "four", b: "five", c: "six"},
    {a: "seven", b: "eight", c: "nine"}];
    
function listObjects(array) {
    for (var i = 0; i < array.length; i++) {
        var object = array[i];
        for (var key in object) {
            console.log(key + " is " + object[key]);
        }
    }
}
  
listObjects(arrayOfObj);

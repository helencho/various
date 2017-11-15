// Comparing functions 
// only works with anonymous functions 

let check = function (a) {
    return a + a;
}

let mate = function (a) {
    return a + a;
}

// eliminate lines and space characters 
check = check.toString().replace(/\n/g, "").replace(/\s/g, "");
mate = mate.toString().replace(/\n/g, "").replace(/\s/g, "");

// log each variable 
console.log(check);
console.log(mate);

// compare variables 
console.log(check === mate); // => true 


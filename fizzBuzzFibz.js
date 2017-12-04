// divisible by 3: log fizz
// divisible by 5: log buzz
// divisible by 3 AND 5: log fizzbuzz
// fib #: log fibz
// otherwise: log the number

let fib = [0, 1];

const generateFib = () => {
    i = 0;
    while (fib[fib.length - 1] <= 100) {
        fib.push(fib[i] + fib[i + 1]);
        i++;
    }
};

const fb = () => {
    for (let i = 1; i <= 100; i++) {
        if (fib.includes(i)) {
            console.log('fibz');
        } else if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
};

generateFib();
fb();

// October 2, 2017 
// Authored by Helen Cho 

// Attempt 1 
// List students from order of highest to lowest testGrade 
// Long way 
var students = [
    {
        name: "Helen",
        testGrade: 80
    },
    {
        name: "Michelle",
        testGrade: 100
    },
    {
        name: "David",
        testGrade: 10
    },
    {
        name: "Ben",
        testGrade: 90
    }
]


var sortStudentGrades = (obj) => {
    var grades = [];
    for (var key in obj) {
        grades.push(obj[key].testGrade);
    }
    grades.sort(function (a, b) {
        return b - a;
    })
    return grades;
}


var findTheStudent = (arr, obj) => {
    for (var i = 0; i < arr.length; i++) {
        for (var key in obj) {
            if (obj[key].testGrade === arr[i]) {
                console.log(obj[key].name + " scored " + obj[key].testGrade);
            }
        }
    }
}

findTheStudent(sortStudentGrades(students), students)


// Attempt 2 
// Shorter way 
var students = [
    {
        name: "Helen",
        testGrade: 9
    },
    {
        name: "Michelle",
        testGrade: 80
    },
    {
        name: "David",
        testGrade: 88
    },
    {
        name: "Ben",
        testGrade: 81
    }
]

var sortHighestToLowest = (obj) => {
    var grades = [];
    for (var key in obj) {
        grades.push(obj[key].testGrade);
    }

    grades.sort(function (a, b) {
        return b - a;
    })

    grades.map(function (value) {
        for (var key in obj) {
            if (obj[key].testGrade === value) {
                console.log(obj[key].name + " scored " + obj[key].testGrade);
            }
        }
    })
}

sortHighestToLowest(students);


// Attempt 3 
// Given an array of grades 
// Find the average of grades and list students in order of highest to lowest average grade 
var students = [
    { name: "Helen", testGrade: [80, 40, 30] },
    { name: "Michelle", testGrade: [100, 90, 95] },
    { name: "David", testGrade: [10, 10, 10] },
    { name: "Ben", testGrade: [90, 60, 90] }
]

function average(arr) {
    return arr.reduce((a, x) => a += x) / arr.length;
}

function switchToAverageGrade(obj) { // replace current array of grade with a single average grade 
    for (var key in obj) {
        obj[key].testGrade = average(obj[key].testGrade);
    }
    return obj;
}

function sortHighestToLowest(obj) {
    var grades = [];
    for (var key in obj) {
        grades.push(obj[key].testGrade)
    }
    grades.sort(function (a, b) {
        return b - a;
    })
    // console.log(grades);
    grades.map(function (value) {
        for (var key in obj) {
            if (obj[key].testGrade === value) {
                console.log(obj[key].name + " scored an average of " + obj[key].testGrade);
            }
        }
    })
}

sortHighestToLowest(switchToAverageGrade(students))



// Attempt 4
// Trying to make it shorter 
var students = [
    { name: "Helen", testGrade: [80, 40, 30] },
    { name: "Michelle", testGrade: [100, 90, 95] },
    { name: "David", testGrade: [10, 10, 10] },
    { name: "Ben", testGrade: [90, 60, 90] }
]

function average(arr) {
    return arr.reduce((a, x) => a += x) / arr.length;
}

function switchToAverageGrade(obj) { // replace current array of grade with a single average grade 
    for (var key in obj) {
        obj[key].testGrade = average(obj[key].testGrade);
    }
    return obj;
}

function sortHighestToLowest(obj) {
    var grades = [];
    for (var key in obj) {
        grades.push(obj[key].testGrade)
    }
    grades.sort(function (a, b) {
        return b - a;
    })
    // console.log(grades);
    grades.map(function (value) {
        for (var key in obj) {
            if (obj[key].testGrade === value) {
                console.log(obj[key].name + " scored an average of " + obj[key].testGrade);
            }
        }
    })
}

sortHighestToLowest(switchToAverageGrade(students))
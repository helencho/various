// Bubble Sort 

let array = [5, 3, 1, 4, 2] 
let array2 = [4, 3, 5, 2, 1]

const sort = array => {
    let newArray = array.slice(0)

    // loop through the length of the array 
    for (let i = 0; i < newArray.length; i++) {
        // set swapped status to false at the start of the loop 
        let swapped = false

        // start looping through individual elements 
        for (let j = 0; j < newArray.length; j++) {
            let first = newArray[j] 
            let second = newArray[j+1]

            // compare adjacent numbers 
            if (second < first) {

                // cut out the second number from array and store in a variable 
                let cut = newArray.splice(j+1, 1)[0]

                // add the cut number before the first number 
                newArray.splice(j, 0, cut)

                // set swapped status to true 
                swapped = true
            } 
        }

        // if there was no swapping in the second loop 
        // cut the loop off 
        if(!swapped) {
            break; 
        }
    }
    return newArray;
}

console.log(sort(array))
console.log(sort(array2))
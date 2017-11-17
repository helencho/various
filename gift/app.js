const express = require("express");
const morgan = require("morgan");
const port = 4100
const app = express();;
const fs = require("fs");

let peter;
let lev;
let reed;

fs.readFile("peter.json", (err, data) => {
    if (err) throw err;
    peter = JSON.parse(data);
})
fs.readFile("lev.json", (err, data) => {
    if (err) throw err;
    lev = JSON.parse(data);
})
fs.readFile("reed.json", (err, data) => {
    if (err) throw err;
    reed = JSON.parse(data);
})

app.use(morgan("dev"));
app.get("/", (request, response) => {
    let output = {
        url: `http://localhost:${port}`,
        params: `/{name}`
    }
    response.send(output)
})
app.get("/:name", (request, response) => {
    const { name } = request.params;
    // make new object using constructor function 
    let output = new Quote(name);
    response.send(output);
})
app.get("*", (request, response) => {
    response.redirect("/");
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// constructor function 
function Quote(name) {
    this.name = name;
    this.quote = randomQuote(name);
}

const randomQuote = instructor => {
    // let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (instructor) {
        case "peter":
            return peter[Math.floor(Math.random() * (peter.length - 1 + 1))];
            break;
        case "lev":
            return lev[Math.floor(Math.random() * (lev.length - 1 + 1))];
            break;
        case "reed":
            return reed[Math.floor(Math.random() * (reed.length - 1 + 1))];
            break;
        default:
            return "* has nothing good to say *";
            break;
    }
}

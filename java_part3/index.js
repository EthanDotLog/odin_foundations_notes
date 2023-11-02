let num1 = 3;
let num2 = 5;

function add7(x) {
    return x += 7
};


console.log(add7(num1));

function multiply(x ,y) {
    return x * y
};

console.log(multiply(num1, num2))


function capitalize(x) {
    return x = x[0].toUpperCase() + x.slice(1)
};

console.log(capitalize("thIs Is A test String YAHHH"))


function lastLetter(x) {
    last = x.length - 1
    return x.slice(last)
}

console.log(`should pull an extra x ${lastLetter("fghx")}`)
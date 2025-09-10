function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

console.log(add(5, 6));
console.log(subtract(9, 6));
console.log(multiply(5, 6));
console.log(divide(10, 2));

function operate(op, a, b) {
    switch (op) {
        case `+`:
            return add(a, b);
        
        case `-`:
            return subtract(a, b);
            

        case `X`:
            return multiply(a, b);
            

        case `/`:
            return divide(a, b);
            
    }
}

console.log(operate(`X` ,55, 11));
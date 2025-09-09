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
            add(a, b);
            break;
        
        case `-`:
            subtract(a, b);
            break;

        case `X`:
            multiply(a, b);
            break;

        case `/`:
            divide(a, b);
            break;
    }
}
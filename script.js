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

//const display = document.querySelector(`.display`);
const displayNum = document.querySelector(`#displayNum`);
const buttons = document.querySelectorAll(`button`);
let num1 = "";
array =[];
buttons.forEach(button => {
    //display the text clicked button on screen
    button.addEventListener(`click`, () => {
        
        
        
        if (button.textContent == `=`) {
            array.push(displayNum.textContent);
            let ans = operate(array[array.length - 3],parseInt(array[array.length - 2]),parseInt(array[array.length - 1]));
            console.log("operations answer is " + ans);
            displayNum.textContent = ans;
            num1="";
            array=[];
        }else if (button.textContent == `AC`||button.textContent == `C`) {
            displayNum.textContent = "";
            num1="";
            array=[];
        }
        else if (button.textContent == `+` ||
            button.textContent == `-` || 
            button.textContent == `X` || 
            button.textContent == `/`  ) {
                //calculation with multiple operators
                if (array.length > 0) {
                    array.push(displayNum.textContent);
                    let ans = operate(array[array.length - 3],parseInt(array[array.length - 2]),parseInt(array[array.length - 1]));
                    console.log("operations answer is " + ans);
                    displayNum.textContent = ans;
                    array.push(button.textContent);
                    array.push(ans);
                    num1="";
                    console.log(array);
                } //first round of calculations 
                else {
                    array.push(button.textContent);
                    array.push(displayNum.textContent);
                    console.log(array);
                    num1 = "";
                }
                
        } else {   
            
            console.log(`num1 is initially : ${num1}`);
            num1 = num1 + button.textContent;
            displayNum.textContent = num1;
            console.log(`now doing number, num1 is initially : ${num1}`);
        }
    });
});
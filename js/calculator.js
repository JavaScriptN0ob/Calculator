let clear = document.querySelector('.clear');
let clock = document.querySelector('.clock');
let divide = document.querySelector('.divide');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let multiple = document.querySelector('.multiple');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let minus = document.querySelector('.minus');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let plus = document.querySelector('.plus');
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');
let equal = document.querySelector('.equal');
let input = document.querySelector('.calculator__screen-review');
let result = document.querySelector('.calculator__screen-result');

one.addEventListener('click', () => {input.value += '1'});
two.addEventListener('click', () => {input.value += '2'});
three.addEventListener('click', () => {input.value += '3'});
four.addEventListener('click', () => {input.value += '4'});
five.addEventListener('click', () => {input.value += '5'});
six.addEventListener('click', () => {input.value += '6'});
seven.addEventListener('click', () => {input.value += '7'});
eight.addEventListener('click', () => {input.value += '8'});
nine.addEventListener('click', () => {input.value += '9'});
zero.addEventListener('click', () => {input.value += '0'});
plus.addEventListener('click', () => {input.value += '+'});
minus.addEventListener('click', () => {input.value += '-'});
multiple.addEventListener('click', () => {input.value += 'x'});
divide.addEventListener('click', () => {input.value += '/'});
clear.addEventListener('click', () => {
    input.value = '0';
    result.value = '0';
    clearInterval(timer);
});
dot.addEventListener('click', () => {input.value += '.'});

function time() {
    input.value = new Date().toLocaleTimeString();
}
clock.addEventListener('click', () => { 
    input.value="Clock is loading!";
    timer = setInterval(() => {
        time()
    }, 1000);
});



equal.addEventListener('click', () => {
    var number1 = parseInt(input.value.slice(0, input.value.length-1));
    var operator = input.value.charAt(input.value.length);
    console.log(`first number is ${number1}`);
    console.log(`operator is ${operator}`);
    let operatorPlusPosition = input.value.indexOf('+');
    let operatorMinusPosition = input.value.indexOf('-');
    let operatorMulPosition = input.value.indexOf('x');
    let operatorDivPosition = input.value.indexOf('/');
    // console.log(operatorPlusPosition);
    // console.log(operatorMinusPosition);
    // console.log(operatorMulPosition);
    // console.log(operatorDivPosition);
    if(operatorPlusPosition>1){
        let number2 = parseInt(input.value.slice(operatorPlusPosition+1));
        result.value = number1 + number2;
        input.value = "0";
    }
    else if (operatorMinusPosition>1) {
        let number2 = parseInt(input.value.slice(operatorMinusPosition+1));
        result.value = number1 - number2;
        input.value = "0";
    }
    else if (operatorMulPosition>1) {
        let number2 = parseInt(input.value.slice(operatorMulPosition+1));
        result.value = number1 * number2;
        input.value = "0";
    }
    else if(operatorDivPosition>1) {
        let number2 = parseInt(input.value.slice(operatorDivPosition+1));
        result.value = number1 / number2
    } else {
        result.value = input.value;
    }
})


document.querySelector('.container').style.zoom = `${document.body.clientWidth /1000 * 0.4}`;

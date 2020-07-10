let clear = document.querySelector('.clear');
let clock = document.querySelector('.clock');
let dot = document.querySelector('.dot');
let equal = document.querySelector('.equal');
let input = document.querySelector('.calculator__screen-review');
let result = document.querySelector('.calculator__screen-result');

let number = document.querySelectorAll('.number').forEach((element) => {
  element.addEventListener('click', () => {
    input.value += `${element.innerText}`;
  })
})

let operator = document.querySelectorAll('.operator').forEach((element) => {
  element.addEventListener('click', () => {
    input.value += `${element.innerText}`;
  })
})


dot.addEventListener('click', () => {
  if(input.value.indexOf('.') == '-1') {
    input.value += '.';
  }
});

clear.addEventListener('click', () => {
  input.value = '0';
  result.value = '0';
  clearInterval(timer);
});


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
  var number1 = parseFloat(input.value.slice(0, input.value.length-1));
  var operator = input.value.charAt(input.value.length);
  console.log(`first number is ${number1}`);
  console.log(`operator is ${operator}`);
  let operatorPlusPosition = input.value.indexOf('+');
  let operatorMinusPosition = input.value.indexOf('-');
  let operatorMulPosition = input.value.indexOf('x');
  let operatorDivPosition = input.value.indexOf('/');

  if(operatorPlusPosition>1){
    let number2 = parseFloat(input.value.slice(operatorPlusPosition+1));
    result.value = number1 + number2;
    input.value = "0";
  }
  else if (operatorMinusPosition>1) {
    let number2 = parseFloat(input.value.slice(operatorMinusPosition+1));
    result.value = number1 - number2;
    input.value = "0";
  }
  else if (operatorMulPosition>1) {
    let number2 = parseFloat(input.value.slice(operatorMulPosition+1));
    result.value = number1 * number2;
    input.value = "0";
  }
  else if(operatorDivPosition>1) {
    let number2 = parseFloat(input.value.slice(operatorDivPosition+1));
    result.value = number1 / number2
  } else {
    result.value = input.value;
  }
})

function clearFirstZero() {
  if(input.value.length>=2 && input.value.charAt(0) === '0') {
    if(input.value.charAt(1) !== '.') {
      input.value = input.value.replace(0, '');
    }
  }
}



document.querySelectorAll('div').forEach((element) => {
  element.addEventListener('mouseleave', ()=> {
    clearFirstZero();
    // console.log('mouse left');
  });
  element.addEventListener('mouseenter', ()=> {
    clearFirstZero();
    // console.log('mouse in');
  });
});
    

document.querySelector('.container').style.zoom = `${document.body.clientWidth /1000 * 0.4}`;

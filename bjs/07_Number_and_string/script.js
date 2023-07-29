let lastOperand = 0;            // последний операнд
let operation = null;           // текущая операция 
let valueBtn = '';              // знак на кнопке

const inputWindow = document.querySelector('#inputWindow');     // поле ввода
const cardBody = document.querySelector('.card-body');          // контейнер с кнопками

// сброс значений ввода

function clear_input() {
    lastOperand = 0;
    operation = '';
    inputWindow.value = ''
};

// определение значения кнопки



// слушаем событие нажатия на контейнер с кнопками

cardBody.addEventListener('click', function (event) {
    console.log(event);
    buttonValue=event.target.innerText;
    console.log(buttonValue);
    if (operationBtn >= 0 && operationBtn <= 9) {
        console.log(operationBtn);
        inputWindow.value += operationBtn;
    };
})

document.querySelector('#btn_clr').addEventListener('click', function () {
    clear_input();
});

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.querySelector('#btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.querySelector('#btn_mult').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
})

document.querySelector('#btn_calc').addEventListener('click', function () {
    let result;
        if (operation === 'sum') {
        result = lastOperand + parseInt(inputWindow.value);
    } else if (operation === 'def') {
        result = lastOperand - parseInt(inputWindow.value);
    } else if (operation === 'mult') {
        result = lastOperand * parseInt(inputWindow.value);
    } else {}

    if (isNaN(result)) {
        inputWindow.value = 'ERROR';
        setTimeout(clear_input, 1000);
    } else {
        inputWindow.value = result
    }
    lastOperand = 0;
    operation = null;
})

// document.querySelector('#btn_1').addEventListener('click', function () {
//     inputWindow.value += '1';
// })

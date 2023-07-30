let lastOperand = 0;            // последний операнд
let operation = null;           // текущая операция 
let currentBtn = ''             // текущая кнопка

const inputWindow = document.querySelector('#inputWindow');     // поле ввода
const cardBody = document.querySelector('.card-body');          // контейнер с кнопками

// сброс значений ввода

function clear_input() {
    lastOperand = 0;
    operation = '';
    currentBtn = '';
    inputWindow.value = '';
}

// запомнить операцию

function rememberOperation(curOperation) {
    lastOperand = parseInt(inputWindow.value);
    operation = curOperation;
    inputWindow.value = ''
}

// Вычисление

function resultCalc() {
    let result;
    switch (operation) {
        case 'sum':
            result = lastOperand + parseInt(inputWindow.value);
            break;
        case 'def':
            result = lastOperand - parseInt(inputWindow.value);
            break;
        case 'mult':
            result = lastOperand * parseInt(inputWindow.value);
            break;
        case 'del':
            result = lastOperand / parseInt(inputWindow.value);
            break;
        default:
    }
    checkNaN(result);
    lastOperand = 0;
    operation = null;
}

function checkNaN(result) {
    if (isNaN(result)) {
        inputWindow.value = 'ERROR';
        setTimeout(clear_input, 1000);
    } else {
        inputWindow.value = result;
    }
}

// слушаем Клик на контейнер с кнопками

cardBody.addEventListener('click', function (event) {
    currentBtn = event.target.id;
    // logData();
    switch (currentBtn) {
        case 'inputWindow':
            break;
        case 'btn_clr':         // очистка
            clear_input();
            break;
        case 'btn_sum':         // сумма
            rememberOperation('sum');
            break;
        case 'btn_def':
            rememberOperation('def');
            break;
        case 'btn_mult':
            rememberOperation('mult');
            break;
        case 'btn_del':
            rememberOperation('del');
            break;
        case 'btn_root':
            checkNaN(Math.sqrt(inputWindow.value));
            break;
        case 'btn_calc':
            resultCalc();
            break;
        default:
            const buttonValue = currentBtn[currentBtn.length-1];
            if (buttonValue >= 0 && buttonValue <= 9) {
                inputWindow.value +=buttonValue;
            };
    };
});

// вывод для отладки
function logData () {   
    console.log('lastOperand = ' + lastOperand);
    console.log('operation = ' + operation);
    console.log('currentBtn = ' + currentBtn);
}

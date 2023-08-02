const orderNumberField = document.querySelector('#orderNumberField');   // поле номера вопроса
const answerField = document.querySelector('#answerField');             // поле ответа

let minValue = 0;
let maxValue = 100;
let answerNumber  = '';
let orderNumber = 1;
let gameRun = true;

// проверка попадания в пределы

function checkValue(result) {
    if (result <= -1000) {
        result = -999;
    } else if (result >= 1000) {
        result = 999;
    }
    return result;
}

// начало игры

function gameBegin() {

    minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));
    if (minValue !== 0) {
        minValue = minValue || '-999';
        minValue = checkValue(minValue);
    };
    if (maxValue !== 0) {
        maxValue = maxValue || '999';
        maxValue = checkValue(maxValue);
    };
 
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerNumber  = Math.round((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
}

// некорректный ответ - сообщение + оставнока игры

function incorrectAnswer () {

    let phraseRandom = Math.round( Math.random() * 4);
    let answerPhrase;
    
    switch (phraseRandom) {
        case 1:
            answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            break;
        case 2:
            answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            break;
        case 3:
            answerPhrase = `Ответ невозможен! \n\u{1F975}`;
            break;
        default:
            answerPhrase = `Так нельзя...\n\u{1F62A}`;
    }
        answerField.innerText = answerPhrase;
        gameRun = false;
}

// поиск среднего значения

function findMiddle () {
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber++;
    orderNumberField.innerText = orderNumber;
    // варианты ответа
    let phraseRandom = Math.round( Math.random() * 4);
    let answerPhrase;
    switch (phraseRandom) {
        case 1:
            answerPhrase = `Да это легко! Ты загадал`;
            break;
        case 2:
            answerPhrase = `Наверное это число`;
            break;
        case 3:
            answerPhrase = `Похоже это `;
            break;
        default:
            answerPhrase = `Вы загадали число `;
    }
    answerField.innerText = answerPhrase + ' ' + answerNumber + '?';
}

// ----- Body

gameBegin();        

// "Заново"

document.querySelector('#btnRetry').addEventListener('click', function () {
    gameBegin();        
})

// "Больше"

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if ((minValue === maxValue) || (answerNumber >= maxValue)) {
            incorrectAnswer();
            // console.log(answerNumber);
        } else {
            minValue = answerNumber + 1;
            findMiddle();
        }
    }
})

// "Меньше"

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if ((minValue === maxValue) || (answerNumber <= minValue)) {
            incorrectAnswer();
        } else {
            maxValue = answerNumber - 1;
            findMiddle();
        }
        // logData ()
    }
})

// "Верно"

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        gameRun = false;
    }
})

// ---------- end of Body ---------


// вывод для отладки
function logData () {   
    console.log('minValue = ' + minValue);
    console.log('maxValue = ' + maxValue);
    // console.log('answerNumber = ' + answerNumber);
    // console.log('orderNumber = ' + orderNumber);
    console.log('gameRun = ' + gameRun);
}

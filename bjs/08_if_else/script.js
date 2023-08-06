const orderNumberField = document.querySelector('#orderNumberField');   // поле номера вопроса
const answerField = document.querySelector('#answerField');             // поле ответа

let minValue = -999;
let maxValue = 999;
let answerNumber  = '';
let orderNumber = 0;
let gameRun = true;

// ------------- Body ---------------

gameBegin();            // Начало игры

// Нажали "Заново"
document.querySelector('#btnRetry').addEventListener('click', function () {
    gameBegin();        // Начало игры
});

// Нажали "Больше"
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if ((minValue === maxValue) || (answerNumber >= maxValue)) {
            answerField.innerText = answer(false);      // Неверный ответ
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            findMiddle();           // ищем среднее и выводим вопрос
        }
    }
});

// Нажали "Меньше"
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if ((minValue === maxValue) || (answerNumber <= minValue)) {
            answerField.innerText = answer(false);      // Неверный ответ
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            findMiddle();          // ищем среднее и выводим вопрос
        }
    }
});

// Нажали "Верно"
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = answer();
        gameRun = false;
    }
});

// ----------- end of Body -------------

// начало игры
function gameBegin() {
    minValue = parseInt(prompt('Минимальное значение числа для игры', -999));
    if (minValue !== 0 || isNaN(minValue)) {        
        minValue = minValue || -999;
        minValue = minValue <= -1000 ? -999 : (minValue >= 1000 ? 999 : minValue);
    };
    
    maxValue = parseInt(prompt('Максимальное значение числа для игры', 999));
    if (maxValue !== 0 || isNaN(maxValue)) {
        maxValue = maxValue || 999;
        maxValue = maxValue <= -1000 ? -999 : (maxValue >= 1000 ? 999 : maxValue);
    };
 
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 0;
    gameRun = true;
    findMiddle();         // ищем среднее и выводим вопрос
}   

// поиск среднего значения и формирование вопроса
function findMiddle () {

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = ++orderNumber;
    
    // варианты вопроса 
    let phraseRandom = Math.round( Math.random() * 4);
    let answerPhrase;
    switch (phraseRandom) {
        case 1:
            answerPhrase = `Да это легко! Ты загадал \n`;
            break;
        case 2:
            answerPhrase = `Наверное это число \n`;
            break;
        case 3:
            answerPhrase = `Похоже это \n`;
            break;
        default:
            answerPhrase = `Вы загадали число \n`;
    }
    answerField.innerText = answerPhrase + textOrNumber(answerNumber) + '?';
}

// ответ - положительный или отрицательный результат
function answer (bool = true) {

    let phraseRandom = Math.round( Math.random() * 4);
    let answerPhrase;
    switch (phraseRandom) {
        case 1:
            answerPhrase = bool ? `Я всегда угадываю\n\u{1F60E}` : `Я сдаюсь..\n\u{1F92F}`;
            break;
        case 2:
            answerPhrase = bool ? `Ура!!\n\u{1F60E}` : `Вы загадали неправильное число!\n\u{1F914}`;
            break;
        case 3:
            answerPhrase = bool ? `Отлично!\n\u{1F60E}` : `Ответ невозможен! \n\u{1F975}`;
            break;
        default:
            answerPhrase = bool ? `Я всегда прав\n\u{1F60E}` : `Так нельзя...\n\u{1F62A}`;
    }
    return answerPhrase;
}

//  возврат значения числом или текстом < 20 символов
function textOrNumber(answerNumber) {

    let answerText = '';
    let inputNum = answerNumber;
    
    if (inputNum === 0) {               // Вернуть 0 как 0
        answerText = '0';
    } else {
        if (inputNum < 0) {             // Минус для отрицательного числа
            answerText = 'минус ';
            inputNum = -inputNum;       
        };
        answerText = answerText + numToText(inputNum);      // число в текcт
    };

    if (answerText.length >= 20) {      // длина текста >20 - вернуть входное число
        answerText = answerNumber;
    }; 

    return answerText;
}

// Число от 1 до 999 прописью 

function numToText(inputNum) {

    let text = '';
    let num100 = 0;     
    let num10 = 0;     
    let num1 = 0;   

    num100 = Math.floor(inputNum / 100);
    num10 = Math.floor((inputNum - num100 * 100) / 10);
    num1 = inputNum - num100 * 100 - num10 * 10;

    // сотни
    switch (num100) {
        case 0:
            break;
        case 1:
            text = text + 'сто ';
            break;
        case 2:
            text = text + 'двести ';
            break;
        case 3:
            text = text + 'триста ';
            break;
        case 4:
            text = text + 'четыреста ';
            break;
        case 5:
            text = text + 'пятьсот ';
            break;
        case 6:
            text = text + 'шестьсот ';
            break;
        case 7:
            text = text + 'семьсот ';
            break;
        case 8:
            text = text + 'восемьсот ';
            break;
        case 9:
            text = text + 'девятьсот ';
            break;
        default:
    };

    // десятки
    switch (num10) {
        case 0:
            break;
        case 2:
            text = text + 'двадцать ';
            break;
        case 3:
            text = text + 'тридцать ';
            break;
        case 4:
            text = text + 'сорок ';
            break;
        case 5:
            text = text + 'пятьдесят ';
            break;
        case 6:
            text = text + 'шестьдесят ';
            break;
        case 7:
            text = text + 'семьдесят ';
            break;
        case 8:
            text = text + 'восемьдесят ';
            break;
        case 9:
            text = text + 'девяносто ';
            break;
        case 1:
            switch (num1) {
                case 0:
                    text = text + 'десять ';
                    break;
                case 1:
                    text = text + 'одиннадцать ';
                    break;
                case 2:
                    text = text + 'двенадцать ';
                    break;
                case 3:
                    text = text + 'тринадцать ';
                    break;
                case 4:
                    text = text + 'четырнадцать ';
                    break;
                case 5:
                    text = text + 'пятнадцать ';
                    break;
                case 6:
                    text = text + 'шестнадцать ';
                    break;
                case 7:
                    text = text + 'семнадцать ';
                    break;
                case 8:
                    text = text + 'восемнадцать ';
                    break;
                case 9:
                    text = text + 'девятнадцать ';
                    break;
                default:
            }
            break;
        default:
    };

    // единицы
    if (num10 !== 1) {
        switch (num1) {
            case 1:
                text = text + 'один';
                break;
            case 2:
                text = text + 'два';
                break;
            case 3:
                text = text + 'три';
                break;
            case 4:
                text = text + 'четыре';
                break;
            case 5:
                text = text + 'пять';
                break;
            case 6:
                text = text + 'шесть';
                break;
            case 7:
                text = text + 'семь';
                break;
            case 8:
                text = text + 'восемь';
                break;
            case 9:
                text = text + 'девять';
                break;
            default:
        }
    };
    return text.trim();
}

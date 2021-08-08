'use strict';

let startBot = confirm('Хотите сыграть в игру?');

if(startBot === false){
    alert('ну и не надо');
} else {
    let hiddenNumber = Math.random() * 100;
    hiddenNumber = Math.floor(hiddenNumber);

    let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let answer = function() {
        
        let asas = prompt('Введите число от 1 до 100');
        return asas;
    };
    let block = function(){
        let question = confirm('Давай сиграем в игру');
        return question;
    };

    let guess = function (num) {
        let number = answer();
        
        if(number  === null){
            alert('Игра окончена');
        }else if(!isNumber(number)){
            alert('Введи число');
            guess(num);
        }else if(Number(number) < hiddenNumber){
            alert('Число которое загадано больше');
            guess(num);
        } else if(Number(number) > hiddenNumber){
            alert('Число которое загадано меньше');
            guess(num);
        } else if(Number(number) === hiddenNumber){
            alert('Вы угадали');
        }
        

    };
    guess(answer);
}



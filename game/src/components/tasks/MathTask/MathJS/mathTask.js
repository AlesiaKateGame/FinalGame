import * as vars from './commonVariables';
import * as soundapplause from '../../../../sounds/aplodismenty_shot.mp3';
import * as soundluse from '../../../../sounds/dissapoinment_shot.mp3';
import {getRandomInRange, getRandomInArray, inputEnter} from './commonFunctions';

let mathExpressionLevel;

export function mathTask (level, clear_modal) { 

    if (level === 1) {
        mathExpressionLevel = getRandomInRange(0, 9) + vars.mathOperationPlusMinus[getRandomInArray(vars.mathOperationPlusMinus)] + getRandomInRange(0, 9);
    } else if (level === 2) {
        mathExpressionLevel = getRandomInRange(0, 9) + vars.mathOperationMultDiv[getRandomInArray(vars.mathOperationMultDiv)] + getRandomInRange(1, 9);  
    } else if (level === 3) {
        mathExpressionLevel = getRandomInRange(10, 99) + vars.mathOperationPlusMinus[getRandomInArray(vars.mathOperationPlusMinus)] + getRandomInRange(0, 99);  
    } else if (level === 4) {
        mathExpressionLevel = getRandomInRange(10, 99) + vars.mathOperationMultDiv[getRandomInArray(vars.mathOperationMultDiv)] + getRandomInRange(1, 9);  
    } else if (level === 5) {
        mathExpressionLevel = getRandomInRange(100, 999) + vars.randomMathOperation[getRandomInArray(vars.randomMathOperation)] + getRandomInRange(1, 9);  
    }

    const gameLevel = document.querySelector('#task-Level__h1');
    gameLevel.textContent = 'Уровень ' + level;

    const titleForQuestion = document.querySelector('#task-Level__h3');
    titleForQuestion.textContent = 'Сколько будет ' + mathExpressionLevel +'?';

    const input = document.querySelector('#task-Level__input');
    let answer_button = document.querySelector('.task-Level__answer');
    answer_button.addEventListener('click', ()=>{resultOfQuestion(input.value, clear_modal)})
    inputEnter(input);


export function resultOfQuestion(answer, clear_modal) {
    let correctResult = Math.ceil(eval(mathExpressionLevel)*10/10); // правильный результат
    if (answer == correctResult) {
        document.querySelector('.modal-body').innerHTML="<h4>"+vars.randomCongratulationTitle+"</h4>";
        let aplodisment=new Audio('sounds/aplodismenty_shot.mp3');
        aplodisment.play();
        localStorage.setItem('answerState', true);
        clear_modal();
        //дейстие игрока

    } else {
        document.querySelector('.modal-body').innerHTML="<h4>"+vars.randomMistakeTitle+"</h4>";
        let soundluse=new Audio('sounds/dissapoinment_shot.mp3');
        soundluse.play();
        localStorage.setItem('answerState', false);
        clear_modal();
        //действие монстра
    }
}
}
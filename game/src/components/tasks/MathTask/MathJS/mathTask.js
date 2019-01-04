import * as vars from './commonVariables';
import * as soundapplause from '../../../../sounds/aplodismenty_shot.mp3';
import * as soundluse from '../../../../sounds/dissapoinment_shot.mp3';


let mathExpressionLevel;
const mathExpressionLevel1 = vars.randomSingleDigit1 + vars.randomMathOperationPlusMinus + vars.randomSingleDigit2;
const mathExpressionLevel2 = vars.randomSingleDigit1 + vars.randomMathOperationMultDiv + vars.randomSingleDigitExceptZero;
const mathExpressionLevel3 = vars.randomTwoDigitNumber + vars.randomMathOperationPlusMinus + vars.randomTwoDigitNumberSinceZero;
const mathExpressionLevel4 = vars.randomTwoDigitNumber + vars.randomMathOperationMultDiv + vars.randomSingleDigitExceptZero;
const mathExpressionLevel5 = vars.randomThreeDigitNumber + vars.randomMathOperation + vars.randomSingleDigitExceptZero; 

export function mathTask (level, clear_modal) {

    if (level === 1) {
     mathExpressionLevel = mathExpressionLevel1;
    } else if (level === 2) {
        mathExpressionLevel = mathExpressionLevel2;  
    }
    else if (level === 3) {
        mathExpressionLevel = mathExpressionLevel3;  
    }
    else if (level === 4) {
        mathExpressionLevel = mathExpressionLevel4;  
    }
    else if (level === 5) {
        mathExpressionLevel = mathExpressionLevel5;  
    }

    const gameLevel = document.querySelector('#task-Level__h1');
    gameLevel.textContent = 'Уровень ' + level;

    const titleForQuestion = document.querySelector('#task-Level__h3');
    titleForQuestion.textContent = 'Сколько будет ' + mathExpressionLevel +'?';

    const input = document.querySelector('#task-Level__input');
    let answer_button = document.querySelector('.task-Level__answer');
    answer_button.addEventListener('click', ()=>{resultOfQuestion(input.value, clear_modal)})

}


export function resultOfQuestion(answer, clear_modal) {
    let correctResult = eval(mathExpressionLevel); // правильный результат
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
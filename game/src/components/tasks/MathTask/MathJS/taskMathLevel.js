import * as vars from './commonVariables';


const mathExpressionLevel1 = vars.randomSingleDigit1 + vars.randomMathOperationPlusMinus + vars.randomSingleDigit2;
const mathExpressionLevel2 = vars.randomSingleDigit1 + vars.randomMathOperationMultDiv + vars.randomSingleDigitExceptZero;
const mathExpressionLevel3 = vars.randomTwoDigitNumber + vars.randomMathOperationPlusMinus + vars.randomTwoDigitNumberSinceZero;
const mathExpressionLevel4 = vars.randomTwoDigitNumber + vars.randomMathOperationMultDiv + vars.randomSingleDigitExceptZero;
const mathExpressionLevel5 = vars.randomThreeDigitNumber + vars.randomMathOperation + vars.randomSingleDigitExceptZero; 

export function taskMathLevel (level) {

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
    answer_button.addEventListener('click', ()=>{resultOfQuestion(input.value)})

}


export function resultOfQuestion(answer) {
    let correctResult = eval(mathExpressionLevel); // правильный результат
    if (answer == correctResult) {

        const congratulation = document.createElement('h1');
        congratulation.textContent = vars.randomCongratulationTitle;

        document.querySelector('#task-Level').appendChild(congratulation);
        new Audio('../sounds/aplodismenty_shot.mp3').play();

        //дейстие игрока

    } else {

        const mistakeTitle = document.createElement('h1');
        mistakeTitle.textContent = vars.randomMistakeTitle;

        document.querySelector('#task-Level').appendChild(mistakeTitle);
        new Audio('../sounds/dissapoinment_shot.mp3').play();


        //действие монстра
    }
}
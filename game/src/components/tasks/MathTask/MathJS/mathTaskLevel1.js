import * as vars from './commonVariables';


const mathExpressionLevel1 = vars.randomSingleDigit1 + vars.randomMathOperationPlusMinus + vars.randomSingleDigit2;
    

export function taskMathLevel1 (level) {
    const gameLevel = document.querySelector('#task-1Level__h1');
    gameLevel.textContent = 'Уровень ' + level;

    const titleForQuestion = document.querySelector('#task-1Level__h3');
    titleForQuestion.textContent = 'Сколько будет ' + mathExpressionLevel1 +'?';

    const input = document.querySelector('#task-1Level__input');
    let answer_button = document.querySelector('.task-1Level__answer');
    answer_button.addEventListener('click', ()=>{resultOfQuestion(input.value)})

}


export function resultOfQuestion(answer) {
    let correctResult = eval(mathExpressionLevel1); // правильный результат
    if (answer == correctResult) {

        const congratulation = document.createElement('h1');
        congratulation.textContent = vars.randomCongratulationTitle;

        document.querySelector('#task-1Level').appendChild(congratulation);

        //дейстие игрока

    } else {

        const mistakeTitle = document.createElement('h1');
        mistakeTitle.textContent = vars.randomMistakeTitle;

        document.querySelector('#task-1Level').appendChild(mistakeTitle);

        //действие монстра
    }
}
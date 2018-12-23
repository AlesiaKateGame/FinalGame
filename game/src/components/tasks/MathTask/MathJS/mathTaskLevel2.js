import { randomMathOperationMultDiv } from "./commonVariables";

const mathExpressionLevel2 = randomSingleDigit1 + randomMathOperationMultDiv + randomSingleDigitExceptZero;
    
const correctResultLevel2 = correctResult (randomSingleDigit1, randomSingleDigitExceptZero, randomMathOperationMultDiv);


function taskMathLevel2 () {
    const mainSection = document.createElement('section');
    mainSection.id = 'section';
    mainSection.className = 'task-2Level';

    const numberOfLevel = document.createElement('h1');
    numberOfLevel.className = 'task-2Level__h1';
    numberOfLevel.id = 'h1';
    numberOfLevel.textContent = 'Уровень 2';

    const titleH2 = document.createElement('h2');
    titleH2.className = 'task-2Level__h2';
    titleH2.id = 'h2';
    titleH2.textContent = 'Ответь на вопрос:';

    const titleForQuestion = document.createElement('h3');
    titleForQuestion.className = 'task-2Level__h3';
    titleForQuestion.id = 'h3';
    titleForQuestion.textContent = 'Сколько будет ' + mathExpressionLevel2 +'?';

    const input = document.createElement('input');
    input.className = 'task-2Level__input';
    input.id = 'input';
    input.type = 'number';
    input.placeholder = ' Введи число';
    input.autofocus = true;
    input.required = true;
    input.max = '999999';

   appendSection();
}
taskMathLevel2();

function resultOfQuestion (answer) {
    if (answer == correctResultLevel2) {

        clearSection();

        const congratulation = document.createElement('h1');
        congratulation.textContent = randomCongratulationTitle;

        section.appendChild(congratulation);

        //дейстие игрока

    } else if (answer !== correctResultLevel2) {

        clearSection();

        const mistakeTitle = document.createElement('h1');
        mistakeTitle.textContent = randomMistakeTitle;

        section.appendChild(mistakeTitle);

        //действие монстра
    }
}


input.addEventListener('keypress', function(event){
    if (event.code === "Enter") {
        resultOfQuestion(input.value);
    }
});
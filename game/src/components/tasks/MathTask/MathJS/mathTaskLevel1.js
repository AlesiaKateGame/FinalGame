import { section, input } from './commonVariables';
import {randomSingleDigit1, randomSingleDigit2, randomMathOperationPlusMinus} from './commonVariables';
import {correctResult, appendSection, clearSection} from './commonFunctions';


const mathExpressionLevel1 = randomSingleDigit1 + randomMathOperationPlusMinus + randomSingleDigit2;
    
const correctResultLevel1 = correctResult (randomSingleDigit1, randomSingleDigit2, randomMathOperationPlusMinus);


function taskMathLevel1 () {
    const mainSection = document.createElement('section');
    mainSection.id = 'section';
    mainSection.className = 'task-1Level';

    const numberOfLevel = document.createElement('h1');
    numberOfLevel.className = 'task-1Level__h1';
    numberOfLevel.id = 'h1';
    numberOfLevel.textContent = 'Уровень 1';

    const titleH2 = document.createElement('h2');
    titleH2.className = 'task-1Level__h2';
    titleH2.id = 'h2';
    titleH2.textContent = 'Ответь на вопрос:';

    const titleForQuestion = document.createElement('h3');
    titleForQuestion.className = 'task-1Level__h3';
    titleForQuestion.id = 'h3';
    titleForQuestion.textContent = 'Сколько будет ' + mathExpressionLevel1 +'?';

    const input = document.createElement('input');
    input.className = 'task-1Level__input';
    input.id = 'input';
    input.type = 'number';
    input.placeholder = ' Введи число';
    input.autofocus = true;
    input.required = true;
    input.max = '999999';

   appendSection();
}
taskMathLevel1();

function resultOfQuestion (answer) {
    if (answer == correctResultLevel1) {

        clearSection();

        const congratulation = document.createElement('h1');
        congratulation.textContent = randomCongratulationTitle;

        section.appendChild(congratulation);

        //дейстие игрока

    } else if (answer !== correctResultLevel1) {

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
const mathExpressionLevel4 = randomTwoDigitNumber + randomMathOperationMultDiv + randomSingleDigitExceptZero;
    
const correctResultLevel4 = correctResult (randomTwoDigitNumber, randomSingleDigitExceptZero, randomMathOperationMultDiv);


function taskMathLevel4 () {
    const mainSection = document.createElement('section');
    mainSection.id = 'section';
    mainSection.className = 'task-1Level';

    const numberOfLevel = document.createElement('h1');
    numberOfLevel.className = 'task-4Level__h1';
    numberOfLevel.id = 'h1';
    numberOfLevel.textContent = 'Уровень 4';

    const titleH2 = document.createElement('h2');
    titleH2.className = 'task-4Level__h2';
    titleH2.id = 'h2';
    titleH2.textContent = 'Ответь на вопрос:';

    const titleForQuestion = document.createElement('h3');
    titleForQuestion.className = 'task-4Level__h3';
    titleForQuestion.id = 'h3';
    titleForQuestion.textContent = 'Сколько будет ' + mathExpressionLevel4 +'?';

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
taskMathLevel4();

function resultOfQuestion (answer) {
    if (answer == correctResultLevel4) {

        clearSection();

        const congratulation = document.createElement('h1');
        congratulation.textContent = randomCongratulationTitle;

        section.appendChild(congratulation);

        //дейстие игрока

    } else if (answer !== correctResultLevel4) {

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
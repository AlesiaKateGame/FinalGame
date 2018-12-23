import {getRandomInRange, getRandomInArray} from './commonFunctions';

export const section = document.getElementById("section");
export const h1 = document.getElementById("h1");
export const h2 = document.getElementById("h2");
export const h3 = document.getElementById("h3");
export const input = document.getElementById("input");


const congratulationTitleArray = ['Поздравляю! Хороший ответ!', 'Ты молодец! Tак держать!', 'Ты - мозг! Давай еще!', 'Умница! Классный ответ!', 'Ты легко преодолеваешь препятствия!', 'Супер! Доказал что можешь!', 'Прекрасная работа!', 'Прямое попадание в десятку!', 'Великолепно! Именно то что нужно!', 'Грандиозно! Прямо в цель!'];
const mistakeTitleArray = ['Ошибочка! Давай еще!', 'Не сдавайся! Попробуй снова','У тебя все получится! Не сдавайся','Ошибка! Попробуйка еще раз!', 'Ты можешь лучше!', 'Тебе это по силам! Попробуй еще!', 'У тебя все получится!', 'Может еще разок?', 'Не торопись, подумай!', 'Бывают неудачи, но нужно двигаться вперед!'];

const mathOperation = ['+', '-', '*', '/'];
const mathOperationPlusMinus = ['+', '-'];
const mathOperationMultDiv = ['*', '/'];


export const randomSingleDigit1 = getRandomInRange(0, 9);
export const randomSingleDigit2 = getRandomInRange(0, 9);
export const randomSingleDigitExceptZero = getRandomInRange(1, 9);
export const randomTwoDigitNumberSinceZero = getRandomInRange(0, 99);
export const randomTwoDigitNumber = getRandomInRange(10, 99);
export const randomThreeDigitNumber = getRandomInRange(100, 999);

export const randomMathOperation = mathOperation[getRandomInArray(mathOperation)];
export const randomMathOperationPlusMinus = mathOperationPlusMinus[getRandomInArray(mathOperationPlusMinus)];
export const randomMathOperationMultDiv = mathOperationMultDiv[getRandomInArray(mathOperationMultDiv)];

export const randomCongratulationTitle = congratulationTitleArray[getRandomInArray(congratulationTitleArray)];
export const randomMistakeTitle = mistakeTitleArray[getRandomInArray(mistakeTitleArray)];
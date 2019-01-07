import jsonFile1 from './WordAudioEngToRus/wordAudioEngToRus1.json';
import jsonFile2 from './WordAudioEngToRus/wordAudioEngToRus2.json';

import allSaunds from './importAllSound.js';
import {getRandomInArray} from '../MathTask/MathJS/commonFunctions';
import * as vars from '../MathTask/MathJS/commonVariables';

let array;
let numberOfObject;
let  randomObject, randomWord, randomWordSound;

function jsonFunc (jsonFile) {
    array = jsonFile['words'];
    numberOfObject = getRandomInArray(array);
    randomObject = array[numberOfObject];
    randomWord = randomObject['word'];
    randomWordSound = randomObject['source'];
}

export function audioEngToEngTask (level, clear_modal) {
    
    if (level === 1) {
        jsonFunc(jsonFile1);
    } else if (level === 2) {
        jsonFunc(jsonFile2);
    } /*else if (level === 3) {
        jsonFunc(jsonFile3);
    } else if (level === 4) {
        jsonFunc(jsonFile4);
    } else if (level === 5) {
        jsonFunc(jsonFile5);
    }*/

    const gameLevel = document.querySelector('#task-Level__h1');
    gameLevel.textContent = 'Уровень ' + level;

    const titleForQuestion = document.querySelector('#task-Level__h3');
    titleForQuestion.textContent = 'Переведи слово на русский язык ';

    const audio = document.querySelector('#audio');
    audio.src = randomWordSound;

    const input = document.querySelector('#task-Level__input');
    let answer_button = document.querySelector('.task-Level__answer');
    answer_button.addEventListener('click', ()=>{resultOfQuestion(input.value, clear_modal)});

}
export function resultOfQuestion(answer, clear_modal) {
    function isCorrect(option) {
        return option.toLowerCase() == answer.toLowerCase();
      }
     // правильный результат

    if (randomWord.some(isCorrect)) {
        document.querySelector('.modal-body').innerHTML="<h1>"+vars.randomCongratulationTitle+"</h1>";
        let aplodisment=new Audio('sounds/aplodismenty_shot.mp3');
        aplodisment.play();
        localStorage.setItem('answerState', true);
        clear_modal();
        //дейстие игрока

    } else {
        document.querySelector('.modal-body').innerHTML="<h1>"+vars.randomMistakeTitle+"</h1>";
        let soundluse=new Audio('sounds/dissapoinment_shot.mp3');
        soundluse.play();
        localStorage.setItem('answerState', false);
        clear_modal();
        //действие монстра
    }
}
import jsonFile1 from './WordPictureTaskRus/wordPictureTaskRus1.json';
import jsonFile2 from './WordPictureTaskRus/wordPictureTaskRus2.json';
import jsonFile3 from './WordPictureTaskRus/wordPictureTaskRus3.json';
import jsonFile4 from './WordPictureTaskRus/wordPictureTaskRus4.json';
import jsonFile5 from './WordPictureTaskRus/wordPictureTaskRus5.json';

import allPictures from './importAllPictures.js';
import {getRandomInArray} from '../MathTask/MathJS/commonFunctions';
import * as vars from '../MathTask/MathJS/commonVariables';

let array;
let numberOfObject;
let  randomObject, randomWord, randomWordPicture;

function jsonFunc (jsonFile) {
    array = jsonFile['words'];
    numberOfObject = getRandomInArray(array);
    randomObject = array[numberOfObject];
    randomWord = randomObject['word'];
    randomWordPicture = randomObject['source'];
}

export function pictureTaskRus (level, clear_modal) {
    
    if (level === 1) {
        jsonFunc(jsonFile1);
    } else if (level === 2) {
        jsonFunc(jsonFile2);
    } else if (level === 3) {
        jsonFunc(jsonFile3);
    } else if (level === 4) {
        jsonFunc(jsonFile4);
    } else if (level === 5) {
        jsonFunc(jsonFile5);
    }

    const gameLevel = document.querySelector('#task-Level__h1');
    gameLevel.textContent = 'Уровень ' + level;

    const picture = document.querySelector('#picture');
    picture.src = randomWordPicture;

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
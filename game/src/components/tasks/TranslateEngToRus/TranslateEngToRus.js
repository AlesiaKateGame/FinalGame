import jsonFile1 from './WordTranslateEngToRus/wordTranslateEngToRus1.json';
import jsonFile2 from './WordTranslateEngToRus/wordTranslateEngToRus2.json';
import jsonFile3 from './WordTranslateEngToRus/wordTranslateEngToRus3.json';
import jsonFile4 from './WordTranslateEngToRus/wordTranslateEngToRus4.json';
import jsonFile5 from './WordTranslateEngToRus/wordTranslateEngToRus5.json';
        

import {getRandomInArray} from '../MathTask/MathJS/commonFunctions';

import * as vars from '../MathTask/MathJS/commonVariables';


let array;
let numberOfObject;
let randomObject, randomWord, randomWordTranslation;


function jsonFunc (jsonFile) {
    array = jsonFile['words'];
    numberOfObject = getRandomInArray(array);
    randomObject = array[numberOfObject];
    randomWord = randomObject['word'];
    randomWordTranslation = randomObject['translation'];
}


     export function translateEngToRusTask (level, clear_modal) {
    
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
        
       
        const titleForQuestion = document.querySelector('#task-Level__h3');
        titleForQuestion.innerHTML = 'Переведи слово на русский язык: <span class="translate_word"> ' +  randomWord + '</span>';
       

        const input = document.querySelector('#task-Level__input');
        let answer_button = document.querySelector('.task-Level__answer');
        answer_button.addEventListener('click', ()=>{resultOfQuestion(input.value, clear_modal)})
    
    }
    export function resultOfQuestion(answer, clear_modal) {
        function isCorrect(option) {
            return option == answer;
          }
         // правильный результат
        if (randomWordTranslation.some(isCorrect)) {
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
  
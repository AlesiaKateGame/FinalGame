import json from './wordsTranslateRusToEng1.json';
        const data = JSON.parse(json);

import getRandomInArray from '../MathTask/MathJS/commonFunctions';

import * as vars from '../MathTask/MathJS/commonVariables';


  const array = data['words'];
     let numberOfObject = getRandomInArray(array);
     const randomObject = array[numberOfObject];
     const randomWord = randomObject['word'];
     let randomWordTranslation = randomObject['translation'];


     export function translateRusToEngTask (level, clear_modal) {
/*
        if (level === 1) {
         import jsonFile from './wordsTranslateRusToEng1.json';
        const data = JSON.parse(jsonFile);
        } else if (level === 2) {
            import jsonFile from './wordsTranslateRusToEng2.json';
        const data = JSON.parse(jsonFile);  
        }
        else if (level === 3) {
           import jsonFile from './wordsTranslateRusToEng3.json';
        const data = JSON.parse(jsonFile);
        }
        else if (level === 4) {
        import jsonFile from './wordsTranslateRusToEng4.json';
        const data = JSON.parse(jsonFile);
        }
        else if (level === 5) {
           import jsonFile from './wordsTranslateRusToEng5.json';
        const data = JSON.parse(jsonFile);  
        }
  */  
        const gameLevel = document.querySelector('#task-Level__h1');
        gameLevel.textContent = 'Уровень ' + level;
    
        const titleForQuestion = document.querySelector('#task-Level__h3');
        titleForQuestion.textContent = 'Переведи слово на английский язык: ' +  randomWord;
    
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
  
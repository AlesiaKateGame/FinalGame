import {section, h1, h2, h3, input} from './commonVariables';
 
 export function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  export function getRandomInArray (arr) {
    return Math.floor(Math.random() * arr.length);
  }

  export function sum (a,b) {
    return a + b;
  }
  export function dif (a,b) {
    return a - b;
  }
  export function mult (a,b) {
    return a * b;
  }
  export function div (a,b) {
    return a / b;
  }

  export function correctResult (digit1, digit2, operation) {
    if (operation === '+') {
        return sum (digit1, digit2);
    } else if (operation === '-') {
        return dif (digit1, digit2);
    } else if (operation === '*') {
        return mult (digit1, digit2);
    } else if (operation === '/') {
        return div (digit1, digit2);
    }   
  }

  export function appendSection () {
    document.body.appendChild(mainSection);
    mainSection.appendChild(numberOfLevel);
    mainSection.appendChild(titleH2);
    mainSection.appendChild(titleForQuestion);
    mainSection.appendChild(input);
    }

  export function  clearSection () {
  section.removeChild(h1);
  section.removeChild(h2);
  section.removeChild(h3);
  section.removeChild(input);
  }
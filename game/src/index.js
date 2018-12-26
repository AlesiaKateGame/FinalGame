import style from "./_scss/main.scss";
import loginHtml from './components/login/loginHtml.html';

import mathTaskHtml from './components/tasks/MathTask/math.html';
import * as mathTaskJs from './components/tasks/MathTask/MathJS/mathTaskLevel1.js';

class Game {
    constructor () {
        this.player = null;
        this.monster = null;
        this.level = 1;
    }

    addModalWindow () {
        let modalwindow = document.createElement('div');
        modalwindow.className = "modal-body";
        document.body.appendChild(modalwindow);
    }

    show_login () {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = loginHtml;
        
        modalwindow.addEventListener('click', chooseGender);
        function chooseGender(e){
            if(e.target.classList.contains('hero__container-boy') ){
                localStorage.setItem('currentGender', 'boy');
            } else if(e.target.classList.contains('hero__container-girl') ){
                localStorage.setItem('currentGender', 'girl');
            }
        }

        let button_play = document.querySelector('.button__play');
        button_play.addEventListener('click', () => {this.start_game()})
       
    }

    showMathTask(){
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = mathTaskHtml;

        mathTaskJs.taskMathLevel1(this.level);
    }

    start_game() {
        let modalwindow = document.querySelector('.modal-body');
        if(modalwindow.querySelector('#input__container-input').value != ''){
            localStorage.setItem('currentPlayer', modalwindow.querySelector('#input__container-input').value)
        } else {
            modalwindow.querySelector('.warning').style.display = "block";
        }

        modalwindow.replaceWith();
        //this.add_player();
        this.showMathTask();
    }

    show_modal_dialog () {
        // появление экрана со всеми задачами
    }

    add_monster() {
        // this.monster = {
        //     "name":  this.get_monster_name(),
        //     "health": 100,
        //     "hash": generateMonster_hash()
        // }

        // function render_monster (str) {
        //     let head= [массив изображений];
        //     let weapon =[png...];
        //     let body=[png...];
        // }
    };

    get_monster_name(){
        // generate random name here
        return name;
    }

    generateMonster_hash() {
        // возвращает например строку с рандомными цифрами для 
    }

    add_player(name) {
        this.player = {
            "name": localStorage.getItem('currentPlayer'),
            "health": 100,
            "gender": localStorage.getItem('currentGender') || 'boy',
            
        }
    }

    monster_hit () {
        // - анимация (какая-то реакция монстра если игрок не правильно ответил);
        // - change_player_health();
    }

    player_hit () {
        // - анимация (какая-то реакция героя если игрок правильно ответил);
        // - change_monster_health();
    }

    change_player_health() {
        // уменьшить или увеличить здоровье героя;
        // проверять если здоровье == 0 то this.game_over() иначе новое окно с задачами
    }

    change_monster_health() {
        // уменьшить  здоровье монстра;
        // проверять если здоровье == 0 то add_level() add_monster() - новый монстр;
    }

    add_level () {
        // player.level++
    }

    game_over () {
        // записываются данные игрока localStorage построить таблицу: name level
        // появляется экран game over и кнопка see score
    }

    add_score () {
        // из localStorage построить таблицу: name level
    }
}
let game = new Game();
game.show_login();
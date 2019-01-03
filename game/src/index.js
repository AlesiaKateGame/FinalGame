import style from "./_scss/main.scss";
import loginHtml from './components/login/loginHtml.html';
import mathTaskHtml from './components/tasks/MathTask/math.html';
import playerHtml from './components/player/playerHtml.html';
import monsterHtml from './components/monster/monsterHtml.html';
import * as task_bar from './components/task_bar/task_barHTML.html';

import * as choose_player from './components/player/choose_player.js';
import * as monsterJS from './components/monster/monsterJS.js';
import * as mathTaskJs from './components/tasks/MathTask/MathJS/mathTask.js';
import * as battleJS from './components/battle/battleJS.js';


class Game {
    constructor () {
        this.player = null;
        this.monster = null;
        this.level = 1;
        this.bindedClearModal = this.clearModal.bind(this)
    }

    addModalWindow () {
        if ( !document.querySelector('.modal-body')) {
            let modalwindow = document.createElement('div');
            modalwindow.className = "modal-body";
            document.body.appendChild(modalwindow);
        }
    }

    show_login () {
        
        this.addModalWindow();
        
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = loginHtml;
        let hero__container=document.querySelector('.hero__container');
        hero__container.addEventListener('click', activePlayer);

        function activePlayer(e) {
            let activeArr=Array.from(hero__container.getElementsByClassName("active"));
            activeArr.forEach((v)=>v.classList.remove("active"));
            e.target.parentNode.classList.add("active");
            if(e.target.parentNode.classList.contains('boy')){
                localStorage.setItem('currentGender', 'boy');
            } else if (e.target.parentNode.classList.contains('girl')){
                localStorage.setItem('currentGender', 'girl');
            }
        }

        let button_play = document.querySelector('.button__play');
        button_play.addEventListener('click', () => {this.start_game()})
       
    }

    start_game() {
        let modalwindow = document.querySelector('.modal-body');
        let fight_button = document.querySelector('.fight_button');
        if(modalwindow.querySelector('#input__container-input').value != ''){
            localStorage.setItem('currentPlayer', modalwindow.querySelector('#input__container-input').value)
        } else {
            modalwindow.querySelector('.warning').style.display = "block";
        }

        fight_button.addEventListener('click', () => { 
            document.querySelector(".weapon_container").style.display="none";
            this.show_task_bar()});
        modalwindow.replaceWith();
        document.querySelector(".weapon_container").style.display="flex";

        let weapon=document.querySelector(".weapon_container");
        weapon.addEventListener("click", (e) => {this.choose_weapon(e)});

        this.add_player();
        this.add_monster();
       
        // 
    }


    choose_weapon(e) {
       
            if (e.target.classList.contains("weapon_container-fire")) {
                localStorage.setItem('currentWeapon', 'fire');
            }else if (e.target.classList.contains("weapon_container-poison"))
                {localStorage.setItem('currentWeapon', 'poison');
            }else if (e.target.classList.contains("weapon_container-light")) {
                localStorage.setItem('currentWeapon', 'light');
            }
            battleJS.poison_hit();
    }


    show_task_bar () {
        
        this.addModalWindow();
        
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = task_bar;
        

        let task__bar_elem=document.querySelector(".task__bar");
        task__bar_elem.addEventListener('click', (e) => {
            if (e.target.classList.contains("math_task")) {
                this.showMathTask();
            }
        });
       
    }

    add_monster() {
        this.monster = {
            "health": 100,
        }

       
        let scene_monster=document.querySelector('.scene_container-monster');
        scene_monster.innerHTML=monsterHtml;
        monsterJS.startMonster();
    };

    
    add_player() {
        this.player = {
            "name": localStorage.getItem('currentPlayer')|| "PLAYER",
            "health": 100,
            "gender": localStorage.getItem('currentGender') || 'boy',
            "weapon": "fire",
        }

        let scene_player=document.querySelector('.scene_container-player');
        scene_player.innerHTML=playerHtml;
        choose_player.choose_player(this.player.name);
    }

    clearModal () {
        let modalwindow = document.querySelector('.modal-body');
        setTimeout(() => { modalwindow.replaceWith()}, 1500);
        console.log(localStorage.getItem('answerState'))
        if (localStorage.getItem('answerState')=="true") {
            this.player_hit();
        }else{
            this.monster_hit(); 
        }
    }

    monster_hit() {
        document.querySelector(".weapon_container").style.display="flex";
        this.change_player_health();
    }

    player_hit() {
        document.querySelector(".weapon_container").style.display="flex";
        this.change_monster_health();
    }

    change_player_health() {
        this.player.health-=20;
        document.querySelector(".player_health").innerHTML=this.player.health;
        if(this.player.health<=0) {
            this.game_over ();
        }
     
    }

    change_monster_health() {
        console.log(this.monster, this.monster.health)
        this.monster.health-=20;
        document.querySelector(".monster_health").innerHTML=this.monster.health;
        if(this.monster_health<=0) {
            this.add_level ();
        }
    }

    add_level () {
        this.level++;
        //анимация поздравляем с новым левелом!!!!!!
    }

    game_over () {

        alert("GAME OVER")
        // записываются данные игрока localStorage построить таблицу: name level
        // появляется экран game over и кнопка see score
    }

    add_score () {
        // из localStorage построить таблицу: name level
    }

    showMathTask(){
       
        this.addModalWindow();
        
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = mathTaskHtml;

        mathTaskJs.mathTask(this.level, this.bindedClearModal);
    }


}
let game = new Game();
game.show_login();
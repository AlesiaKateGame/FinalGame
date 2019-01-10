import style from "./_scss/main.scss";

import loginHtml from './components/login/loginHtml.html';
import landing from "./landing.html";
import mathTaskHtml from './components/tasks/MathTask/math.html';
import playerHtml from './components/player/playerHtml.html';
import monsterHtml from './components/monster/monsterHtml.html';
import * as task_bar from './components/task_bar/task_barHTML.html';
import * as gameOverHtml from './components/game_over/gameOver.html';
import * as preloader from './components/preloader/preloaderHtml.html';
import * as new_level from './components/new_level/new_levelHtml.html';
import * as translateEngToRus from './components/tasks/TranslateEngToRus/TranslateEngToRus.html';
import * as translateRusToEngHtml from './components/tasks/TranslateRusToEng/translateRusToEng.html';
import * as homeHtml from './screens/home/homeHtml.html';
import * as pictureTaskEng from './components/tasks/PictureTaskEng/pictureTaskEng.html';
import * as pictureTaskRu from './components/tasks/PictureTaskRus/pictureTaskRus.html';
import * as audioEngToRusHtml from './components/tasks/AudioEngToRus/audioEngToRus.html';
import * as audioRuToEngsHtml from './components/tasks/AudioRusToEng/audioRusToEng.html';
import * as audioEngHtml from './components/tasks/AudioEngToEng/audioEngToEng.html';
import * as audioRuHtml from './components/tasks/AudioRusToRus/audioRusToRus.html';
import * as scoreHtml from './components/score/scoreHtml.html';

import * as pictureTaskEngJs from './components/tasks/PictureTaskEng/pictureTaskEng.js';
import * as pictureTaskRuJs from './components/tasks/PictureTaskRus/pictureTaskRus.js';
import * as choose_player from './components/player/choose_player.js';
import * as monsterJS from './components/monster/monsterJS.js';
import * as mathTaskJs from './components/tasks/MathTask/MathJS/mathTask.js';
import * as tranclateEngRu from './components/tasks/TranslateEngToRus/TranslateEngToRus.js';
import * as translateRusToEngJs from './components/tasks/TranslateRusToEng/translateRusToEng.js';
import * as audioEngToRus from './components/tasks/AudioEngToRus/audioEngToRus.js';
import * as audioRuToEngJs from './components/tasks/AudioRusToEng/audioRusToEng.js';
import * as audioEngJs from './components/tasks/AudioEngToEng/audioEngToEng.js';
import * as audioRuJs from './components/tasks/AudioRusToRus/audioRusToRus.js';
import * as battleJS from './components/battle/battleJS.js';
import * as lendingjs from './screens/landing/landing.js';
import * as levelUp from './sounds/new_level.mp3';
import * as scoreJs from './components/score/score.js';

class Game {
    constructor () {
        this.player = null;
        this.score = 0;
        this.monster = {};
        this.level = 1;
        this.bindedClearModal = this.clearModal.bind(this);
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
        let show_score = document.querySelector('.show_score');

        button_play.addEventListener('click', () => {this.start_game()})
        show_score.addEventListener('click', () => {this.add_score()})
    }

    start_game() {
        let modalwindow = document.querySelector('.modal-body');
        let fight_button = document.querySelector('.fight_button');
        document.querySelector('.level').style.display="block";
        
        let player_name =modalwindow.querySelector('#input__container-input').value
        if (player_name.length > 7) {
            player_name=player_name.slice(0, 7);
            player_name += '...';
        }

        if(modalwindow.querySelector('#input__container-input').value != ''){
            localStorage.setItem('currentPlayer', player_name)
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
    }

    choose_weapon(e) {
            let weapon_container=document.querySelector(".weapon_container");
        if (e.target.classList.contains("weapon_container-fire")) {
            this.player.weapon="fire";
            let weaponArr=Array.from(weapon_container.getElementsByClassName("press"));
            weaponArr.forEach((v)=>v.classList.remove("press"));
            e.target.classList.add("press");
        }else if (e.target.classList.contains("weapon_container-poison"))
            {this.player.weapon="poison";
            let weaponArr=Array.from(weapon_container.getElementsByClassName("press"));
            weaponArr.forEach((v)=>v.classList.remove("press"));
            e.target.classList.add("press");
        }else if (e.target.classList.contains("weapon_container-light")) {
            this.player.weapon="light";
            let weaponArr=Array.from(weapon_container.getElementsByClassName("press"));
            weaponArr.forEach((v)=>v.classList.remove("press"));
            e.target.classList.add("press");
        }
    }


    show_task_bar () {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = task_bar;

        let task__bar_elem=document.querySelector(".task__bar");
        task__bar_elem.addEventListener('click', (e) => {
            if (e.target.classList.contains("math_task")) {
                this.showMathTask();
            }else if (e.target.classList.contains("eng_ru_translate"))
            { this.showEngRuTranslate()
            }else if (e.target.classList.contains("ru_eng_translate"))
            { this.showRuEngTranslate ()
            }else if (e.target.classList.contains("listening_eng_ru"))
            { this.showEngRuAudio()
            }else if (e.target.classList.contains("listening_ru_eng"))
            { this.showRuEngAudio()
            }else if (e.target.classList.contains("listening_eng"))
            { this.showEngAudio()
            }else if (e.target.classList.contains("listening_ru"))
            { this.showRuAudio()
            }else if (e.target.classList.contains("write_word"))
            { this.showWritePictureEng()
            }else if (e.target.classList.contains("write_word_ru"))
            { this.showWritePictureRu()
            }
        });
       
    }

    add_monster() {
        this.monster.health = 100;
        this.change_monster_health(0);
        let scene_monster=document.querySelector('.scene_container-monster');
        scene_monster.classList.remove("dead");
        scene_monster.classList.add("start");
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
        setTimeout(() => { 
            modalwindow.replaceWith();
            if (localStorage.getItem('answerState')=="true") {
                this.player_hit();
            }else{
                this.monster_hit(); 
            }
        }, 2000);
        console.log(localStorage.getItem('answerState'))
    }

    monster_hit() {
        document.querySelector(".weapon_container").style.display="flex";
        this.change_player_health();
        let monster=document.querySelector(".scene_container-monster");
        monster.classList.remove("start");
        monster.classList.add("attack");
        setTimeout (function () {monster.classList.remove("attack")}, 2100 )
    }

    player_hit() {
        document.querySelector(".weapon_container").style.display="flex";
        this.change_monster_health(20);
        if (this.player.weapon=="fire") {
            battleJS.fire_hit();
        }else if (this.player.weapon=="poison") {
            battleJS.poison_hit();
        }else if (this.player.weapon=="light") {
            battleJS.lightning_hit();
        }
        this.add_points();
    }

    add_points() {
        this.score += 20;
        document.querySelector(".coin_score").innerHTML = this.score;
        let coin=document.querySelector(".coin_container");
        coin.classList.add("animated");
        setTimeout(()=>{coin.classList.remove("animated")}, 2000)
    }

    change_player_health() {
        this.player.health-=20;
        document.querySelector(".player_health").innerHTML=this.player.health;
        document.querySelector(".player_health").style.width=this.player.health*3+"px";
        if(this.player.health<=0) {
            this.game_over ();
        }
     
    }

    change_monster_health(num) {
        console.log(this.monster, this.monster.health);
        this.monster.health -= +num;
        document.querySelector(".monster_health").innerHTML = this.monster.health;
        document.querySelector(".monster_health").style.width = this.monster.health * 3 + "px";
        
        if(this.monster.health<=0) {
            setTimeout(()=>{
                document.querySelector('.scene_container-monster').classList.add("dead");
            },1000)
            setTimeout (() => {
                let scene_monster=document.querySelector('.scene_container-monster');
                scene_monster.classList.remove("start");
                this.add_level();
            },2700);
        }
    }

    add_level () {
        this.level++;
        document.querySelector(".level-number").innerHTML=this.level;
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        document.querySelector(".weapon_container").style.display="none";
        document.querySelector(".fight_button").style.display="none";
        modalwindow.innerHTML = new_level;
        let levelUp=new Audio('sounds/new_level.mp3');
        levelUp.play();
        setTimeout(() => { 
            modalwindow.replaceWith();
            this.add_monster();
            document.querySelector(".weapon_container").style.display="flex";
            document.querySelector(".monster_health").style.width="flex";
        }, 2500);
    }

    game_over () {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        document.querySelector(".weapon_container").style.display="none";
        document.querySelector(".fight_button").style.display="none";
        modalwindow.innerHTML = gameOverHtml;
        let play_again=document.querySelector(".play_again");
        let score_button=document.querySelector(".score_button");
        play_again.addEventListener("click", () => {window.location.reload()});
        score_button.addEventListener("click", () => {this.add_score()});
    }

    add_score () {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = scoreHtml;
        scoreJs.show_score(this.bindedClearModal);
        document.querySelector(".scene_container").style.display="none";
        document.querySelector(".player_inform").style.display="none";
        document.querySelector(".monster_inform").style.display="none";
        document.querySelector(".level").style.display="none";
        let reload_score=document.querySelector(".reload_score")
        reload_score.addEventListener("click", () => {window.location.reload() ()});
    }

    showMathTask(){
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = mathTaskHtml;
        mathTaskJs.mathTask(this.level, this.bindedClearModal);
    }

    showEngRuTranslate() {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = translateEngToRus;
        tranclateEngRu.translateEngToRusTask(this.level, this.bindedClearModal);
    }
    

    showRuEngTranslate () {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = translateRusToEngHtml;
        translateRusToEngJs.translateRusToEngTask(this.level, this.bindedClearModal);
    }


    showEngRuAudio() {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = audioEngToRusHtml;
        audioEngToRus.audioEngToRus(this.level, this.bindedClearModal);
    }

    showRuEngAudio() {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = audioRuToEngsHtml;
        audioRuToEngJs.audioRusToEng(this.level, this.bindedClearModal);
    }

    showEngAudio() {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = audioEngHtml;
        audioEngJs.audioEngToEng(this.level, this.bindedClearModal);
    }

    showRuAudio() {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = audioRuHtml;
        audioRuJs.audioRusToRusTask(this.level, this.bindedClearModal);
    }

    showWritePictureEng() {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = pictureTaskEng;
        pictureTaskEngJs.pictureTaskEng(this.level, this.bindedClearModal);
    }

    showWritePictureRu() {
        this.addModalWindow();
        let modalwindow = document.querySelector('.modal-body');
        modalwindow.innerHTML = pictureTaskRu;
        pictureTaskRuJs.pictureTaskRus(this.level, this.bindedClearModal);
    }


}
let game = new Game();

window.addEventListener("load", ()=>{
    document.querySelector(".lds-roller").replaceWith();

    document.body.innerHTML += homeHtml
    document.body.classList.add('loaded');
    game.show_login();
})

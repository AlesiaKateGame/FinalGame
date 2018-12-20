import style from "./_scss/main.scss";
import login from './components/login/login.html';


    class Game {
    constructor () {
        this.playr=null;
        this.monster=null;
        
    }

    game_login () {

        document.body.addEventListener('click', showLogin)
        function showLogin(){
            let modal = document.createElement('div');
            modal.className = 'modal-window';
            modal.innerHTML = login;
            document.body.appendChild(modal);
        }
        // - срабатывает после загрузки страницы;
        // - убирает со страницы прелоадер;
        // - в html добавляется html login (введите имя, выберите игрока(мальчик, девочка);
        // - по кнопке Start запускается метод start_game;
    }
    start_game() {
        // - убирает со страницы game_login;
        // - вызываются 2 метода, которые отобаржают монстра на странице - add_monster(); add_player();
        // - добавляются  кнопкy HIT  HILL (запоминаем в player.state);???????
        // - по нажанитю на кнопи появляется add_modal_dialog, со всеми задачами;
        // - игрок выбирает задачу и решает ее
    }

    show_modal_dialog () {
        // появление экрана со всеми задачами
    }

    add_monster() {
        // this.monster = {
        //     "name":  this.get_monster_name(),
        //     "helt": 100,
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
        // this.player = {
        //     "name": name,
        //     "helth": 100,
        //     "state": hit,
        //     "level": 1
        // }
    }

    monster_hit () {
        // - анимация (какая-то реакция монстра если игрок не правильно ответил);
        // - chang_player_helt();
    }

    player_hit () {
        // - анимация (какая-то реакция героя если игрок правильно ответил);
        // - chang_monster_heltg();
    }

    chang_player_helt() {
        // уменьшить или увеличить здоровье героя;
        // проверять если здоровье == 0 то this.game_over() иначе новое окно с задачами
    }

    chang_monster_heltg() {
        // уменьшить  здоровье монстра;
        // проверять если здоровье ==0 то add_level() add_monster() - новый монстр;
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
let game = new Game(login);
game.game_login();
export function lightning_hit() {
    let light_ball=document.querySelector(".light_ball");
    let light_explosion=document.querySelector(".light_explosion");
    // let light_sound = new Audio ("../src/sounds/light_ball.mp3");
    // light_sound.play();
    
    light_ball.classList.add("animated");
    light_explosion.classList.add("animated");
    
    setTimeout (function () {light_ball.classList.remove("animated")}, 400 );
    setTimeout (function () {light_explosion.classList.remove("animated")}, 900 );

   
}


export function fire_hit () {
    let fire_ball = document.querySelector(".fire_ball");
    let fire_explosion=document.querySelector(".fire_explosion");
    // let fire_sound = new Audio ("../src/sounds/fire_ball.mp3");
    
    fire_ball.classList.toggle("animated")
    fire_explosion.classList.toggle("animated")

    // fire_sound.play();
    // document.body.onclick=null;

    setTimeout (function () {fire_ball.classList.toggle("animated")}, 1000 );
    setTimeout (function () {fire_explosion.classList.toggle("animated")}, 2000 );
}
    
export function poison_hit () {

    // let poison_sound = new Audio ("../src/sounds/poison_ball.mp3");
    let poison_ball = document.querySelector(".poison_ball");

//    poison_sound.play();
//     document.body.onclick=null;

    poison_ball.classList.toggle("animated");
    setTimeout (function () {poison_ball.classList.toggle("animated")}, 2500 );
}
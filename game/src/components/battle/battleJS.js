export function lightning_hit() {
    let light_ball=document.querySelector(".light_ball");
    let light_explosion=document.querySelector(".light_explosion");
    // let light_sound = new Audio ("../src/sounds/light_ball.mp3");
    // light_sound.play();
    
    light_ball.classList.toggle("animated");
    light_explosion.classList.toggle("animated");
    
    setTimeout (function () {light_ball.classList.toggle("animated")}, 500 )
    setTimeout (function () {light_explosion.classList.toggle("animated")}, 1200 )

   
}


export function fire_hit () {
    let fire_ball = document.querySelector(".fire_ball");
    let fire_explosion=document.querySelector(".fire_explosion");
    // let fire_sound = new Audio ("../src/sounds/fire_ball.mp3");
    
    fire_ball.classList.toggle("animated")
    fire_explosion.classList.toggle("animated")

    // fire_sound.play();
    // document.body.onclick=null;

    setTimeout (function () {fire_ball.classList.toggle("animated")}, 1500 );
    setTimeout (function () {fire_explosion.classList.toggle("animated")}, 3000 )
}
    
export function poison_hit () {

    // let poison_sound = new Audio ("../src/sounds/poison_ball.mp3");
    let poison_ball = document.querySelector(".poison_ball");

//    poison_sound.play();
//     document.body.onclick=null;

    poison_ball.classList.toggle("animated");
    monster_helth.innerHTML = monster_helth.innerHTML-20;
    monster_helth.style.width = monster_helth.innerHTML*3 + "px";
    setTimeout (function () {poison_ball.classList.toggle("animated")}, 3500 )
}
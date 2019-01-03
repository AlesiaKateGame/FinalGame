export function choose_player(name) {
    
    let player=document.querySelector(".boy");
    let player_name=document.querySelector(".player_name");
   
    player.className=localStorage.getItem('currentGender');
    
    player_name.innerHTML=name;
    let player_inform=document.querySelector(".player_inform");
    player_inform.style.display="block";
}


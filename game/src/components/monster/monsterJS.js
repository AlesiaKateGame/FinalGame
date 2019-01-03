export function startMonster() {
    let monster_head=document.querySelector(".monster_head");
    let monster_body=document.querySelector(".monster_body");
    let monster_hand_right=document.querySelector(".monster_hand_right");
    let monster_hand_left=document.querySelector(".monster_hand_left");
    let monster=document.querySelector(".monster");
    let fight_button=document.querySelector(".fight_button");
    let monster_inform=document.querySelector(".monster_inform");
    let monster_name=document.querySelector(".monster_name");
    let part_1 = ["Злобный", "Сопливый", "Ужасный", "Трусливый", "Глупый", "Толстый"];
    let part_2 = ["Орк", "Гоблин", "Кащей", "Упырь", "Кикимор", "Водяной"];
    let part_3 = ["Макс", "Том", "Джек", "Валера", "Крюгер", "Жора"];

    monster_inform.style.display="block";
    fight_button.style.display="block";
    monster_head.classList.add("monster_head_" + Math.round(Math.random()*4));
    monster_body.classList.add("monster_body_" + Math.round(Math.random()*2));
    monster_hand_right.classList.add("monster_hand_right_" + Math.round(Math.random()*2));
    monster_hand_left.classList.add("monster_hand_left_" + Math.round(Math.random()*2));

    let monster_full_name = part_1[Math.round(Math.random()*5)] + " " + part_2[Math.round(Math.random()*5)] + " " + part_3[Math.round(Math.random()*5)]
    monster_name.innerHTML=monster_full_name;
    
}



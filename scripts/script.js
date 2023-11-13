const green_btn=document.getElementById("green");
const red_btn=document.getElementById("red");
const yellow_btn=document.getElementById("yellow");
const blue_btn=document.getElementById("blue");
const body=document.getElementById("body");
const level_title=document.getElementById("level-title")

const green_audio = new Audio('./sounds/green.mp3');
const red_audio = new Audio('./sounds/red.mp3');
const yellow_audio = new Audio('./sounds/yellow.mp3');
const blue_audio = new Audio('./sounds/blue.mp3');
const wrong_audio = new Audio('./sounds/wrong.mp3');
const win_audio = new Audio('./sounds/win.mp3')

let main_seq=[]
let on=false
let level=1
let flash_number=0

body.addEventListener("click",function(){    // start or restart the game
    if(!on){
        on=true
        let player_turn=false
        level_title.textContent="Level 1"
        level=1
        main_seq=[]
        for(i=0;i<50;i++){
            main_seq.push(Math.ceil(Math.random()*4))
        }
        setTimeout(gameturn,1000)
    }
});

function gameturn(){    // flash the next color in the sequence
    flash_number=0;
    level_title.textContent="Level "+level;
    switch(main_seq[level-1]){
        case 1:
            setTimeout(flash_green,1000);
            break;
        case 2:
            setTimeout(flash_red,1000);
            break; 
        case 3:
            setTimeout(flash_yellow,1000);
            break;
        case 4:
            setTimeout(flash_blue,1000);
            break;
    }
}

//functions to flash each color with audio

function flash_green(){     
    player_turn=false;
    green_audio.play();
    green_btn.classList.toggle("pressed");
    setTimeout(function(){
        green_btn.classList.toggle("pressed");
        player_turn=true
    },200)
}

function flash_red(){
    player_turn=false;
    red_audio.play();
    red_btn.classList.toggle("pressed");
    setTimeout(function(){
        red_btn.classList.toggle("pressed");
        player_turn=true
    },200);
}

function flash_yellow(){
    player_turn=false;
    yellow_audio.play();
    yellow_btn.classList.toggle("pressed");
    setTimeout(function(){
        yellow_btn.classList.toggle("pressed");
        player_turn=true
    },200)
}

function flash_blue(){
    player_turn=false;
    blue_audio.play();
    blue_btn.classList.toggle("pressed");
    setTimeout(function(){
        blue_btn.classList.toggle("pressed");
        player_turn=true
    },200)
}

green_btn.addEventListener("click",green_click);
red_btn.addEventListener("click",red_click);
yellow_btn.addEventListener("click",yellow_click);
blue_btn.addEventListener("click",blue_click);

//functions for player when he clicks a button

function green_click(){     
    if(player_turn){
        if (main_seq[flash_number]==1){
            flash_green();
            flash_number++;
            if (flash_number==level){
                next_level();
            }
        }
        else{
            lost();
        }
    }
}

function red_click(){
    if(player_turn){
        player_turn=false;
        if (main_seq[flash_number]==2){
            flash_red();
            flash_number++;
            if (flash_number==level){
                next_level();
            }
        }
        else{
            lost();
        }
    }
}

function yellow_click(){
    if(player_turn){
        if (main_seq[flash_number]==3){
            flash_yellow();
            flash_number++;
            if (flash_number==level){
                next_level();
            }
        }
        else{
            lost();
        }
    }
}

function blue_click(){
    if(player_turn){
        if (main_seq[flash_number]==4){
            flash_blue();
            flash_number++;
            if (flash_number==level){
                next_level();
            }
        }
        else{
            lost();
        }
    }
}

function next_level(){      //switch to next level
    setTimeout(function(){
        player_turn=false;
    },220);
    flash_number=0;
    level++;
    if (level>3){       // win case
        level_title.textContent="You Won! Press Any Key To Restart";
        setTimeout(function (){
            win_audio.play();
            player_turn=false;
        },300);
        setTimeout(function(){
            on=false;
        },3000)
        return;
    }
    setTimeout(gameturn,1000);
}

function lost(){        //lose case
    player_turn=false
    wrong_audio.play();
    level_title.textContent="Game Over, Press Any Key To Restart";
    body.classList.toggle("game-over");
    setTimeout(function(){
        body.classList.toggle("game-over");
        on=false;
        },200);
}
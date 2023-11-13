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
import './main.css'

let btn = [];
let c = "";
for (let i = 1; i <= 9; i++)
{
    c += i;
    btn.push(document.getElementById(c));
    c = "";
}
let start = document.querySelector('.start_button');
let score = document.querySelector('.score_field');
let time = document.querySelector('.timer');
let seconds = 10;
let timer;
let position;
let prev;
let scores = 0;
let Loop;

start.addEventListener('click', start_game);

function loop_start(){
    Loop = setInterval(() => {
        prev = position;
        if (prev != null){
            document.getElementById(prev.toString()).style.background = "lightslategray";
        }
        while (position === prev){
            position = Math.floor(Math.random() * 9) + 1;
        }
        document.getElementById(position.toString()).style.background = "black";
    }, 450);
}

function timer_start() {
    timer = setInterval(() => {
        seconds--;
        time.innerHTML = "Time: " + seconds.toString();
        if (seconds <= 0) {
            stop();
        }
    }, 1000);
}

function stop() {
    start.innerText = "Restart";
    start.removeEventListener('click', stop);
    start.addEventListener('click', start_game);
    btn.forEach(button => {
        button.removeEventListener('click', click_check);
        button.style.background = "lightslategray";
    })
    clearInterval(Loop);
    clearInterval(timer);
}

function click_check(evt){
    if (position.toString() === evt.currentTarget.id){
        scores++;
        score.innerText = "Score: "+ scores.toString();
    }
}

function start_game() {
    start.removeEventListener('click', start_game);
    btn.forEach(button => {
        button.addEventListener('click', click_check);
    });
    time.innerText = "Time: 10";
    score.innerText = "Score: 0";
    start.addEventListener('click', stop);
    seconds = 10;
    scores = 0;
    loop_start();
    timer_start();
}

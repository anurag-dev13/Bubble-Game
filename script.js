
function bubbleGen(){
    let save = " "; // Reset the save variable
    for (let i = 0; i < 216; i++) {
    save += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
}
document.getElementById("panelbottom").innerHTML = save;
}

let setTimer = 60;
function settingTimer(){
    let exitTime = setInterval(function(){
        if(setTimer > 0)
        {
            setTimer--;
            document.querySelector("#timerVal").textContent = setTimer;
        }
        else{
            clearInterval(exitTime);
            document.querySelector("#panelbottom").innerHTML = `<h1 class="gameover">GAME OVER</h1>`;
        }
    }, 1000);
}

let hitting = 0;
function hitChange(){
    hitting = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitting;
}

let score = 0;
function increaseScore()
{
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#panelbottom").addEventListener("click", function(detail)
{
    let clickedNumber = Number(detail.target.textContent);
    if (clickedNumber === hitting)
        {
        increaseScore();
        bubbleGen();
        hitChange();
        }
})

bubbleGen();
hitChange();
settingTimer();
let app = document.getElementById('app');
let points = 0;
let clientX;
let clientY;
let boxX;
let boxY;
let range = 30; // Length and width of findThisBox, this will be used to measure if the cursor is within 20px of the box' starting point. (if the cursos hits the box)
let orangerange = 200;
let redrange = 700;
let html;
let boxFound = false;
let boxColor = 'red';

let newBtn = document.createElement('button');
newBtn.id = 'startGame';
newBtn.textContent = 'Next Round';
newBtn.onclick = restartGame;
let newDiv = document.createElement('div');
newDiv.id = 'header';
let mousePosTimeout;



randomBoxPosY();
randomBoxPosX();
updateView();
function updateView(){
    theBox = insertGame();
    app.innerHTML = /*HTML*/ `
    ${theBox}
    `;
    document.body.appendChild(newDiv)
    document.getElementById('header').innerHTML = /*HTML*/ `
        <h1 class='header'>Can you find the hidden box?</h1>
        <p>Points: ${points}</p>
        <div id="hotOrCold" class=""></div>
    `
    document.body.appendChild(newBtn)
}

function insertGame(){
return `<div id="findThisBox" style="width: 30px; height: 30px; background-color: ${boxColor};left: ${boxX}px; top: ${boxY}px;"></div>`;
}

function updateGameView(){
}



function restartGame(){
    if(boxFound){
    randomBoxPosY();
    randomBoxPosX();
    boxColor = 'red';
    boxFound = false;
    document.getElementById('app').addEventListener('mousemove', trackMouse);
    mousePosTimeout = setInterval(checkPosOfCursor, 100);
    updateView();
}

}

function trackMouse(event){
    clientX = event.clientX;
    clientY= event.clientY;
    hotOrCold();
}

document.getElementById('app').addEventListener('mousemove', trackMouse);


function randomBoxPosY() {
    boxY = Math.floor(Math.random()* 650)
    return boxY;
}
function randomBoxPosX() {
    boxX = Math.floor(Math.random()* 1650)
    return boxX;
}

function checkPosOfCursor(){
    // If at the divs start position && 20 pixels to the right, or if its at the div start position and 20 pixels down, do this
    if(clientX )
    
    
    
    if(clientX >= boxX && clientX <= boxX + range && clientY >= boxY && clientY <= boxY + range) {
        document.getElementById('app').removeEventListener('mousemove', trackMouse)
        boxFound = true;
    }

    if(boxFound === true){
        clearInterval(mousePosTimeout)
        boxColor = 'green';
        points++;
        document.getElementById('hotOrCold').className = "";
        document.getElementById('hotOrCold').classList.add('green');
        updateView();
        

    }
    
    }

    mousePosTimeout = setInterval(checkPosOfCursor, 100);

function hotOrCold(){
    if(clientX >= boxX - orangerange && clientX <= boxX + orangerange && clientY >= boxY + orangerange && clientY <= boxY + orangerange) {
        document.getElementById('hotOrCold').className = "";
        document.getElementById('hotOrCold').className = "orange";
    } else if (clientX >= redrange && clientX <= boxX - redrange && clientY >= boxY && clientY <= boxY + range) {
        
        
        document.getElementById('hotOrCold').className = "";
        document.getElementById('hotOrCold').className = "red";
    }


    };


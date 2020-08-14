let n = 16;
const board = document.querySelector("#board");
const btnNew = document.querySelector("#new");
const btnClear = document.querySelector("#clear");
const btnBW = document.querySelector("#bw");
const btnColor = document.querySelector("#color");

let boardSize;

//draw the initial grid
window.onload = setBoardSize();
window.onload = drawGrid(n);
//clear the grid
btnClear.addEventListener("click", () => clearGrid());
//start new grid
btnNew.addEventListener("click", () => enterSize());

//change colors
btnBW.addEventListener("click", () => {
    clearGrid();
    const div = document.querySelectorAll("#grid");
    div.forEach(element => {moveMouse(element, "black")});
});

btnColor.addEventListener("click",() => {
    clearGrid();
    const div = document.querySelectorAll("#grid");
    div.forEach(element => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        moveMouse(element, randomColor)});
        
});

function setBoardSize() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    if (windowHeight < windowWidth) {
        boardSize = windowHeight - 200;
    } else boardSize = windowWidth - 200;
    board.style.height = `${boardSize}px`;
    board.style.width = `${boardSize}px`;
}

function enterSize() {
    const newSize = prompt("Choose the size","2...64");
    if ((newSize == null) || 
        (newSize == "") || isNaN(newSize)
    ) { 
        clearGrid();
    } else {
        n = Number(newSize);
        while (board.hasChildNodes()) {
            board.removeChild(board.firstChild);}
        drawGrid(n);
    }
}

function drawGrid (n) {
    let gridSize = boardSize/n - 2;
    for (let i = 0; i < n*n; i++) {
            const div = document.createElement("div");
            div.style.height = `${gridSize}px`;
            div.style.width = `${gridSize}px`;
            moveMouse(div, "black");
            //div.onmouseover = function() {div.style.backgroundColor ="black";};
            //div.onmouseout = function() {div.style.backgroundColor = "black";};
            div.classList.add("grid");
            div.id = "grid";
            board.appendChild(div);
        }
    }

function clearGrid() {
    const div = document.querySelectorAll("#grid");
    div.forEach(element => {
        element.style.backgroundColor = "white";
        moveMouse(element, "black");
    });
}    

function moveMouse(element, color) {
    element.onmouseover = function() {element.style.backgroundColor = color;};
    element.onmouseout = function() {element.style.backgroundColor = color;};
}

function makeColor() {
    return color = "red";
}




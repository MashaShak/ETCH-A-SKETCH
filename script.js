let n = 16;
const board = document.querySelector("#board");
const btnNew = document.querySelector("#new");
const btnClear = document.querySelector("#clear");


const widthBox = window.width;
const heightBox = window.height;
let boardSize = 480;

//draw the initial grid
window.onload = drawGrid(n);
//clear the grid
btnClear.addEventListener("click", () => clearGrid());
//start new grid
btnNew.addEventListener("click", () => enterSize());




//choose color

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
            div.onmouseover = function() {div.style.backgroundColor = "black";};
            div.onmouseout = function() {div.style.backgroundColor = "black";};
            div.classList.add("grid");
            div.id = "grid";
            board.appendChild(div);
        }
    }

function clearGrid() {
    const div = document.querySelectorAll("#grid");
    div.forEach(element => {element.style.backgroundColor = "white";})
}    

function mouseOver() {
    div.style.backgroundColor = "black";
}

function mouseOut() {
    div.style.backgroundColor = "black";
}


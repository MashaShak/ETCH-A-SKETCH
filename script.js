let n = 16;
const board = document.querySelector("#board");
const btnNew = document.querySelector("#new");
const btnClear = document.querySelector("#clear");
const btnBW = document.querySelector("#bw");
const btnColor = document.querySelector("#color");

let boardSize;

setBoardSize();
drawGrid(n);

btnClear.addEventListener("click", () => clearGrid());

btnNew.addEventListener("click", () => enterSize());

btnBW.addEventListener("click", () => {
    clearGrid();
    board.addEventListener("mousemove", (e) => {e.target.style.backgroundColor = "black"});
});

btnColor.addEventListener("click",() => {
    clearGrid();
    board.addEventListener("mousemove", (e) => {e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);}
    );
});

function setBoardSize() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    if (windowHeight < windowWidth) {
        boardSize = windowHeight;
    } else boardSize = windowWidth;
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
        while (board.hasChildNodes()) {
            board.removeChild(board.firstChild);}
        drawGrid(newSize);
    }
}

function drawGrid (n) {
    let gridSize = boardSize/n - 2;
    for (let i = 0; i < n*n; i++) {
            const divNew = document.createElement("div");
            divNew.style.height = divNew.style.width = `${gridSize}px`;
            divNew.classList.add("grid");
            divNew.id = "grid";
            board.appendChild(divNew);
        };
        board.addEventListener("mousemove", (e) => {e.target.style.backgroundColor = "black"});
    }

function clearGrid() {
    const div = document.querySelectorAll("#grid");
    div.forEach(e => {e.style.backgroundColor = "white"});
}


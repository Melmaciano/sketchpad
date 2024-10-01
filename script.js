const body = document.querySelector("body");
const container = document.querySelector(".container");
const btn = document.querySelector("#btn-squares");
let squaresPerSide = 16;
let grid = [];

createSquares(squaresPerSide);
createRows(grid);
colorDraw();

function createGrid() {
    grid.length = 0;
    removeSquares();
    container.style.opacity = 0.5


    do {
        squaresPerSide = +prompt("how many squares do you like? (choose no more than 100)", "16");
    } while (isNaN(squaresPerSide) || squaresPerSide === null || squaresPerSide > 100 || squaresPerSide < 1);

    createSquares(squaresPerSide);
    createRows(grid);
    colorDraw()
}

function createRows(grid){
    grid.forEach(elem => {
        const row = document.createElement("div");
        row.classList.add("row");
        elem.forEach(square => {
            row.appendChild(square);
        });
        container.appendChild(row);
    });
}

function createSquares(numOfSquaresPerSide) {
    for (let i = 0; i < numOfSquaresPerSide; i++) {
        grid.push([]);
        for (let j = 0; j < numOfSquaresPerSide; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            grid[i][j] = square;
        }
    }
}

function removeSquares() {
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function random() {
    return Math.floor(Math.random() * 256);
}

function colorDraw() {
    grid.forEach(row => {
        row.forEach(elem => {
            elem.addEventListener("mouseover", (event) => {
                const square = event.currentTarget;
                if (+container.style.opacity < 1 && !square.style.backgroundColor) {
                    container.style.opacity = +container.style.opacity + (1 / (grid.length ** 2) / 2);
                }
                square.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
            });
        });
    });
}

btn.addEventListener("click", createGrid);
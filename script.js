const body = document.querySelector("body");
const container = document.querySelector(".container");
const btn = document.querySelector("#btn-squares");
const option = document.querySelector("#option-style")
let squaresPerSide = 16;
let grid = [];
let containerBackgroundColor = 100;

console.log(option);

createSquares(squaresPerSide);
createRows(grid);
colorDraw(option.value);

function createGrid() {
    do {
        squaresPerSide = prompt("how many squares do you like? (choose no more than 100)", "16");
        if (squaresPerSide === null) return;
    } while (isNaN(squaresPerSide) || squaresPerSide > 100 || squaresPerSide < 1);

    grid.length = 0;
    removeSquares();
    createSquares(+squaresPerSide);
    createRows(grid);
    colorDraw(option.value)
    containerBackgroundColor = 100;
    container.style.backgroundColor = "hsl(0, 0%, 100%)";
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

function changeOpacity() {
    container
}

function colorDraw(option) {
    grid.forEach(row => {
        row.forEach(elem => {
            elem.addEventListener("mouseover", (event) => {
                const square = event.currentTarget;
                if (option === "colorful") {
                    square.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
                } else if (option === "opacity" && containerBackgroundColor > 0) {
                    containerBackgroundColor -= 10;
                    console.log(containerBackgroundColor);
                    container.style.backgroundColor = `hsl(0, 0%, ${containerBackgroundColor}%)`;
                }
            });
        });
    });
}

btn.addEventListener("click", createGrid);
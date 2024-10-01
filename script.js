const body = document.querySelector("body");
const container = document.querySelector(".container");
const btn = document.querySelector("#btn-squares");
let height = window.innerHeight * 0.9;
let squaresPerSide = 16;
let squareWidth = height / squaresPerSide;
container.style.width = `${height + 0.1 * squareWidth}px`;
let grid = [];
let count = 0;

for (let i = 0; i < squaresPerSide; i++) {
    for (let j = 0; j < squaresPerSide; j++) {
        const square = document.createElement("div")
        square.style.width = `${squareWidth}px`;
        square.classList.add("square");
        grid[squaresPerSide * i + j] = square;
        container.appendChild(square);
    }
}

colorDraw();

function createGrid() {
    grid.length = 0;
    removeSquares();
    count = 0;

    do {
        squaresPerSide = +prompt("how many squares do you like? (choose no more than 100)", "16");
    } while (isNaN(squaresPerSide) || squaresPerSide === null || squaresPerSide > 100 || squaresPerSide < 1);

    squareWidth = container.offsetWidth / squaresPerSide;

    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            const square = document.createElement("div")
            square.style.width = `${squareWidth}px`;
            square.classList.add("square");
            grid[squaresPerSide * i + j] = square;
            container.appendChild(square);
        }
    }

    colorDraw()
}

function removeSquares() {
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function colorDraw() {
    grid.forEach(elem => {
        elem.addEventListener("mouseover", (event) => {
            const square = event.currentTarget;
            if (!square.textContent) square.textContent = ++count;
            square.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        });
    });
}

function random() {
    return Math.floor(Math.random() * 256);
}

addEventListener("resize", () => {
    if(body.scrollWidth > body.clientWidth) {
        height = body.clientWidth;
        squareWidth = height / squaresPerSide;
        container.style.width = `${height + 0.1 * squareWidth}px`;
        grid.forEach(elem => {
        elem.style.width = `${squareWidth}px`;
        });
    } else if (height < window.innerHeight * 0.9) {
        console.log(height, window.innerHeight * 0.9, height - window.innerHeight * 0.9);
    }

    document.querySelector(".width-test1").textContent = `offsetWidth: ${body.offsetWidth}`;
    document.querySelector(".width-test2").textContent = `clientWidth ${body.clientWidth}`;
    document.querySelector(".width-test3").textContent = `scrollWidth ${body.scrollWidth}`;
});
btn.addEventListener("click", createGrid);
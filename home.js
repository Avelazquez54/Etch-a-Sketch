// console.log("Hello World!") // Testing to make sure the file connected to the html properly.

function resetGrid(){
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
};

function clearGrid(gridSize){
    resetGrid();
    for(let i =0 ; i< gridSize*gridSize; i++){
        const gridItem = document.createElement("div");
        gridItem.textContent = "";

        gridItem.style.backgroundColor = `rgb(${255}, ${255}, ${255})`;
        gridItem.style.setProperty('--grid-size',gridSize);

        gridItem.addEventListener("mouseover", () =>{
            gridItem.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });

        grid.appendChild(gridItem);
    }
    grid.style.width = 100/gridSize;
    return;
};


function gridMaker(gridSize) {
    resetGrid();
    currentSize = gridSize;
    for(let i =0 ; i< gridSize*gridSize; i++){
        const gridItem = document.createElement("div");
        gridItem.textContent = "";

        gridItem.style.backgroundColor = `rgb(${255}, ${255}, ${255})`;
        gridItem.style.setProperty('--grid-size',gridSize);
        gridItem.addEventListener("mouseover", () =>{
            gridItem.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });

        grid.appendChild(gridItem);
    }
    grid.style.width = 100/gridSize;
    return;
};

function defaultSize(defaultGrid){
    // console.log("hello");
    for(let i =0 ; i< defaultGrid*defaultGrid; i++){
        const gridItem = document.createElement("div");
        gridItem.textContent = "";

        gridItem.style.backgroundColor = `rgb(${255}, ${255}, ${255})`;
        gridItem.style.setProperty('--grid-size',defaultGrid);

        gridItem.addEventListener("mouseover", () =>{
            gridItem.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        })

        grid.appendChild(gridItem);
    }
    grid.style.width = 100/defaultGrid;
    return;
};


const btn = document.querySelector("#commit")
const input = document.querySelector("#grid")
const grid = document.querySelector("#sketch");
const reset = document.querySelector("#reset");
const clear = document.querySelector("#clear");

btn.addEventListener("click",(event) => {
    const gridSize = parseInt(input.value);
    // console.log(typeof(gridSize));

    if(!Number.isInteger(gridSize) || gridSize > 100) {
        input.value = "";
        input.focus();
        alert("Please enter a valid number under 100 to create your grid.");
        return;
    }
    gridMaker(gridSize);
    currentSize = gridSize;
    input.value = "";
    input.focus();

    // console.log(gridSize);
});


reset.addEventListener("click",() => {
    currentSize = 16;
    resetGrid();
    defaultSize(defaultGrid);
    input.value = "";
    input.focus();
});

clear.addEventListener("click", () =>{
    clearGrid(currentSize);
    input.value = "";
    input.focus();
});


const defaultGrid = 16;
let currentSize = defaultGrid;
defaultSize(defaultGrid);
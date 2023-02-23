function createGrid(numberOfSides) {
    const grid = document.querySelector(".grid");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    for(let i=0;i<numberOfSides;i++) {
        const row = document.createElement("div");
        row.classList = "row";
        grid.appendChild(row);
        for(let j=0;j<numberOfSides;j++) {
            const pixel = document.createElement("div");
            pixel.classList = "pixel";
            pixel.id = `r${i}c${j}`;
            row.appendChild(pixel);
            pixel.addEventListener('mouseover',colorIn);
        }
    }
}
function randomByte() {
    return Math.floor(Math.random()* 256);
}
function colorIn() {
    const pixel = document.querySelector(`#${this.id}`);
    const currentColor=pixel.style.backgroundColor;
    if (currentColor == "") {
        const red = randomByte();
        const green = randomByte();
        const blue = randomByte();
        const alpha = 0.9;
        pixel.style.backgroundColor=`rgba(${red},${green},${blue},${alpha})`;
    } else {
        const colorArray=currentColor.split(",");
        if (colorArray.length == 4) {
            const red=+colorArray[0].slice(5);
            const green=+colorArray[1].slice(1);
            const blue=+colorArray[2].slice(1);
            const alpha=+colorArray[3].slice(1,-1) - 0.1;
            pixel.style.backgroundColor=`rgba(${red},${green},${blue},${alpha})`;
        }
    }
}
function resize() {
    let newSize = prompt("Please enter the number of pixels per side", "16");
    if (newSize >= 16 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Size must be between 16 and 100");
    }
}
createGrid(16);

const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener('click',resize);

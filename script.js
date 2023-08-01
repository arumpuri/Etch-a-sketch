

document.addEventListener('DOMContentLoaded', function() {
    getSize();
    makeBoard(60);
})

function makeBoard(size) {
    let board = document.querySelector('#gridBoard');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = 'black';
        })
        board.insertAdjacentElement("beforeend", div);
    }

}
 function getSize() {
    const value = document.querySelector("#sizeValue");
    const input = document.querySelector("#sizeSlider");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });
 }

function eraseColor() {
    
}

function resetBoard() {

    
}
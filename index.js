let board = document.getElementById('board');
let popup = document.getElementById('popup');

popup.onclick = function () {

    while (board.firstChild) {
        board.removeChild(board.firstChild)
    };

    document.getElementById('popup').innerHTML = "reset board";
    

    let promptInput = prompt("How many squares do you want your board to have per side?", "16");

    if (promptInput > 100) {

        alert("the maximum amount of squares is 100")

    } else {

        let squaresPerSide = parseFloat(promptInput);
        let squareAmount = squaresPerSide ** 2;
        createSquares(squareAmount);

        function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color= '#'
                for (let i = 0; i<6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
        }

        function createSquares(squareAmount){

            let squareWidth = (625 / squaresPerSide) + "px";
        
            for (let i=0; i < squareAmount; i++) {
        
                let square = document.createElement('div');
                square.setAttribute('class', 'square');
                square.style.width = squareWidth;
                square.style.height = squareWidth;
                board.appendChild(square);

                let squares = document.getElementsByClassName("square");
                squares[i].onmouseover = function(){
                this.setAttribute("class", "square_activated")
                this.style.backgroundColor=getRandomColor();
            }}
        }}
};
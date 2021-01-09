document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    const resultDisplay = document.getElementById('result')
    const width = 4;
    let squares = [];

    // create a playing board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)

            squares.push(square)
        }
        // generate the number 2 twice on the grid display
        generateNum()
        generateNum()
    }

    createBoard()

    // generate a number randomly
    function generateNum() {
        //  choose a random number position in our grids
        //  and assign it a 2 
        let randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
        } else generateNum()
    }

    // swipe right
    function moveRight() {
        for (let i = 0; i < width * width; i++) {
            // i is a cell in the grid
            // get the contents of the cells as a whole row
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i + 1].innerHTML;
                let totalThree = squares[i + 2].innerHTML;
                let totalFour = squares[i + 3].innerHTML;
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                console.log(row);
                let filteredRow = row.filter(num => num)
                console.log(filteredRow);
            }
        }
    }


    moveRight()
});
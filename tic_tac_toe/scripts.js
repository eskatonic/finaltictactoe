// Declairing variables
const gridBtns = document.getElementsByClassName('grid-item')               //==> Will give you an array of HTML collection
// const gridBtns2 = document.querySelectorAll('.grid-item')                //==> Will give you an array of node list, which will let you do .forEach()
const resetBtn = document.getElementById('reset')
const playerHeader = document.getElementById('playerHeader')
let scoreBoard = {player1: 0, player2: 0,}
let arrGrid = Array.from(gridBtns).map(btn => btn.innerText)                //==> Array.from turns it into an arry from an HTML collection
let turn = "X"
let player1 = "X"
let player2 = "O"

playerHeader.innerText = "Player 1's Turn: X"



// winning conditions
// let winConditions = [
//     [1,2,3], 
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7],
// ];

// for (i = 0; i <= newArray.length; i++) {
//     for (j = 0; j <= newArray[i].length; j++) {
//         if (newArray[i][j] === "X") {}
//         else {}

//         if (newArray[i].every(pram => pram == "X")) {
//             return playerHeader.innerText = "X is the winner!"
//         }
// }




// reset button eventListener
resetBtn.addEventListener('click', resetBoard)

// grid buttons eventListener
for (btn of gridBtns) {btn.addEventListener('click', clickTurn)};

// All the functions!!
function resetBoard (e) {
    for(btn of gridBtns) {
        btn.innerText = ""
        turn = "X"
        playerHeader.innerText = "Player 1's Turn: X"
    }
    arrGrid = Array.from(gridBtns).map(btn => btn.innerText) 
}

function clickTurn(e) {
        if (e.target.innerText !== "") {
        
        } else if (turn === "X") {
            e.target.innerText = turn
            turn = "O"
            playerHeader.innerText = "Player 2's Turn: O"
        } else {
            e.target.innerText = turn
            turn = "X"
            playerHeader.innerText = "Player 1's Turn: X"
        } 
        let indexArr = Array.from(gridBtns).indexOf(e.target)
        arrGrid[indexArr] = e.target.innerText
        console.log(arrGrid)
        checkWinner()
}

function checkWinner() {
    if (arrGrid.some(p => p !== "")) {
        if (arrGrid[0] === "X" && arrGrid[1] === "X" && arrGrid[2] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[0] === "O" && arrGrid[1] === "O" && arrGrid[2] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else if (arrGrid[3] === "X" && arrGrid[4] === "X" && arrGrid[5] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[3] === "O" && arrGrid[4] === "O" && arrGrid[5] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else if (arrGrid[6] === "X" && arrGrid[7] === "X" && arrGrid[8] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[6] === "O" && arrGrid[7] === "O" && arrGrid[8] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else if (arrGrid[0] === "X" && arrGrid[3] === "X" && arrGrid[6] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[0] === "O" && arrGrid[3] === "O" && arrGrid[6] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else if (arrGrid[1] === "X" && arrGrid[4] === "X" && arrGrid[7] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[1] === "O" && arrGrid[4] === "O" && arrGrid[7] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else if (arrGrid[2] === "X" && arrGrid[5] === "X" && arrGrid[8] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[2] === "O" && arrGrid[5] === "O" && arrGrid[8] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else if (arrGrid[0] === "X" && arrGrid[4] === "X" && arrGrid[8] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[0] === "O" && arrGrid[4] === "O" && arrGrid[8] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else if (arrGrid[2] === "X" && arrGrid[4] === "X" && arrGrid[6] === "X") {
            return playerHeader.innerText = "X is the winner"
        } else if (arrGrid[2] === "O" && arrGrid[4] === "O" && arrGrid[6] === "O") {
            return playerHeader.innerText = "O is the winner"
        } else {
            return playerHeader.innerText = "It's tie"
        }
    }
}

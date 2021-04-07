const gridBtns = document.getElementsByClassName('grid-item')
const resetBtn = document.getElementById('reset')
const playerText = document.querySelector('.playerText')

let turn = "X"
playerText.innerText = "Player 1's Turn: X"





function resetBoard (e) {
    for(btn of gridBtns) {
    btn.innerText = ""
    turn = "X"
    playerText.innerText = "Player 1's Turn: X"
    }
}


function myTurn(e) {

    if (e.target.innerText !== "") {}

    else if (turn === "X") {
        e.target.innerText = turn
        turn = "O"
        playerText.innerText = "Player 2's Turn: O"
    } else {
        e.target.innerText = turn
        turn = "X"
        playerText.innerText = "Player 1's Turn: X"
    } 
}

resetBtn.addEventListener('click', resetBoard)


for (btn of gridBtns) {
    btn.addEventListener('click', myTurn)}


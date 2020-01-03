//getElement packaging
function $(parameter) {
    if (parameter[0] === '.') {
        parameter = parameter.slice(1);
        let getItem = document.getElementsByClassName(parameter);
        return getItem;
    }
    else if (parameter[0] === '#') {
        parameter = parameter.slice(1);
        let getItem = document.getElementById(parameter);
        return getItem;
    }
    else {
        let getItem = document.getElementsByTagName(parameter);
        return getItem;
    }
}

let flag = true;
for (let i = 0; i < 9; i++) {
    $(".sqare")[i].addEventListener("click", function () {
        if (flag === true) {
            $(".sqare")[i].className = "sqare icon-radio-unchecked";
            $(".sqare")[i].innerText = 1;
            $("#player2").style.color = "black";
            $("#player1").style.color = "red";
            flag = false;
        }
        else {
            $(".sqare")[i].className = "sqare icon-cross";
            $(".sqare")[i].innerText = 2;
            $("#player1").style.color = "black";
            $("#player2").style.color = "red";
            flag = true;
        }
        $(".sqare")[i].disabled = "true";
    })
}


let board = ["", "", "", "", "", "", "", "", ""];
let winBoard = [false, false, false, false, false, false, false, false];
let timer = setInterval(() => {
    for (let i = 0; i < 9; i++) {
        board[i] = Number($(".sqare")[i].innerText);
    }
    checkItem();
}, 300);

function checkItem() {
    winBoard[0] = (board[0] == board[1] && board[1] == board[2] && board[0] != "");
    winBoard[1] = (board[3] == board[4] && board[4] == board[5] && board[3] != "");
    winBoard[2] = (board[6] == board[7] && board[7] == board[8] && board[6] != "");
    winBoard[3] = (board[0] == board[3] && board[3] == board[6] && board[0] != "");
    winBoard[4] = (board[1] == board[4] && board[4] == board[7] && board[1] != "");
    winBoard[5] = (board[2] == board[5] && board[5] == board[8] && board[2] != "");
    winBoard[6] = (board[0] == board[4] && board[4] == board[8] && board[0] != "");
    winBoard[7] = (board[2] == board[4] && board[4] == board[6] && board[2] != "");
    for (let i = 0; i < 8; i++) {
        if (winBoard[i] == true) {
            if (flag === true) {
                alert("player " + 2 + " win");
            }
            else {
                alert("player " + 1 + " win");
            }
            clearInterval(timer);
        }
    }
}









let player1;
let player2;
let player1Name;
let player2Name;
let AImove;
let AIonOff = 'off';
let moveCount= 0;
let tmpWin = 0;
let tempIndex;
let btDeci;
let record1 = JSON.parse(localStorage.getItem('record11'));
let record2 = JSON.parse(localStorage.getItem('record22'));
if (record1 === null) {
    record1 = 0;
}
if (record2 === null) {
    record2 = 0;
}

let leftSide;
let rightSide;
let bottomSide;
let upSide;
let middleVerticalSide;
let middleOrizontalSide;
let diagonalTopLBottomR;
let diagonalTopRBottomL;

let player1Score = {
    win:0,
    lose:0,
    egual:0
};
let player2Score = {
    win:0,
    lose:0,
    egual:0
};
let buttons = ['','','','','','','','',''];
alert(`
    Welcome! before you begin playng select
    x or 0 and the choice will modify player
    1 choice, player 1 always moves first in
    1vs1, if you press x or 0 or reset score
    or chose the type of game in the midle of
    the game the game will restart,
    have fun`);

let setMove = (move1, move2) => {
    moveCount = 0;
    player1 = move1;
    player2 = move2;
    AImove = move2;
    document.querySelector('.p1').innerHTML = `------> ${player1}`;
    document.querySelector('.p2').innerHTML = `------> ${player2}`;
    resetGame();
}

let move = (index) => {
    tempIndex = index;
    if (AIonOff === 'off') {
        let temporaryMove = buttons[index];
        let tempDivisibility = moveCount % 2;
    if (temporaryMove==='' && tempDivisibility === 0) {
        document.querySelector(`.bt${index}`).innerHTML= `<img src="${player1}-image.jpg">`;
        changeTurn();
        moveCount++;
        buttons[index] = player1;
    } else if (temporaryMove === '' && tempDivisibility != 0) {
        document.querySelector(`.bt${index}`).innerHTML = `<img src="${player2}-image.jpg">`;
        resetTurn();
        moveCount++;
        buttons[index] = player2;
    }
    winCheck();

    } else if (AIonOff === 'on') {
        let temporaryMove = buttons[tempIndex];
        let tempDivisibility = moveCount % 2;
        if (temporaryMove==='' && tempDivisibility === 0) {
            document.querySelector(`.bt${index}`).innerHTML= `<img src="${player1}-image.jpg">`;
            changeTurn();
            moveCount++;
            buttons[tempIndex] = player1;
            winCheck();
        }
    }
}

let setName = (num) => {
    if (AIonOff === 'off') {
        let tempName=document.querySelector(`.player${num}`).value;
        document.querySelector(`.player-name${num}`).innerHTML = tempName;
    } else if (AIonOff === 'on') {
        document.querySelector(`.player-name${num}`).innerHTML = 'computer';
    }
}

let winCheck = () => {
     if (buttons[0] === 'x' && buttons[3] === 'x' && buttons[6] === 'x') {
        leftSide = 'x';
        scoreChange('x');
     } else if (buttons[0] === '0' && buttons[3] === '0' && buttons[6] === '0') {
        leftSide = '0';
        scoreChange('0');
     }

     if (buttons[0] === 'x' && buttons[1] === 'x' && buttons[2] === 'x') {
        upSide = 'x';
        scoreChange('x');
     } else if (buttons[0] === '0' && buttons[1] === '0' && buttons[2] === '0') {
        upSide = '0';
        scoreChange('0');
     }

     if (buttons[2] === 'x' && buttons[5] === 'x' && buttons[8] === 'x') {
        rightSide = 'x';
        scoreChange('x');
     } else if (buttons[2] === '0' && buttons[5] === '0' && buttons[8] === '0') {
        rightSide = '0';
        scoreChange('0');
     }

     if (buttons[6] === 'x' && buttons[7] === 'x' && buttons[8] === 'x') {
        bottomSide = 'x';
        scoreChange('x');
     } else if (buttons[6] === '0' && buttons[7] === '0' && buttons[8] === '0') {
        bottomSide = '0';
        scoreChange('0');
     }

     if (buttons[1] === 'x' && buttons[4] === 'x' && buttons[7] === 'x') {
        middleVerticalSide = 'x';
        scoreChange('x');
     } else if (buttons[1] === '0' && buttons[4] === '0' && buttons[7] === '0') {
        middleVerticalSide = '0';
        scoreChange('0');
     }

     if (buttons[3] === 'x' && buttons[4] === 'x' && buttons[5] === 'x') {
        middleOrizontalSide = 'x';
        scoreChange('x');
     } else if (buttons[3] === '0' && buttons[4] === '0' && buttons[5] === '0') {
        middleOrizontalSide = '0';
        scoreChange('0');
     }

     if (buttons[0] === 'x' && buttons[4] === 'x' && buttons[8] === 'x') {
        diagonalTopLBottomR = 'x';
        scoreChange('x');
     } else if (buttons[0] === '0' && buttons[4] === '0' && buttons[8] === '0') {
        diagonalTopLBottomR = '0';
        scoreChange('0');
     }

     if (buttons[2] === 'x' && buttons[4] === 'x' && buttons[6] === 'x') {
        diagonalTopRBottomL = 'x';
        scoreChange('x');
     } else if (buttons[2] === '0' && buttons[4] === '0' && buttons[6] === '0') {
        diagonalTopRBottomL = '0';
        scoreChange('0');
     } else if (AIonOff === 'on' && tempWin === 0) {
        setTimeout(() =>{
            AImoving();
        }, 300);
     }
     if (moveCount === 9 && tempWin === 0) {
        player1Score.egual++;
        player2Score.egual++;
        resetGame();
        scoreUpdate();
     }
}

let resetGame = () => {
    for (let i=0;i<buttons.length;i++) {
        buttons[i] = '';
    }
    document.querySelector('.bt0').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt1').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt2').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt3').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt4').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt5').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt6').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt7').innerHTML = '<img src="blank.jpg">';
    document.querySelector('.bt8').innerHTML = '<img src="blank.jpg">';
    tempWin = 0;
    moveCount = 0;
    resetTurn();
}

let scoreChange = (unit) => {
    tempWin = 1;
    if (player1 === unit) {
        player1Score.win++;
        player2Score.lose++;
    } else if (player2 === unit) {
        recordCheck(player1Score.win);
        player2Score.win++;
        player1Score.lose++;
    }
    scoreUpdate();
     setTimeout(() =>{resetGame()}, 500);
}

let changeTurn = (unit) => {
        document.querySelector('.p1indi').classList.remove('turnnn');
        document.querySelector('.p1indi').classList.add('indicator');
        document.querySelector('.p2indi').classList.remove('indicator');
        document.querySelector('.p2indi').classList.add('turnnn');
}

let resetTurn = () => {
    document.querySelector('.p1indi').classList.remove('indicator');
    document.querySelector('.p1indi').classList.add('turnnn');
    document.querySelector('.p2indi').classList.remove('turnnn');
    document.querySelector('.p2indi').classList.add('indicator');
}

let AImoving = () => {
     let tempmove = Math.random();
     buttonDecider(tempmove);
     let tempDivisibility = moveCount % 2;
     if (buttons[btDeci] === '' && tempDivisibility != 0) {
        document.querySelector(`.bt${btDeci}`).innerHTML = `<img src="${player2}-image.jpg">`;
        resetTurn();
        moveCount++;
        buttons[btDeci] = player2;
        winCheck();
     } else {
        AImoving();
     }
}

let aion = () => {
    AIonOff = 'on';
}

let aioff = () => {
    AIonOff = 'off';
}

let buttonDecider = (unit) => {
    if (unit >= 0 && unit < 0.1) {
         btDeci = 0;
    }
    if (unit >=0.1 && unit < 0.2) {
        btDeci = 1;
    }
    if (unit >= 0.2 && unit < 0.3) {
        btDeci = 2;
    }
    if (unit >= 0.3 && unit < 0.4) {
        btDeci = 3;
    }
    if (unit >= 0.4 && unit < 0.5) {
        btDeci = 4;
    }
    if (unit >= 0.5 && unit < 0.6) {
        btDeci = 5;
    }
    if (unit >= 0.6 && unit < 0.7) {
        btDeci = 6;
    }
    if (unit >= 0.7 && unit < 0.8) {
        btDeci = 7;
    }
    if (unit >= 0.8 && unit < 1) {
        btDeci =8;
    }
}

let scoreUpdate = () => {
    document.querySelector('.score').innerHTML = `score:W(p1:${player1Score.win}
    p2:${player2Score.win}) L(p1:${player1Score.lose} p2:${player2Score.lose}) 
    E(p1:${player1Score.egual} p2:${player2Score.egual})`;
}

let recordCheck = (unit) => {
     if (player1Score.lose === 0 && player1Score.egual === 0) {
         let tempRecord = player1Score.win;
         if (tempRecord > record1) {
            record2 = record1;
            record1 = tempRecord;
         } else if (tempRecord > record2) {
            record2 = tempRecord;
         }
         updateRecord();
     }
}

let updateRecord = () => {
    show();
     let miniTempRecord1 = JSON.stringify(record1);
     let miniTempRecord2 = JSON.stringify(record2);
     localStorage.setItem('record11', miniTempRecord1);
     localStorage.setItem('record22', miniTempRecord2);
}

let show = () => {
    document.querySelector('.best1').innerHTML = `1 place : ${record1}`;
     document.querySelector('.second').innerHTML = `2 place : ${record2}`;
}
show();
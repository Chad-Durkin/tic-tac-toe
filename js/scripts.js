function createBoard(){
  var gameBoard = new Array(3);
  for (var index = 0; index < 3; index++) {
    gameBoard[index] = new Array(3);
  }
  return gameBoard;
}

function Players(playerOne, playerTwo, gameNumber) {
  this.playerOne = playerOne;
  this.playerOneWins = 0;
  this.playerOneLosses = 0;
  this.playerTwo = playerTwo;
  this.playerTwoWins = 0;
  this.playerTwoLosses = 0;
  this.gameNumber = gameNumber;
  this.gameBoard = createBoard();
}

function placeMove(xCord, yCord, newGame, turnCounter) {
  for (var xIndex = 0; xIndex < 3; xIndex++) {
    if(xCord === xIndex) {
      for (var yIndex = 0; yIndex < 3; yIndex++) {
        if(yCord === yIndex) {
          if(newGame.gameBoard[xCord][yCord] > 0) {
            alert("Someone has chose this square already!");
            return turnCounter;
          } else if(turnCounter % 2 === 0) {

            newGame.gameBoard[xCord][yCord] = 2;
            turnCounter++;
            return turnCounter;
          } else {

            newGame.gameBoard[xCord][yCord] = 1;
            turnCounter++;
            return turnCounter;
          }
        }
      }
    }
  }
}

function checkForWin(gameBoard, playerOne, playerTwo, turnCounter, arrayGames) {
  console.log(gameBoard);
  //horizontal
  if(gameBoard[0][0] > 0) {
    if(gameBoard[0][0] === gameBoard[1][0] && gameBoard[0][0] === gameBoard[2][0]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!")
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
      console.log(gameBoard);
    }
  }
  if(gameBoard[0][1] > 0) {
    if(gameBoard[0][1] === gameBoard[1][1] && gameBoard[0][1] === gameBoard[2][1]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!");
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
    }
  }
  if(gameBoard[0][2] > 0) {
    if(gameBoard[0][2] === gameBoard[1][2] && gameBoard[0][2] === gameBoard[2][2]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!");
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
    }
  }
  //vertical
  if(gameBoard[0][0] > 0) {
    if(gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][0] === gameBoard[0][2]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!");
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
    }
  }
  if(gameBoard[1][0] > 0) {
    if(gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][0] === gameBoard[1][2]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!");
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
    }
  }
  if(gameBoard[2][0] > 0) {
    if(gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][0] === gameBoard[2][2]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!");
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
    }
  }
  //diagnol
  if(gameBoard[0][0] > 0) {
    if(gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!");
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
    }
  }
  if(gameBoard[2][0] > 0) {
    if(gameBoard[2][0] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[0][2]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
      }
      else {
        alert(playerOne + " won!");
      }
      arrayGames.push(gameBoard);
      gameBoard.empty();
      console.log(gameBoard);
    }
  }
}

$(function() {
var arrayGames = [];
var gameCounter = 1;
var turnCounter = 1;
var xCord;
var yCord;

  $("form#game-board").submit(function(event) {
    event.preventDefault();
    var playerOne = $("input#player-one-name").val();
    var playerTwo = $("input#player-two-name").val();

    var newGame = new Players(playerOne, playerTwo, gameCounter);
    gameCounter++;

    console.log(newGame);
    $("#one").click(function(){
      xCord = 0;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter, arrayGames);
    });
    $("#two").click(function(){
      xCord = 1;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });
    $("#three").click(function(){
      xCord = 2;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });
    $("#four").click(function(){
      xCord = 0;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });
    $("#five").click(function(){
      xCord = 1;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });
    $("#six").click(function(){
      xCord = 2;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });
    $("#seven").click(function(){
      xCord = 0;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });
    $("#eight").click(function(){
      xCord = 1;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });
    $("#nine").click(function(){
      xCord = 2;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
      checkForWin(newGame.gameBoard, newGame.playerOne, newGame.playerTwo, turnCounter);
    });



    $("input#player-one-name").val("");
    $("input#player-two-name").val("");
  })
});

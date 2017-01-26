var newGame;
var arrayGames = [];
var gameCounter = 0;

function createBoard(){
  var gameBoard = new Array(3);
  for (var index = 0; index < 3; index++) {
    gameBoard[index] = new Array(3);
  }
  for(var index = 0; index < 3; index++) {
    for(var indexTwo = 0; indexTwo < 3; indexTwo++) {
      gameBoard[index][indexTwo] = 0;
    }
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

function placeMove(xCord, yCord, currentGame, turnCounter, clickLocation) {
  for (var xIndex = 0; xIndex < 3; xIndex++) {
    if(xCord === xIndex) {
      for (var yIndex = 0; yIndex < 3; yIndex++) {
        if(yCord === yIndex) {
          if(currentGame.gameBoard[xCord][yCord] > 0) {
            alert("Someone has chose this square already!");
            return turnCounter;
          } else if(turnCounter % 2 === 0) {
            currentGame.gameBoard[xCord][yCord] = 2;
            $(clickLocation + " .playerTwoMark").show();
            turnCounter++;
            return turnCounter;
          } else {
            currentGame.gameBoard[xCord][yCord] = 1;
            $(clickLocation + " .playerOneMark").show();
            turnCounter++;
            return turnCounter;
          }
        }
      }
    }
  }
}

function checkForWin(gameBoard, playerOne, playerTwo, turnCounter, arrayGames, gameCounter) {
  //horizontal
  if(gameBoard[0][0] > 0) {
    if(gameBoard[0][0] === gameBoard[1][0] && gameBoard[0][0] === gameBoard[2][0]) {
      if((turnCounter - 1) % 2 === 0) {
        alert(playerTwo + " won!");
        arrayGames[gameCounter - 1].playerTwoWins += 1;
        arrayGames[gameCounter - 1].playerOneLosses += 1;
        console.log(arrayGames[gameCounter - 1].playerTwoWins);
        console.log(arrayGames[gameCounter - 1].playerOneLosses);
      }
      else {
        alert(playerOne + " won!");
        arrayGames[gameCounter - 1].playerOneWins += 1;
        arrayGames[gameCounter - 1].playerTwoLosses += 1;
        console.log(arrayGames[gameCounter - 1].playerOneWins);
        console.log(arrayGames[gameCounter - 1].playerTwoLosses);
      }
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
    }
  }
  return gameBoard;
}

$(function() {

  $("form#game-board").submit(function(event) {
    event.preventDefault();
    var turnCounter = 1;
    var xCord;
    var yCord;
    var playerOne = $("input#player-one-name").val();
    var playerTwo = $("input#player-two-name").val();
    gameCounter++;
    newGame = new Players(playerOne, playerTwo, gameCounter);
    arrayGames[gameCounter-1] = newGame;

    $("#one").unbind();
    $("#two").unbind();
    $("#three").unbind();
    $("#four").unbind();
    $("#five").unbind();
    $("#six").unbind();
    $("#seven").unbind();
    $("#eight").unbind();
    $("#nine").unbind();

    $("#one").click(function(){
      xCord = 0;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#one");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#two").click(function(){
      xCord = 1;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#two");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#three").click(function(){
      xCord = 2;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#three");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#four").click(function(){
      xCord = 0;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#four");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#five").click(function(){
      xCord = 1;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#five");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#six").click(function(){
      xCord = 2;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#six");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#seven").click(function(){
      xCord = 0;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#seven");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#eight").click(function(){
      xCord = 1;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#eight");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });
    $("#nine").click(function(){
      xCord = 2;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, arrayGames[gameCounter-1], turnCounter, "#nine");
      arrayGames[gameCounter-1].gameBoard = checkForWin(arrayGames[gameCounter-1].gameBoard, arrayGames[gameCounter-1].playerOne, arrayGames[gameCounter-1].playerTwo, turnCounter, arrayGames, gameCounter);
    });

    $("input#player-one-name").val("");
    $("input#player-two-name").val("");
  })
});

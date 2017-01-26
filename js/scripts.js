var newGame;
var arrayGames = [];
var gameCounter = 0;

function unbindStuff() {
  $("#one").unbind();
  $("#two").unbind();
  $("#three").unbind();
  $("#four").unbind();
  $("#five").unbind();
  $("#six").unbind();
  $("#seven").unbind();
  $("#eight").unbind();
  $("#nine").unbind();
}

function createBoard() {
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

function playerOneWins(arrayGames, playerOne, playerTwo) {
  arrayGames[gameCounter - 1].playerOneWins += 1;
  arrayGames[gameCounter - 1].playerTwoLosses += 1;
  $('.displayPlayerOne').text(playerOne + "'s record is now (" + arrayGames[gameCounter-1].playerOneWins + " Wins & " + arrayGames[gameCounter-1].playerOneLosses + " Losses)");
  $('.displayPlayerTwo').text(playerTwo + "'s record is now (" + arrayGames[gameCounter-1].playerTwoWins + " Wins & " + arrayGames[gameCounter-1].playerTwoLosses + " Losses)");
  $(".displayPlayerOne").show();
  $(".wee").off();
}

function playerTwoWon(arrayGames, playerOne, playerTwo) {
  arrayGames[gameCounter - 1].playerTwoWins += 1;
  arrayGames[gameCounter - 1].playerOneLosses += 1;
  $('.displayPlayerOne').text(playerOne + "'s record is now (" + arrayGames[gameCounter-1].playerOneWins + " Wins & " + arrayGames[gameCounter-1].playerOneLosses + " Losses)");
  $('.displayPlayerTwo').text(playerTwo + "'s record is now (" + arrayGames[gameCounter-1].playerTwoWins + " Wins & " + arrayGames[gameCounter-1].playerTwoLosses + " Losses)");
  $(".displayPlayerTwo").show();
  $(".wee").off();
}

function checkForWin(gameBoard, playerOne, playerTwo, turnCounter, arrayGames, gameCounter) {
  //horizontal
  if(gameBoard[0][0] > 0) {
    if(gameBoard[0][0] === gameBoard[1][0] && gameBoard[0][0] === gameBoard[2][0]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  if(gameBoard[0][1] > 0) {
    if(gameBoard[0][1] === gameBoard[1][1] && gameBoard[0][1] === gameBoard[2][1]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  if(gameBoard[0][2] > 0) {
    if(gameBoard[0][2] === gameBoard[1][2] && gameBoard[0][2] === gameBoard[2][2]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  //vertical
  if(gameBoard[0][0] > 0) {
    if(gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][0] === gameBoard[0][2]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  if(gameBoard[1][0] > 0) {
    if(gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][0] === gameBoard[1][2]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  if(gameBoard[2][0] > 0) {
    if(gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][0] === gameBoard[2][2]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  //diagnol
  if(gameBoard[0][0] > 0) {
    if(gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  if(gameBoard[2][0] > 0) {
    if(gameBoard[2][0] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[0][2]) {
      if((turnCounter - 1) % 2 === 0) {
        playerTwoWon(arrayGames, playerOne, playerTwo);
      }
      else {
        playerOneWins(arrayGames, playerOne, playerTwo);
      }
    }
  }
  return gameBoard;
}

function checkForPlayer(playerOne, playerTwo, arrayGames, gameCounter) {
  for(var index = 0; index < gameCounter; index++) {
    if(playerOne === arrayGames[index].playerOne) {
      arrayGames[gameCounter-1].playerOneWins = arrayGames[index].playerOneWins;
      arrayGames[gameCounter-1].playerOneLosses = arrayGames[index].playerOneLosses;
    } else if(playerOne === arrayGames[index].playerTwo) {
      arrayGames[gameCounter-1].playerOneWins = arrayGames[index].playerTwoWins;
      arrayGames[gameCounter-1].playerOneLosses = arrayGames[index].playerTwoLosses;
    }
    if(playerTwo === arrayGames[index].playerOne) {
      arrayGames[gameCounter-1].playerTwoWins = arrayGames[index].playerOneWins;
      arrayGames[gameCounter-1].playerTwoLosses = arrayGames[index].playerOneLosses;
    } else if(playerTwo === arrayGames[index].playerTwo) {
      arrayGames[gameCounter-1].playerTwoWins = arrayGames[index].playerTwoWins;
      arrayGames[gameCounter-1].playerTwoLosses = arrayGames[index].playerTwoLosses;
    }
  }
  return arrayGames[gameCounter-1];
}

function playTheGame(xCord, yCord, turnCounter, gameCounter, arrayGames) {
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
}

$(function() {

  $("form#game-board").submit(function(event) {
    event.preventDefault();
    $(".displayPlayerOne").hide();
    $(".displayPlayerTwo").hide();
    $(".mark").hide();
    var playerOne = $("input#player-one-name").val();
    var playerTwo = $("input#player-two-name").val();
    var turnCounter = 1;
    var xCord;
    var yCord;
    gameCounter++;
    newGame = new Players(playerOne, playerTwo, gameCounter);
    arrayGames.push(newGame);
    arrayGames[gameCounter-1] = checkForPlayer(playerOne, playerTwo, arrayGames, gameCounter);

    unbindStuff();

    playTheGame(xCord, yCord, turnCounter, gameCounter, arrayGames);

    $("input#player-one-name").val("");
    $("input#player-two-name").val("");
  })
});

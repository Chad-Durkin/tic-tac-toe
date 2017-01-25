function createBoard(){
  var gameBoard = new Array(3);
  for (var index = 0; index < 3; index++) {
    gameBoard[index] = new Array(3);
  }
  return gameBoard;
}

function Players(playerOne, playerTwo, gameNumber) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
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
            console.log(turnCounter);
            return turnCounter;
          } else {

            newGame.gameBoard[xCord][yCord] = 1;
            turnCounter++;
            console.log(turnCounter);
            return turnCounter;
          }
        }
      }
    }
  }
}

$(function() {
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
    });
    $("#two").click(function(){
      xCord = 1;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });
    $("#three").click(function(){
      xCord = 2;
      yCord = 0;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });
    $("#four").click(function(){
      xCord = 0;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });
    $("#five").click(function(){
      xCord = 1;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });
    $("#six").click(function(){
      xCord = 2;
      yCord = 1;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });
    $("#seven").click(function(){
      xCord = 0;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });
    $("#eight").click(function(){
      xCord = 1;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });
    $("#nine").click(function(){
      xCord = 2;
      yCord = 2;
      turnCounter = placeMove(xCord, yCord, newGame, turnCounter);
    });



    $("input#player-one-name").val("");
    $("input#player-two-name").val("");
  })
});

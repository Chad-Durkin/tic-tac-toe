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

$(function() {
var gameCounter = 1;
  $("form#game-board").submit(function(event) {
    event.preventDefault();
    var playerOne = $("input#player-one-name").val();
    var playerTwo = $("input#player-two-name").val();

    var newGame = new Players(playerOne, playerTwo, gameCounter);
    gameCounter++;
    console.log(newGame);
    var xCord;
    var yCord;
    $("#one").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#two").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#three").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#four").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#five").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#six").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#seven").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#eight").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });
    $("#nine").click(function(){
      console.log('got here bra');
      xCord = 0;
      yCord = 0;
    });

    $("input#player-one-name").val("");
    $("input#player-two-name").val("");
  })
});

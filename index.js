var level = 0;
var score = 0;
var GamePattern = [];
var userClicked = [];

var GameOver = false;

$(document).on("keypress", function () {
  randomKeyGenerator();
});


  $("button").on("click", function () {
    key = $(this);
    userClicked.push(key.html());

    key.addClass("pressed");
    setTimeout(function () {
        key.removeClass("pressed");
    },300);

    isSameKeyPressed(userClicked.length - 1);

  });

function isSameKeyPressed(level) {
    if(userClicked[level] === GamePattern[level]){
        if(userClicked.length === GamePattern.length){
            setTimeout(function(){
                randomKeyGenerator();
            },500);
        }
    }else{
        $("h1").html("Game Over").addClass("Game-Over");
    }
}

function randomKeyGenerator() {
  userClicked = [];
  var key = $("button").eq(RandomNumberGenerator());
  key.fadeIn(200).fadeOut(200).fadeIn(200);
  GamePattern.push(key.html());
  level++;
  $("h1").html("Level "+ level);
}

function RandomNumberGenerator() {
  var number = Math.floor(Math.random() * 4);
  return number;
}

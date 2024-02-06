var level = 0;
var score = 0;
var GamePattern = [];
var userClicked = [];

var started = false;

$(document).on("keypress", function () {
  if(!started){
  randomKeyGenerator();
  started = true;
  }
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
        var statement = "<h6>Press Any Key to Restart</h6>"
        $("h1").html("Game Over" + statement).addClass("Game-Over");
        restart();
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

function restart(){
  GamePattern = [];
  level = 0;
  started = false;
}
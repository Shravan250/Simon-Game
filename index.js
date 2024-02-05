var iterations = 3;

var keyGenerated = [];

$("button").on("click", function () {
  randomKeyGenerator();
  //   var key = $(this);
  //   console.log(key.html());
  //   key.addClass("pressed");
  //   setTimeout(function () {
  //     key.removeClass("pressed");
  //   }, 300);
  //   keyGenerated.push(key.html());
});

function isSameKeyPressed(key) {}

function randomKeyGenerator() {
  while (iterations != 0) {
      var key = $("button").eq(RandomNumberGenerator());
      key.addClass("pressed");
      setTimeout(function () {
        key.removeClass("pressed");
      }, 300);
      keyGenerated.push(key.html());
      iterations--;
      
  }
}

function RandomNumberGenerator() {
  var number = Math.floor(Math.random() * 4);
  return number;
}

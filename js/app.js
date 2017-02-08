$(document).ready(function() {
  console.log('connected');

  $("#startModal")
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  $(document).keydown(checkKey)


  var canvas = $('#canvas')[0]
  var ctx = canvas.getContext("2d")
  var score = 0
  var bestScore = 0
  var direction = "right"

  var wormy = [];
  var foodPiece

  function createWorm() {
    for (var i = 0; i < 8; i++) {
      wormy.push({
        x: i,
        y: 0
      });
    }
  }
  createWorm()

  function createFood() {
    foodPiece = {
      x: (Math.ceil((Math.random() * (490 + 1)) / 10) * 10),
      y: (Math.ceil((Math.random() * (490 + 1)) / 10) * 10)
    }
  }
  createFood()

  function draw() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 500, 500)

    ctx.font = "30px VT323"
    ctx.fillStyle = '#D5E8D4';
    ctx.fillText("Score: " + score, 10, 490)

    for (var i = 0; i < wormy.length; i++) {
      ctx.fillStyle = "#D5E8D4";
      ctx.fillRect(wormy[i].x * 10, wormy[i].y * 10, 10, 10);
      ctx.strokeStyle = "grey";
      ctx.strokeRect(wormy[i].x * 10, wormy[i].y * 10, 10, 10);
    }

    ctx.fillStyle = "#D5E8D4";
    ctx.fillRect(foodPiece.x, foodPiece.y, 10, 10);
    ctx.strokeStyle = "grey";
    ctx.strokeRect(foodPiece.x, foodPiece.y, 10, 10);

  }
  draw();

  function update() {
    // score +=  2
    var l = wormy.length
    var xVal = wormy[l - 1].x;
    var yVal = wormy[l - 1].y;


    if (direction == "right") {
      xVal++;
    } else if (direction == "left") {
      xVal--;
    } else if (direction == "up") {
      yVal++;
    } else if (direction == "down") {
      yVal--;
    }

    var tail = wormy.shift();
    tail.x = xVal;
    tail.y = yVal
    wormy.push(tail);

    if (xVal === foodPiece.x / 10 && yVal === foodPiece.y / 10) {
      score++
      wormy.unshift({})
      createFood()
    }
    for (var i = 0; i < wormy.length; i++) {
      if (wormy[i].x === 51 || wormy[i].x === -1 || wormy[i].y === 51 || wormy[i].y === -1) {
        personalBest()
        reset()
        direction = "right";
      }
    }

    var x = wormy[0].x
    var y = wormy[0].y
    for (var j = 1; j < wormy.length; j++) {
      if (wormy[j].x === x && wormy[j].y === y) {
        personalBest()
        reset()
        direction = "right";
      }
    }


  }

  function personalBest() {
    if (score > bestScore) {
      bestScore = score
      $('#best').text('Personal Best: ' + bestScore)
    }
  }

  function checkKey(e) {
    var code = e.keyCode;

    if (code == 37) {
      direction = "left"
    } else if (code == 38) {
      direction = "down"
    } else if (code == 39) {
      direction = "right"
    } else if (code == 40) {
      direction = "up"
    }

  }

  function startGame() {
    $('#startModal').css('display', 'none')
    setInterval(function() {
      draw()
      update()
    }, 60)
  }

  $('#start').click(startGame)
  $('#startAgain').click(startGame)
  $('#reset').click(reset)

  function reset() {
    score = 0
    wormy = []
    createWorm()
    createFood()
  }

})

$(document).ready(function() {
  console.log('connected');


  var bgMusic = $('#bg-music')
  bgMusic.muted = false;

  $("#mute").click(function() {
    $('#bg-music').prop('muted', !$('#bg-music').prop('muted'));
  });


  $('#mute').click(function() {
    if (bgMusic.muted === true) {
      $('#mute').css('background-image', 'url(./images/mute.png)')
    } else {
      $('#mute').css('background-image', 'url(./images/unmute.png)');
    }
  })

  function checkKey(e) {
    var code = e.keyCode;

    if (code == 37) {
      direction = "left"
      e.preventDefault()
    } else if (code == 38) {
      direction = "down"
      e.preventDefault()
    } else if (code == 39) {
      direction = "right"
      e.preventDefault()
    } else if (code == 40) {
      direction = "up"
      e.preventDefault()
    } else if (code == 13) {
      if (!started) {
        startGame()
      } else {
        tryAgain()
      }
    } else if (code == 32) {
      if (!modal) {
        playing ? playing = false : playing = true
      }
      e.preventDefault()
    }
  }

  $(document).keydown(checkKey)


  var canvas = $('#canvas')[0]
  var ctx = canvas.getContext("2d")
  var score = 0
  var bestScore = 0
  var direction = "right"
  var playing = true
  var started
  var modal = true

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
      x: (Math.ceil((Math.random() * (480 + 1)) / 10) * 10),
      y: (Math.ceil((Math.random() * (480 + 1)) / 10) * 10)
    }
  }
  createFood()

  function draw() {
    ctx.fillStyle = "ivory"
    ctx.fillRect(0, 0, 500, 500)

    ctx.font = "20px Slackey"
    ctx.fillStyle = '#9fdf9f';
    ctx.fillText("Score: " + score, 10, 490)

    for (var i = 0; i < wormy.length; i++) {
      ctx.fillStyle = "##9fdf9f";
      ctx.fillRect(wormy[i].x * 10, wormy[i].y * 10, 10, 10);
    }

    ctx.fillStyle = "#9fdf9f";
    ctx.fillRect(foodPiece.x, foodPiece.y, 10, 10);

  }
  draw();

  function update() {
    checkScore()
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
      $('#eatSound')[0].play()
      wormy.unshift({})
      createFood()
    }
    for (var i = 0; i < wormy.length; i++) {
      if (wormy[i].x === 50 || wormy[i].x === -1 || wormy[i].y === 50 || wormy[i].y === -1) {
        setPersonalBest()
        modal = true
        $('#endModal').css('display', 'block')

      }
    }

    var x = wormy[0].x
    var y = wormy[0].y
    for (var j = 1; j < wormy.length; j++) {
      if (wormy[j].x === x && wormy[j].y === y) {
        setPersonalBest()
        modal = true
        $('#endModal').css('display', 'block')

      }
    }

  }

  function checkScore() {
    if (score > bestScore && bestScore > 0) {
      $('#tense-music')[0].play()
      $('#bg-music')[0].pause()
      $('#bg-music')[0].currentTime = 0
      $('#best').addClass('blink')
    }
  }

  function setPersonalBest() {
    $('#tense-music')[0].pause()
    $('#tense-music')[0].currentTime = 0
    $('#bg-music')[0].play()
    $('#currentScoreText').text('Your Score: ' + score)
    if (score > bestScore) {
      bestScore = score
      $('#best').text('Personal Best: ' + bestScore)
      $('#bestScoreText').text('Personal Best: ' + bestScore)
      $('#bestScoreImg').css('visibility', 'visible')
    }
  }


  $('#start').click(startGame)

  function startGame() {
    started = true
    $('#startModal').css('display', 'none')
    modal = false
    setInterval(function() {
      draw()
      if (playing) {
        update()
      }
    }, 60)
  }

  function tryAgain() {
    $('#startModal').css('display', 'none')
    $('#endModal').css('display', 'none')
    $('#bestScoreImg').css('visibility', 'hidden')
    reset()
    modal = false
    direction = 'right'
  }

  $('#startAgain').click(tryAgain)


  function reset() {
    $('#best').removeClass('blink')
    score = 0
    wormy = []
    createWorm()
    createFood()
  }

})

$( document ).ready(function(){
  console.log('connected');

  $(document).keydown(checkKey)

  var canvas = $('#canvas')[0]
  var ctx = canvas.getContext("2d")
  var score = 0
  var direction = "right"

  var wormy = [];
  var foodPiece



  function createFood() {
    foodPiece = {x: (Math.floor(Math.random() * 500)), y: (Math.floor(Math.random() * 500))}
    console.log(foodPiece.x);
    console.log(foodPiece.y);
  }

  createFood()

  function createWorm() {
    for(var i = 0; i < 5; i++) {
      wormy.push({x: i, y:0});
    }
  }
  createWorm()

  function draw() {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,500,500)

    ctx.font = "30px VT323"
    ctx.fillStyle = '#D5E8D4';
    ctx.fillText("Score: " + score, 10, 490)

    for(var i = 0; i < wormy.length; i++) {
      ctx.fillStyle = "#D5E8D4";
      ctx.fillRect(wormy[i].x*10, wormy[i].y*10, 10, 10);
      ctx.strokeStyle = "grey";
      ctx.strokeRect(wormy[i].x*10, wormy[i].y*10, 10, 10);
    }

    ctx.fillStyle = "#D5E8D4";
    ctx.fillRect(foodPiece.x, foodPiece.y, 10, 10);
    ctx.strokeStyle = "grey";
    ctx.strokeRect(foodPiece.x, foodPiece.y, 10, 10);

  }
  draw();

  function update(){
    // score +=  2
    var l = wormy.length
    var nx = wormy[l-1].x;
    var ny = wormy[l-1].y;


    if (direction == "right") {
        nx++;
    } else if (direction == "left") {
        nx--;
    } else if (direction == "up") {
        ny++;
    } else if (direction == "down") {
        ny--;
    }

    var tail = wormy.shift();
    tail.x = nx;
    tail.y = ny
    wormy.push(tail);

  }

  function checkKey(e) {
    var code = e.keyCode;

    if (code == 37) {
      direction = "left"
    }
    if (code == 38) {
      direction = "down"
    }
    if (code == 39) {
      direction = "right"
    }
    if (code == 40) {
      direction = "up"
    }
  }

  setInterval(function(){
    draw()
    update()
  }, 70)




})

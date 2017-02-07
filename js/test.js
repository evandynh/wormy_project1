$(document).ready(function(){
	//Canvas stuff
	var canvas = $('canvas')[0];
	var ctx = canvas.getContext("2d");
  var score = 0


  window.addEventListener('keydown', check, true)


  function check(e) {
    var code = e.keyCode;
    if (code == 37) {
      var nx = snake_array[0].x;
  		var ny = snake_array[0].y;
  		nx --;
  		var tail = snake_array.pop();
  		tail.x = nx;
      tail.y = ny
  		snake_array.unshift(tail);
    }
    if (code == 38) {
      var nx = snake_array[0].x;
  		var ny = snake_array[0].y;
  		ny--;
  		var tail = snake_array.pop();
  		tail.x = nx;
  		tail.y = ny;
  		snake_array.unshift(tail);
    }
    if (code == 39) {
      var nx = snake_array[0].x;
      var ny = snake_array[0].y;
      nx ++;
      var tail = snake_array.pop();
      tail.x = nx;
      tail.y = ny
      snake_array.unshift(tail);
    }
    if (code == 40) {
      var nx = snake_array[0].x;
      var ny = snake_array[0].y;
      ny++;
      var tail = snake_array.pop();
      tail.x = nx;
      tail.y = ny;
      snake_array.unshift(tail);
    }
  }




	var snake_array = [];

	function create_snake() {
		for(var i = 4; i >= 0; i--) {
			snake_array.push({x: i, y:10});
		}
	}
  create_snake()

	function draw() {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,500,500)

    ctx.font = "30px VT323"
    ctx.fillStyle = '#D5E8D4';
    ctx.fillText("Score: " + score, 10, 490)

		for(var i = 0; i < snake_array.length; i++) {
			ctx.fillStyle = "#D5E8D4";
			ctx.fillRect(snake_array[i].x*10, snake_array[i].y*10, 10, 10);
			ctx.strokeStyle = "grey";
			ctx.strokeRect(snake_array[i].x*10, snake_array[i].y*10, 10, 10);
		}
	}
	draw();

  function update(){
    // score +=  2


		// turn right
    // var nx = snake_array[0].x;
		// var ny = snake_array[0].y;
		// nx ++;
		// var tail = snake_array.pop();
		// tail.x = nx;
    // tail.y = ny
		// snake_array.unshift(tail);

    //turn left
    // var nx = snake_array[0].x;
		// var ny = snake_array[0].y;
		// nx --;
		// var tail = snake_array.pop();
		// tail.x = nx;
    // tail.y = ny
		// snake_array.unshift(tail);
    //
    // // turn down
    // var nx = snake_array[0].x;
		// var ny = snake_array[0].y;
		// ny++;
		// var tail = snake_array.pop();
		// tail.x = nx;
		// tail.y = ny;
		// snake_array.unshift(tail);
    //
    // //Turn up
    // var nx = snake_array[0].x;
		// var ny = snake_array[0].y;
		// ny--;
		// var tail = snake_array.pop();
		// tail.x = nx;
		// tail.y = ny;
		// snake_array.unshift(tail);

  }


  setInterval(function(){
    draw()
    update()

  }, 30)














})

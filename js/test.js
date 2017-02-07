$(document).ready(function(){
	//Canvas stuff
	var canvas = $('canvas')[0];
	var ctx = canvas.getContext("2d");
  var score = 0
	var direction = 'right'

	$(document).keydown(check)




  function check(e) {
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

    var nx = snake_array[0].x;
		var ny = snake_array[0].y;

		if (direction == "right") {
				nx++;
		} else if (direction == "left") {
				nx--;
		} else if (direction == "up") {
				ny++;
		} else if (direction == "down") {
				ny--;
		}

		var tail = snake_array.pop();
		tail.x = nx;
    tail.y = ny
		snake_array.unshift(tail);

  }


  setInterval(function(){
    draw()
    update()

  }, 40)














})

$( document ).ready(function(){
console.log('connected');

var canvas = $('#canvas')[0]
var ctx = canvas.getContext("2d")
var score = 0

var snake_array = [];

function create_snake() {
  for(var i = 0; i < 5; i++) {
    snake_array.push({x: i, y:0});
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
  var l = snake_array.length

  // turn right
  // var nx = snake_array[l-1].x;
  // var ny = snake_array[l-1].y;
  // nx ++;
  // var tail = snake_array.shift();
  // tail.x = nx;
  // snake_array.push(tail);

  // //turn left
  // var nx = snake_array[l-1].x;
  // var ny = snake_array[l-1].y;
  // nx --;
  // var tail = snake_array.shift();
  // tail.x = nx;
  // snake_array.push(tail);
  //
  // // turn down
  // var nx = snake_array[l-1].x;
  // var ny = snake_array[l-1].y;
  // ny++;
  // var tail = snake_array.shift();
  // tail.x = nx;
  // tail.y = ny;
  // snake_array.push(tail);
  //
  // //Turn up
  // var nx = snake_array[l-1].x;
  // var ny = snake_array[l-1].y;
  // ny--;
  // var tail = snake_array.shift();
  // tail.x = nx;
  // tail.y = ny;
  // snake_array.push(tail);

}

setInterval(function(){
  draw()
  update()
}, 30)




})

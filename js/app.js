$( document ).ready(function(){

console.log('connected');

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d")


//
function Worm(x,y) {
  this.x = x
  this.y = y
  ctx.fillStyle = '#D5E8D4'
  ctx.fillRect(this.x, this.y, 10, 10)
  ctx.strokeStyle = "grey"
  ctx.strokeRect(this.x, this.y, 10, 10)
}

var wormy = []

function createWorm(){
  for (var i = 0; i < 5; i++) {
    wormy.push(new Worm(10 * i, 0))
  }
}



function draw(){
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  createWorm()
}

function update(){
  console.log(wormy[0])
  // var tail = wormy.shift()
  // wormy.push(tail)
}

function startGame(){
  draw()
  update()
}

startGame()




})

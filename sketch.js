
var ball = {

Position_X : 200, 
Position_Y : 200, 
Radius : 35,
Velocity_X : 0,
Colour : ["orange","pink","blue"]  

}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.Colour[2]);
  circle(ball.Position_X, ball.Position_Y, ball.Radius);
  ball.Velocity_X = -2 
  ball.Position_X = ball.Position_X + ball.Velocity_X
}
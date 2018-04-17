//what is a cloud
var clouds = {};
var n = 0; 

//where are the clouds
var x, y;
var c;
x = 25;
y = 70;

function setup() { 
  createCanvas(600, 400);
  c = color(245,255,250);
  frameRate(60);
} 

function draw() { 
  background(135,206,235);
  //grass bottom
  	fill(60,179,113);
  	noStroke(60,179,113);
  	rect(0, 350, 600, 400);
  if(x > 400)
        {
          for(var i = 0; i < 100; i++)
          { fill(47, 79, 79);
           ellipse(random(380, 600), random(70, 350), 5, 5); 
          }
          }
  //top cloud
 	cloud(x+60, y, 2, c);
  //middle cloud
  	cloud(x-20, y+60, 2.25, c);
  //bottom cloud
  	cloud(x+50, y+120, 2, c);
  //cloud color
  	c = color(245 - n,255 - n,250- n);
  	n = n + 0.25;
  		// n color value (255-192) / 600 = .105
  		// not grey enough for me to see
  //cloud position -> color
  	x++; 
  	if(x > 570)
  	{
  		x = 0;
    		n = 0;
        }
  //jiggling randomly on the veritcal axis
  	y = y + random(-1, 1);   
  
  for(var i = 0; i < 600; i = i + 5){
    	grass(i, 350);
    }
}
function cloud(x, y, size, c) {
	fill(c);
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
	arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}


function grass(x, y) {
  	fill(60,179,113);	
  	triangle(x, y, x + random(0,4.5), y - random(20,50), x + 5, y)
}
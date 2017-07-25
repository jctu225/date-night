var hearts=[];
function setup() {
 //create the canvas and the background
 createCanvas(window.innerWidth, window.innerHeight);
 background(255,255,25);
 fill(70,90,250,255);

 //I say how many hearts to spawn
 summonHearts();
 for (var i=0; i<9; i++) {
  hearts.push(new heartsFly());
  console.log(hearts[i]);
	}
}

//I am a function that runs like a loop, and I keep the background stable and call the hearts
function draw() {
background(135,206,250);
summonHearts();
}

//I say what a heart looks like
function heart(xheart,yheart){
 stroke(255,200,170,0)
 fill(255,100,170,250);
 this.xheart = xheart;
 this.yheart = yheart;
 triangle(xheart+71, yheart+(-5), xheart+(-71), yheart+(-5), xheart, yheart+100);
 translate(xheart, yheart);
 for (var z=0;z<100;z++) {
  ellipse(30, -14, 81);
  ellipse(-30, -14, 81);
	}  
	}

//I tell the hearts how to move, and where to start.
function heartsFly(){
 this.xaxis = random(window.innerWidth);
 this.yaxis = random(window.innerHeight);
 this.diameter = (0);
 this.speed = 1;
}	


function move(objectiveHeart) {
  objectiveHeart.yaxis -=1;
  heart(objectiveHeart.xaxis, objectiveHeart.yaxis, objectiveHeart.diameter, objectiveHeart.diameter);
}
//I determine the display on which the hearts function
this.display = function(){
 heart(this.xaxis, this.yaxis, this.diameter, this.diameter);
  }

//I call the move function on the hearts
function summonHearts(){
 for (var h=0;h<hearts.length;h++){
  move(hearts[h]);
  display(hearts[h]);
  }
}
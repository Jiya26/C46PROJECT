var car,boy,carImg,boyImg,roadImg,carOpenImg;
var red,yellow,green,signal,pole,poleImg;
var timerYellow, timerGreen;
var zebraCrossingImg,zebraCrossing,timerZebraCrossing;
var fineImg,fine;

var isGreenLightON = true;
var isZebraCrossingOn = true;

function preload()
{
	carImg=loadImage("images/audi car door close.png");
	 carOpenImg = loadImage("images/audi car.png");
	boyImg = loadImage("images/boy image.png");
	roadImg = loadImage("images/road img.png");
	red=loadImage("images/traffic light/red light.png");
	yellow=loadImage("images/traffic light/yellow light.png");
	 green=loadImage("images/traffic light/green light.png");
	zebraCrossingImg=loadImage("images/zebra crossing image .jpg");
	fineImg = loadImage("images/police taking fine.png");
	poleImg=loadImage("images/pole.png");
}

function setup() {
	createCanvas(1500, 700);
	car=createSprite(200,350,50,50);
	boy = createSprite(500,350,50,50);
	fine = createSprite(width/2-400,car.y+100,20,20);
	pole = createSprite(width/2+450,200,50,50);
	zebraCrossing = createSprite(200,500,70,70);
	car.addImage("carcloseImg",carImg);
	boy.addImage("boystandImg",boyImg);
	car.addImage("caropenImg",carOpenImg);	
	fine.addImage("fineimg",fineImg);
	pole.addImage("poleimg",poleImg);
	zebraCrossing.addImage("zebracrossing img",zebraCrossingImg);

	fine.visible = false;
	pole.visible = false;

	car.scale=0.25;
	boy.scale=0.25;
	fine.scale=0.25;
	pole.scale=1.5;

	signal = createSprite(width/2 + 425, 200, 50, 50);
	signal.addImage("red", red);
	signal.addImage("yellow", yellow);
	signal.addImage("green", green);
	signal.scale = 0.3;
	signal.visible = false;
}


function draw() {
  background("LightBlue");

  image(roadImg,width/2-400,-height*99,800,height*100);

   if(keyDown(LEFT_ARROW)){
	   if(checkSignal()) {
		car.x = car.x -10 
	   }	   
	}
else if(keyDown(RIGHT_ARROW)){
		if(checkSignal()) {
			car.x = car.x+10
		}
}
else if(keyDown(UP_ARROW)){
	if(checkSignal()) {
	car.y = car.y-10
	}
}
else if(keyDown(DOWN_ARROW)){
	if(checkSignal()) {	
	car.y = car.y+10
	}
}

if(keyDown("w")){
	boy.y = boy.y-10
}
else if(keyDown("s")){
	boy.y = boy.y+10
}
else if(keyDown("a")){
	boy.x = boy.x-10
}
else if(keyDown("d")){
	boy.x = boy.x+10
}
camera.position.x = width/2;
camera.position.y = car.y;

trafficLight();
zebracrossing();

  drawSprites();
}
function trafficLight(){
	if(frameCount%500===0 && isGreenLightON === true){
		pole.y= car.y+50;
		signal.y = car.y -15;
		signal.visible = true;
		pole.visible = true;
		signal.changeImage("red");
		isGreenLightON = false; 
		timerYellow = 100;
	}
	if(timerYellow !== undefined) {
		timerYellow--;
		if(timerYellow === 0) {
			console.log("change image")
			signal.changeImage("yellow");
			timerGreen = 100;
		}
	}
	
	if(timerGreen !== undefined) {
		timerGreen--;
		if(timerGreen===0){
			signal.changeImage("green");
			isGreenLightON = true;
		}

	}
}

function checkSignal() {
	if(isGreenLightON) {
		fine.visible = false;
		return true;
	} else {
		fine.visible = true;
		car.setVelocity(0, 0);
		fine.y = car.y + 20;
		return false;
	}
}
	
function zebracrossing(){
	if(frameCount%500===0){
		timerZebraCrossing = 1000
	}else{
		console.log(isZebraCrossingOn)
		isZebraCrossingOn=false;
	}
}

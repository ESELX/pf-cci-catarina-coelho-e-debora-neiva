

var heads;
var coinColor = 40;

function setup(){

  // createCanvas(windowWidth,windowHeight);
  createCanvas(windowWidth ,windowHeight);
  noStroke();
}
function draw() {
background(186, 239, 240);

if (heads == true) {
  //smiley 1
  fill(249, 238, 8)
circle(270,height/2,370)
fill(0)
  circle(200,height/2-20,10)
  circle(340,height/2-20,10)
arc(270, height/2+20, 190, 80, 0, radians(180), PIE);

//smiley 2
fill(249, 238, 8)
circle(1070,height/2,370)
fill(0)
circle(1000,height/2-20,10)
circle(1140,height/2-20,10)
arc(1070, height/2+20, 190, 80, 0, radians(180), PIE);

      textSize(30);
fill(0);
text('CARA!', width/2-50, height/2+120);
  coinColor = color(40);

} else if (heads == false) {
  //crown1
  fill(154, 249, 8)
circle(270,height/2,370)
  fill(0)
triangle(160,height/2+40, 290, height/2+40, 146, height/2-70);
  triangle(250,height/2+40, 380, height/2+40, 376, height/2-70);
  triangle(200,height/2+40, 340, height/2+40, 260, height/2-70);
    rect(160, height/2+50, 220, 18);
  circle(260,height/2-90,20)
  circle(376,height/2-90,20)
  circle(146,height/2-90,20)

    //crown2
  fill(154, 249, 8)
circle(1070,height/2,370)
  fill(0)
triangle(960,height/2+40, 1090, height/2+40, 946, height/2-70);
  triangle(1180,height/2+40, 1040, height/2+40, 1180, height/2-70);
  triangle(1000,height/2+40, 1130, height/2+40, 1060, height/2-70);
    rect(960, height/2+50, 220, 18);
  circle(946,height/2-90,20)
  circle(1180,height/2-90,20)
  circle(1060,height/2-90,20)

      textSize(30);
fill(0);
text('COROA!', width/2-50, height/2+120);
  coinColor = color(40);
}

fill(coinColor);
ellipse(width / 2, height / 2, 180, 180);

  textSize(60);
fill(0);
text('«FLIP A COIN»', width/12, height/7);
    textSize(20);
fill(0);
text(' Pressiona algures no ecrã para cara ou coroa! (É um sorteio completamente aleatório)  ', width/10, height/6+10);
}

function mousePressed() {
coinFlip();
}

function coinFlip() {

var flip = random(100);
if (flip < 50) {
  heads = true;
} else {
  heads = false;
}

return coinFlip;
}

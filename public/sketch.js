
//Defining "global" variables
let position;
position = 0;
let prevPosition = 0;
let A = [];
var tree1;
var tree2;
var tree4;
var palm1;
var palm2;
var clouds;
var cloud1;
var cloud2;
var cloud3;
var ran;
var tree3;
var tree5;
var boolDoRefresh;
let myFont; 
const Y_AXIS = 1;
const X_AXIS = 2;
let k = 1;
let circle_color;
let trans=0;
let tree;
let target = 0;
let isApressed = false; 
let diff = 0;
let b1, b2, c1, c2, b;
let foliage;
let foliage1;
let cnv;
let num = 0;
let rand = [];
let rand2 = [];
let rand3 = [];
let tree_one = [];
let tree_two = [];
let tree_four = [];
let tree_five = [];
let palm_one = [];
let palm_two = [];


//Soli events:
window.onSoliEvent = function(event) {
  // this function will run any time a gesture is detected'

  if (event.type == "tap") {
     
     b = color(150, 200, 230);
      //TWITTER & IMGUR APIS TO POST TO TWITTER HAVE BEEN REMOVED. 
      
      //note: save command does not function on on soli
      //save(cnv, '.../Downloads/myCanvas.png');
      //saveFrame();  
    
    
   
  }else if (event.type == "swipe") {
    
    //(south, 3) and Up (north, 7) 
    if(event.data.direction == '1') {
      
    if (position <= -1600) {
      position = -1600;
    } else {
       
      position = position - 200;
      
      diff = -200;
      
      
    }
      }
    else if (event.data.direction == '5') {
       if (position >= 1600) {
      position = 1600;
    } else {
      position = position +200;

        diff =200;
      
          
    }
      
       
      } 
    else if (event.data.direction == '3'){
      //console.log("down")
      reset();
    }else if (event.data.direction == '7'){
       num++;
      circle_color = (color(A[num]* 255, 50, 255));
    
    //console.log("tap");
     
       
    }
    
  }
  
  
  
};


//Preloading image and font assets 
function preload() {
 
  myFont = loadFont('https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Ffont.ttf?v=1602081916684');

  tree1 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Ftree1.png?v=1601830695726"
  );
  tree1.resize(326 / 2, 465 / 2);


  tree3 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Ftree3-01.png?v=1601849789606"
  );
  tree3.resize(326 * 0.8, 465 * 0.8);
  palm1 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Fpalm1-01.png?v=1601931665848"
  );
  palm1.resize(326 * 0.8, 465 * 0.8);
  palm2 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Fpalm2-01.png?v=1601931668698"
  );
  palm2.resize(326 * 0.8, 465 * 0.8);
  
  tree4 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Ftree6-01.png?v=1602039160990"
  );
  tree4.resize(326 * 0.8, 465 * 0.8);
  tree5 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Ftree5-01.png?v=1602039159999"
  );
  tree5.resize(326 * 0.8, 465 * 0.8);
  
    cloud1 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Fcloud1.png?v=1602373216705"
);
 
    cloud2 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Fcloud2.png?v=1602373218491"
      );
    cloud3 = loadImage(
    "https://cdn.glitch.com/048898ec-6821-4926-88b5-9bdcf869120c%2Fcloud3.png?v=1602374214511"
);
  
}



//function for reseting/refreshing landscape 
function reset(){
  colorMode(HSB, 255);
  circle_color = color(random(0,1)* 255, 50, 255);
  for (let i = 0; i < 200; i++) {
    tree_one.push(new tree_1());
    tree_two.push(new tree_2());
    palm_one.push(new palm_1());
    palm_two.push(new palm_2());
    tree_four.push(new tree_4());
    tree_five.push(new tree_5());
    A[i] = random(0, 1);
    
    rand[i] = random(0, 1);
    rand2[i] = floor(random(0, A.length));
    rand3[i] = 30 * floor(random(-75, 75));
    
    tree_one[i].x = rand3[i];
    tree_one[i].random = rand[i];
    tree_one[i].random3 = rand2[i];
    tree_two[i].x = rand3[i];
    tree_two[i].random = rand[i];
    tree_two[i].random3 = rand2[i];
    tree_four[i].x = rand3[i];
    tree_four[i].random = rand[i];
    tree_four[i].random3 = rand2[i];
    tree_five[i].x = rand3[i];
    tree_five[i].random = rand[i];
    tree_five[i].random3 = rand2[i];
    palm_one[i].x = rand3[i];
    palm_one[i].random = rand[i];
    palm_one[i].random3 = rand2[i];
    palm_two[i].x = rand3[i];
    palm_two[i].random = rand[i];
    palm_two[i].random3 = rand2[i];
  }
  
  foliage = color(200 +30*A[49], 85, 100);
  foliage1= color(200 +30*A[49], 85, 110);
  if(random(0,1)>0.66){
    clouds = cloud1;

  }else if (random(0,1)>0.33){
    clouds =  cloud2;
  }else{
    clouds = cloud3;
  }
  clouds.resize(width, 19/9*width);
}
function setup() {
  b = color(210);
  cnv = createCanvas(window.innerWidth, window.innerHeight); //create a canvas for the game to display on.
  reset();
}



function draw() {
 
  layer1();
  createMountain();

  
  
  //Creating foliage movement
  push();
      if (((trans >= 0)&&(trans<=diff -1))||((trans <= 0)&&(trans>=diff +1))){
          trans = lerp(trans, diff,.5);
          translate(trans, 0);
      } 
      else if (((trans > 0)&&(trans > diff -1))||((trans < 0)&&(trans < diff +1))){
            for (let j = 0; j < 15; j++) {
              //console.log(diff);
        tree_one[j].update();
        if (A[j] > 0.5) {

          tree_two[15 + j].update();
        }
        if (A[floor(j/2)] > 0.5) {

         palm_one[60 + j].update();
        }
        if (A[floor(j*2)] > 0.35) {
         palm_two[25 + j].update();
        }if (A[floor(j%13)] > 0.5) {
         tree_four[50 + j].update();
        }if (A[floor(j*1.5)] > 0.5) {
         tree_five[65+ j].update();
        }

      }
            diff = diff + diff/2;
            for (let j = 25; j < 35; j++) {
              //console.log(diff);
        tree_one[j].update();
        if (A[j] > 0.5) {

          tree_two[15 + j].update();
        }
        if (A[floor(j/2)] > 0.5) {

         palm_one[60 + j].update();
        }
        if (A[floor(j*2)] > 0.35) {
         palm_two[25 + j].update();
        }if (A[floor(j%13)] > 0.5) {
         tree_four[50 + j].update();
        }if (A[floor(j*1.5)] > 0.5) {
         tree_five[65+ j].update();
        }

      }
            //eyes.update();
        diff = 0;
        trans = 0;

          }
      tint(foliage);
      for (let j = 0; j < 15; j++) {

        tree_one[j].display();
        if (A[j] > 0.5) {

          tree_two[15 + j].display();
        }
        if (A[floor(j/2)] > 0.5) {

         palm_one[60 + j].display();
        }
        if (A[floor(j*2)] > 0.35) {
         palm_two[25 + j].display();
        }if (A[floor(j%13)] > 0.5) {
         tree_four[50 + j].display();
        }if (A[floor(j*1.5)] > 0.5) {
         tree_five[65+ j].display();
        }

}
      push();

          translate(trans/2, 40);
          tint(foliage1);
          for (let j = 25; j < 35; j++) {

            tree_one[j].display();
            if (A[j] > 0.5) {

              tree_two[15 + j].display();
            }
            if (A[floor(j/2)] > 0.5) {

             palm_one[60 + j].display();
            }
            if (A[floor(j*2)] > 0.35) {
             palm_two[25 + j].display();
            }if (A[floor(j%13)] > 0.5) {
             tree_four[50 + j].display();
            }if (A[floor(j*1.5)] > 0.5) {
             tree_five[65+ j].display();
            }

          }




      pop();


    pop();
  
  
  
  front();
  b = color(210);
 
  }



//functions to create landscapes/layers
function createMountain() {
  beginShape();

  noStroke();
  fill(255)
  fill(foliage); // mountain
  var t12 = 0;
  var y12 = 0;
  var k12 = 0;
  var array2 = [];
  for (var x12 = 0; x12 < width + 1; x12++) {
    t12 = x12 * 0.02;
    y12 = noise(t12) * height;
    k12 = map(y12, 0, height, 465, 605);
    array2[x12] = vertex(x12, k12);
  }
  array2[width + 1] = vertex(width + 1, height);
  array2[width + 2] = vertex(0, height);

  endShape(CLOSE);
}
class palm_1 {

  constructor() {
    //this.x;
    this.y = 445;
    this.random;
    this.random3;
    this.x = random(0,1);
  }

  update(){
    this.x += diff;
  }
  move(){
    trans = 0;
  }

  display() {
    if((this.x >= -320)&& (this.x <= width + 320)){
      imageMode(CORNERS);
      push();
      translate(this.x, this.y);
      push();

      if (A[this.random3] > 0.66) {
        scale(0.75);
      } else if (A[this.random3] > 0.33) {
        scale(0.5);
      } else {
      }
      translate((-326 * 0.8) / 2, (-465 * 0.8) / 2);
      //tint(235, 85, 100);
      image(palm1, 0, 0);
      pop();
      pop();
    }
  }
}
class palm_2 {
  constructor() {
    //this.x;
    this.y = 485 +50*random(0,1);
    this.random;
    this.random3;
    this.x;
  }

  update(){
    this.x += diff;
  }
  move(){
    trans = 0;
  }

  display() {
    if((this.x >= -350 )&& (this.x <= width + 350)){
      imageMode(CORNERS);
      push();
      translate(this.x, this.y);
      push();

      if (A[this.random3] > 0.66) {
        scale(0.75);
      } else if (A[this.random3] > 0.33) {
        scale(0.5);
      } else {
      }
      translate((-326 * 0.8) / 2, (-465 * 0.8) / 2);
      //tint(235, 85, 100);
      image(palm2, 0, 0);
      pop();
      pop();
    }
  }
}
class tree_1 {
  constructor() {
    //this.x;
    this.y = 605;
    this.random;
    this.random3;
    this.x;
  }

  update(){
    this.x += diff;
  }
  move(){
    trans = 0;
  }
  display() {
   if((this.x >=-350 )&& (this.x <= width + 350)){
      imageMode(CORNERS);
      push();
      translate(this.x, this.y);
      push();

      if (A[this.random3] > 0.66) {
        scale(0.5);
      } else if (A[this.random3] > 0.33) {
        scale(0.25);
      } else {
        scale(0.75);
      }
      translate((-326 * 0.8) , (-465 * 0.8) );
      //tint(235, 85, 100);
      image(tree3, 0, 0);
      pop();
      pop();
    }
  }
}
class tree_2 {
  constructor() {
    //this.x;
    this.y = 435 ;
    this.random;
    this.random3;
    this.x;
    
  }

  update(){
    this.x += diff;
  }
  move(){
    trans = 0;
  }
  display() {
if((this.x >= -350 )&& (this.x <= width + 350)){
    imageMode(CORNERS);
    push();
    translate(this.x, this.y);
    push();

    if (A[this.random3] > 0.66) {
      scale(0.75);
    } else if (A[this.random3] > 0.33) {
      scale(0.5);
    } else {
    }
    translate((-326 * 0.5) / 2, (-465 * 0.5) / 2);
    //tint(235, 85, 100);
    image(tree1, 0, 0);
    pop();
    pop();
     }
  }
}
class tree_4{
  constructor() {
    //this.x;
    this.y = 605;
    this.random;
    this.random3;
    this.x;
  }

 update(){
    this.x += diff;
  }
  move(){
    trans = 0;
  }

  display() {
    if((this.x >= -350 )&& (this.x <= width + 350)){
      imageMode(CORNERS);
      push();
      translate(this.x, this.y);
      push();

      if (A[this.random3] > 0.75) {
        scale(0.5);
      } else if (A[this.random3] > 0.375) {
        scale(0.25);
      } else {
        scale(0.75);
      }
      translate((-326 * 0.8) , (-465 * 0.8) );
      //tint(235, 85, 100);
      image(tree4, 0, 0);
      pop();
      pop();
    }
  }
}
class tree_5 {
  constructor() {
    //this.x;
    this.y = 570 + 50*random(0,1);
    this.random;
    this.random3;
    this.x;
  }

  update(){
    this.x += diff;
  }
  move(){
    trans = 0;
  }

  display() {
    if((this.x >= -350 )&& (this.x <= width + 350)){
      imageMode(CORNERS);
      push();
      translate(this.x, this.y);
      push();

      if (A[this.random3] > 0.66) {
        scale(0.5);
      } else if (A[this.random3] > 0.33) {
        
      } else {
        scale(0.75);
      }
      translate((-326 * 0.8) , (-465 * 0.8) );
      //tint(235, 85, 100);
      image(tree5, 0, 0);
      pop();
      pop();
    }
  }
}
function layer1() {
  
  let c1 = color(A[0] * 50 + 100, 50, 200);
  let c2 = color(A[0] * 50 + 150, 100, 200);
  background(c1);
  push();
    tint(c2);
    image(clouds, 0, 0);
  pop();
  //etGradient(0, 0, width, height, c1, c2, Y_AXIS);
  
  fill(circle_color);
  noStroke();

  
  let w = map(A[0] * width, 0, width, width / 5, (4 * width) / 5);
  let h = map(A[0] * height, 0, height, height / 5, (3 * height) / 5) + millis()/1000;
  circle(w, h, 100);
  
  //fill("PINK")
  //blendMode(MULTIPLY);
  //ellipse(w,h, 100, k);
  //blendMode(BLEND);
  fill(color(circle_color));
  

  /*for(let i = 0; i < 100; i++){
    let k = rand[i]*width;
    let n = A[i]*height;
    ellipse(k, n, A[i]*4);
  }*/
  
} 
function front(){
  fill(color("black"));
  //rect(0,0,width,10);
  //rect(0, 0,10,height);
  
  rect(0, height-150,width,150);
  fill(255);
  
  ellipse(width/2,height-150/1.5, 70);
  fill(b);
  ellipse(width/2,height-150/1.5, 60);
  
  fill(255);
  ellipse(4*width/5,height-150/1.5, 50);
  fill(210);
  ellipse(4*width/5,height-150/1.5, 45);
  
  fill(255);
  ellipse(width/5,height-150/1.5, 50);
  fill(0);
  ellipse(width/5,height-150/1.5, 45);
  fill(255);
  rect(width/2-70/2, height-150/3,70,25,25);
  
  stroke(255)
  strokeWeight(3);
  noFill();
  push();
  translate(width/5,height-150/1.5);
  ellipse(0,0, 25);
  stroke(0);
  strokeWeight(8);
   line(-25/2, 0, 25/2, 0);
  stroke(255);
  strokeWeight(3);
  line(-25/2, -4, -25/3, -4);
  line(-25/2, -4, -25/2, -4 - 25/5);
  line(25/2, 4, 25/3, 4);
  line(25/2, 4, 25/2, 4 + 25/5);
 
  pop();
 
  fill(0);
  
  strokeWeight(0);
  stroke(0);
  textSize(13);
  text("Camera",width/2-70/3, height-150/4.4);
  fill(255);
  text("Portrait",1.5*width/5-70/3, height-150/4.4);
  text("Video",3.6*width/5-70/3, height-150/4.4);
  text("More",4.5*width/5-70/3, height-150/4.4);
  text("Night Sight",0.3*width/5-70/3, height-150/4.4);

  //rect(width-10, 0,20,height);
  
  
}



//imported helpers
function keyTyped() {
  if ((key === "a")) {
    
  
     if (position <= -1600) {
      position = -1600;
    } else {
       
      position = position - 200;
      
      diff = -200;
     
    }
    
    
  
    }
  if (key === "d") {
    
    
    if (position >= 1600) {
      position = 1600;
    } else {
      position = position +200;

        diff =200;
    }
      
    }
  if (key === "w") {
    
    
  //TWITTER BOT COMMANDS, temporarily disabled
      //let imgurl = httpPost( "https://drive.google.com/drive/folders/1EwvHxC-GSrnsVo2UtJbxay3uZCAMeuz7",'png', cnv );
      //save(cnv, 'myCanvas.png');
      /*let data = {value1:'NOTHING TO SEE HERE(DELETED)'}
      let q = Object.keys(data).map(k=>(k+"="+encodeURIComponent(data[k]))).join("&");
      httpGet("/trigger?"+q,'json',false,function(response){
        alert(response.stdout);
      })*/
  
    
    
    b = color(150, 200, 230);
    save(cnv, "myLandscape.png")
   
      
    
  }if (key === "s") {
    
    reset();
   
      
    
  }if (key === " ") {
    
    num++;
    circle_color = (color(A[num]* 255, 50, 255));
   
      
    
  }}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

if (!navigator.userAgent.includes("Soli Sandbox")) {
        alert(
          "Hi! This is an application that works best while using Soli, using this in another device might not be as fun ( but you can use 'a' 'd' 'w' 's' and space to move through the landscape!). Display works best in high resolution 19:9 aspect ratio. "
        );
      } else {
        console.log("Soli Sandbox Detected");
      }

//This detects if the prototype is opened in Soli Sandbox, and sends an alert to the user that soli functionality will not work in other apps/browswe
//if(!navigator.userAgent.includes("Soli Sandbox")){ alert("This prototype needs to be opened in Soli Sandbox in order to receive Soli Events. Soli functionality will not work.");} else {console.log("Soli Sandbox Detected");}

//This defines all of p5.js' tools so that glitch recognizes them
/*global REPLACE, millis,save, lerp, tint, CORNERS, CORNER, CENTER, noise, vertex, endShape, MULTIPLY, loadFont, CLOSE, OPEN, beginShape, blendMode, BLEND, BOTTOM,REPLACE, TOP, LEFT_ARROW, imageMode, image, RIGHT_ARROW, abs,circle,angleMode,append, colorMode, HSB, background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

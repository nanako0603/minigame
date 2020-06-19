var st=20;
var dogx=300;
var dogy=300;


function preload()
{
  img=loadImage('dog.png');
  img2=loadImage('dogs.png');
  img3=loadImage('hone.png');
  img4=loadImage('haikei5.png');
}


function setup()
{
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
}


function draw()
 {
  image(img4,500,650,1500,1500);

  image(img3,mouseX, mouseY,350,350);

  translate(1,1);
  if(abs(dogx-mouseX) < 200 && abs(dogy-mouseY) < 200)
  {
    image(img2,dogx+=(mouseX-dogx)/st,dogy+=(mouseY-dogy)/st,450,450);
  }
  else
  {
    image(img,dogx+=(mouseX-dogx)/st,dogy+=(mouseY-dogy)/st,450,450);
  }
}
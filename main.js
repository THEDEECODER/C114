noseX = 0;
noseY = 0;
noseX1 = 0;
noseY1 = 0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 300, 300);
fill(142, 236, 245);
stroke(003, 004, 094);
circle(noseX, noseY, 20);
image(clown_nose, noseX1, noseY1, 30, 30);
}
function takesnapshot(){
   save('image1png.png');
}
function modelloaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("nose X coordinates =" + results[0].pose.nose.x);
    console.log("nose Y coordinates =" + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    noseX1 = noseX - 14;
    noseY1 = noseY + 10;
}
}
function preload(){

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
}
}
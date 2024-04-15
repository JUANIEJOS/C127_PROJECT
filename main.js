song_1="";
song_2="";
leftWrist_x=0;
rightWrist_x=0;
leftWrist_y=0;
rightWrist_y=0
song_name="";

function preload(){
song_1=loadSound("music.mp3");
song_2=loadSound("music2.mp3");
}

function setup(){
canvas=createCanvas(600,600);
canvas.center()
camera=createCapture(VIDEO);
camera.hide();

posenet=ml5.poseNet(camera,modalLoaded);
posenet.on('pose',gotPoses);
}

function modalLoaded(){
console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
console.log(results);
leftWrist_x=results[0].pose.leftWrist.x;
leftWrist_y=results[0].pose.leftWrist.y;
console.log("the coordinates of left wrist is "+leftWrist_x+", "+leftWrist_y)
rightWrist_x=results[0].pose.rightWrist.x;
rightWrist_y=results[0].pose.rightWrist.y;
console.log("the coordinates of right wrist is "+rightWrist_x+", "+rightWrist_y)

}}

function draw(){
image(camera,0,0,600,600);
}


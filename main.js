function preload(){
clown_nose= loadImage("https://i.postimg.cc/MHXdXVkG/Clown-Nose-removebg-preview.png");
Glasses=loadImage("https://i.postimg.cc/0ygjWvyW/R3e911a46ab7ee4c82215a7840ceb22ab-removebg-preview.png")
}
function setup(){
    canvas=createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("poseNet is initialized")
}
NoseX=0 
NoseY=0
leftEyeX=0
leftEyeY=0

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        NoseX=results[0].pose.nose.x-18
        NoseY=results[0].pose.nose.y-18
        leftEyeX=results[0].pose.leftEye.x-50
        leftEyeY=results[0].pose.leftEye.y-20
        console.log("nose x =" + NoseX)
        console.log("nose y =" + NoseY)
    }
}
function draw(){
image(video, 0, 0, 300, 300);
fill(225,0,0);
stroke(255,0,0);

image(clown_nose, NoseX, NoseY,40,40)
image(Glasses, leftEyeX, leftEyeY,70,40)
}
function take_snapshot(){
save('myFilterImage.png')
}

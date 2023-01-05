som = ""
som2 = ""
som3 = ""
pararSom = 0;
nome = ""
scoreRightWrist = 0;
scoreLefttWrist = 0;

rightWristX = 0;
leftWristX = 0;

rightWristY = 0;
leftWristY = 0;

function preload() {
    nome = document.getElementById("musicas").value;
    som = loadSound("Ocean.mp3")
    som2 = loadSound("Harry.mp3")
    som3 = loadSound("Road.mp3")
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoad);
    poseNet.on("pose", gotPose);
}

function draw() {
    image(video, 0, 0, 400, 400);
}
function modelLoad() 
{
console.log("model load!");
}

function gotPose(results) {
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        
        console.log("pulso esquerdo X: " +leftWristX+ " pulso esquerdo Y: " +leftWristY )

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;


        console.log("pulso direito X: " +rightWristX+ " pulso direito Y: " +rightWristY )
    }
    }
    

function Reproduzir() {
    nome = document.getElementById("musicas").value
    som2.stop()
    som.stop()
    som3.stop()
    if(nome == "Road") {
        som3.play()
        som3.rate(1.50);
        som3.setVolume(0.1)
    }
    if(nome == "Ocean") {
        som.play()
        som.rate(1.3);
        som.setVolume(1.5)
    }
    if(nome == "Harry"){
        som2.play()
        som2.rate(1.3);
        som2.setVolume(1.5)
    }
}
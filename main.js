song1 = "";
song2 = "";
left_x = 0;
left_y = 0;
right_x = 0;
right_y = 0;

function preload()
{
    song1 = loadSound("default.mp3")
    song2 = loadSound("harry_pottor.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        left_x = results[0].pose.leftWrist.x;
        left_y = results[0].pose.leftWrist.y;
        console.log("left_x = " + left_x + " left_y = " + left_y);
    
        right_x = results[0].pose.rightWrist.x;
        right_y = results[0].pose.rightWrist.y
        console.log("right_x = " + right_x + " right_y = " + right_y);
    }
}

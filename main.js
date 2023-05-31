function preload() {
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 640, 480);
    circle(30, 30, 20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
}
function take_snapshot()
{
    save("Filtered_Picture.png");
}
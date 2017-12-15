var video;
var vScale = 16;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  video.hide();
}

function draw() {
  background(0);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      //var index = (x + y * video.width) * 4;
      var index = ( video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var bright = (r + b + g) / 3;

      var w = map(bright, 0, 255, 0, vScale);
      noStroke();

      //fill(bright);
      fill(r, g, b);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);

      // var index = (x + y * width) * 4;
      // pixels[index + 0] = bright;
      // pixels[index + 1] = bright;
      // pixels[index + 2] = bright;
      // pixels[index + 3] = 255;
    }
  }


}

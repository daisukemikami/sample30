function setup() {
  createCanvas(600, 200);
  background(0);
  noStroke();
  fill(255);

  const step = 20;

  colorMode(HSB, 360, 100, 100);

  for (let y = 0; y <= height; y += step) {
    for (let x = 0; x <= width; x += step) {
      const size = random(0, 15);
      const h = random(200, 320);
      const s = 100;
      const b = 100;
      // const b = size * 5;
      fill(h, s, b);
      ellipse(x, y, size, size);
    }
  }
}

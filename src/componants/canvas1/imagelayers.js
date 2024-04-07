/**
 * @type HTMLCanvasElement
 */

let canvas = document.querySelector("canvas");

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

canvas.width = innerWidth;
canvas.height = (innerWidth * 1080) / 1920;

let ctx = canvas.getContext("2d");
console.log(ctx);
// creating image objects for each paralaxx layers
const img1 = new Image();
img1.src = "./src/canvas1/background.png";
const img2 = new Image();
img2.src = "./src/canvas1/astronout.png";
const img3 = new Image();
img3.src = "./src/canvas1/grass.png";

window.onload = () => {
  // class to create a image layer
  class imageLayer {
    constructor(ctx, img, velocity, innerW, innerH, sourceX, sourceY) {
      this.ctx = ctx;
      this.img = img;
      this.velocity = velocity;
      this.innerW = innerW;
      this.innerH = innerH;
      this.sourceX = sourceX;
      this.sourceY = sourceY;
      let prevOffset = 0;

      // changing the images source position based on scroll position to create paralaxx effect
      addEventListener("scroll", (event) => {
        const currentOffset = window.scrollY;
        this.sourceY = sourceY + currentOffset * velocity * 0.2;
      });
    }

    draw() {
      // drawing the image
      ctx.drawImage(
        this.img,
        this.sourceX,
        this.sourceY,
        this.innerWidth,
        this.innerHeight
      );
    }
  }

  const layer1 = new imageLayer(ctx, img1, 4.5, 1920, innerHeight, 0, 0);
  const layer2 = new imageLayer(ctx, img2, 2, 1920, innerHeight, 0, 0);
  const layer3 = new imageLayer(
    ctx,
    img3,
    -1,
    innerWidth,
    0.3,
    -40,
    ((innerWidth * 1080) / 1920 - ((innerWidth * 1080) / 1920) * 0.3) * 1.3
  );

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    // updating the image position each frame to create paralax animation
    layer1.draw();
    layer2.draw();
    //layer3.draw();
    //ctx.drawImage(img2, 0, 0, innerWidth, (innerWidth * 1080) / 1920);
  }

  animate();
};

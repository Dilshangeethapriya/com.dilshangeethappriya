/**
 * @type HTMLCanvasElement
 */

let canvas = document.getElementById("parallax");

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas.height);

let ctx = canvas.getContext("2d");
console.log(ctx);
// creating image objects for each paralaxx layers
const img1 = new Image();
img1.src = "./src/canvas1/background.png";
const img2 = new Image();
img2.src = "./src/canvas1/astronout.png";
const img3 = new Image();
img3.src = "./src/canvas1/grass.png";

const btnImg = new Image();
btnImg.src = "./src/canvas1/btn1.png";

window.onload = () => {
  // class to create a text layer  ----------------------
  class TextLayer {
    constructor(ctx, text, size, velocity, sourceY, innerW) {
      this.ctx = ctx;
      this.text = text;
      this.size = size;
      this.velocity = velocity;
      this.sourceY = sourceY;
      this.sourceX = innerW / 15;

      addEventListener("scroll", (event) => {
        const currentOffset = window.scrollY;
        this.sourceY = sourceY + currentOffset * velocity * 0.2;
      });

      addEventListener("resize", (event) => {
        canvas.width = window.innerWidth;
        this.innerW = window.innerWidth;
        console.log(window.innerWidth);
      });
    }

    draw() {
      ctx.font = `${this.size}px Verdana`;
      ctx.fillStyle = "white";
      ctx.fillText(this.text, this.sourceX, this.sourceY + 200);
    }
  }
  // class to create a image layer---------------------
  class ImageLayer {
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

      addEventListener("resize", (event) => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        this.innerW = window.innerWidth;
        this.innerH = window.innerHeight;
        console.log(window.innerWidth);
      });
    }

    draw() {
      // drawing the image
      ctx.drawImage(
        this.img,
        this.sourceX,
        this.sourceY,
        this.innerW,
        this.innerH
      );
    }
  }

  // creating a intractive button on canvas

  class Button {
    constructor(ctx, img, size, velocity, sourceY, innerW, link) {
      this.ctx = ctx;
      this.img = img;
      this.size = size;
      this.innerW = innerW;
      this.velocity = velocity;
      this.sourceY = sourceY;
      this.sourceX = innerW / 15;
      this.link = link;
      this.mouse = {
        x: 0,
        y: 0,
      };

      addEventListener("scroll", (event) => {
        const currentOffset = window.scrollY;
        this.sourceY = sourceY + currentOffset * velocity * 0.2;
      });

      addEventListener("resize", (event) => {
        canvas.width = window.innerWidth;
        this.innerW = window.innerWidth;
        console.log(window.innerWidth);
      });

      addEventListener("mousemove", (event) => {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
      });

      addEventListener("click", (event) => {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
        if (
          this.mouse.x > this.sourceX &&
          this.mouse.x < this.sourceX + this.innerW / 15 &&
          this.mouse.y > this.sourceY &&
          this.mouse.y < this.sourceY + this.innerW / 40
        ) {
          window.location.href = "#contact";
        }
      });
    }

    draw() {
      if (
        this.mouse.x > this.sourceX &&
        this.mouse.x < this.sourceX + this.innerW / 15 &&
        this.mouse.y > this.sourceY &&
        this.mouse.y < this.sourceY + this.innerW / 40
      ) {
        this.size = 1.03;
      } else {
        this.size = 1;
      }
      ctx.drawImage(
        this.img,
        this.sourceX,
        this.sourceY,
        50 + (this.innerW / 15) * this.size,
        15 + (this.innerW / 40) * this.size
      );
    }
  }

  const introYpos = 0;
  const layer1 = new ImageLayer(ctx, img1, 4.5, innerWidth, innerHeight, 0, 0);
  const layer2 = new ImageLayer(ctx, img2, 2, innerWidth, innerHeight, 0, 0);
  const textLayer1 = new TextLayer(ctx, "Hi,", 70, 5, 0, innerWidth);
  const textLayer2 = new TextLayer(
    ctx,
    "My name is Dilshan",
    70,
    5,
    introYpos + 80,
    innerWidth
  );
  const textLayer3 = new TextLayer(
    ctx,
    "I love creating user-friendly and visually stunning web experiences..",
    20,
    5,
    introYpos + 200,
    innerWidth
  );
  const button = new Button(
    ctx,
    btnImg,
    1,
    5,
    introYpos + 480,
    innerWidth,
    "dwdw"
  );

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    // updating the image position each frame to create paralax animation

    layer1.draw();
    textLayer1.draw();
    textLayer2.draw();
    textLayer3.draw();
    button.draw();
    layer2.draw();

    //layer3.draw();
    //ctx.drawImage(img2, 0, 0, innerWidth, (innerWidth * 1080) / 1920);
  }

  animate();
};

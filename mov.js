const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");
const Img = new Image();
let x = 450;
let y = 0;
const timg = 50;

function moveImg(timestamp){
  if (x <= 25, y <= 445) {
     x -= 1 ;
     y += 1 ; 
}
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(Img, x, y, timg, Img.height * (timg / Img.width));
  requestAnimationFrame(moveImg);
}






Img.src = "aeronave.png";

requestAnimationFrame(moveImg);
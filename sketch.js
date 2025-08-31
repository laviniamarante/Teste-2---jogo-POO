let nave;
let asteroides = [];

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS); 

  nave = new Nave(200, 200);

  for (let i = 0; i < 5; i++) {
    asteroides.push(new Asteroide(random(width), random(height), random(20, 30)));
  }
}

function draw() {
  background(0);


  for (let asteroide of asteroides) {
    asteroide.atualizar(); 
    asteroide.mostrar();
  }

  for (let projetil of nave.projeteis) {
    projetil.atualizar();
    projetil.mostrar();
  }

  nave.mostrar();


  if (keyIsDown(LEFT_ARROW))  nave.angulo -= 0.05;
  if (keyIsDown(RIGHT_ARROW)) nave.angulo += 0.05;
}
function keyPressed() {
  if (keyCode === 32) { 
    nave.atirar();
  }
}

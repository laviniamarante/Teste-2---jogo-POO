class Nave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angulo = 0;
    this.projeteis = [];
  }

  mostrar() {
    for (let projetil of this.projeteis) {
      projetil.atualizar();
      projetil.mostrar();

    }

    push();
    translate(this.x, this.y);
    rotate(this.angulo);
    noFill();
    stroke("lime");
    strokeWeight(2);
    beginShape();
    vertex(0, -15); 
    vertex(10, 15);
    vertex(0, 10);
    vertex(-10, 15);
    endShape(CLOSE);
    pop();

  }
atirar() {
  let pontaX = this.x + cos(this.angulo) * 0 + sin(this.angulo) * -15;
  let pontaY = this.y + sin(this.angulo) * 0 - cos(this.angulo) * -15;

  let p = new Projetil(pontaX, pontaY, this.angulo);
  this.projeteis.push(p);
}

}

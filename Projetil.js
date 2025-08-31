class Projetil {
  constructor(x, y, angulo) {
    this.x = x;
    this.y = y;
    this.angulo = angulo; 
    this.velocidade = 4;
    this.raio = 4;
  }

  atualizar() {
    this.x += cos(this.angulo) * this.velocidade;
    this.y += sin(this.angulo) * this.velocidade;
  }

  mostrar() {
    push();
    noFill();
    stroke("white");
    circle(this.x, this.y, this.raio);
    pop();
  }
}

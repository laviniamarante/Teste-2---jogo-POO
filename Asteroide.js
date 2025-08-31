class Asteroide {
  constructor(x, y, raio) {
    this.x = x;
    this.y = y;
    this.raio = raio;

    this.angulo = random(TWO_PI);
    this.vel = random(0.5, 2);
    this.vx = cos(this.angulo) * this.vel;
    this.vy = sin(this.angulo) * this.vel;

    this.cor = color(random(255), random(255), random(255));

    // gerar forma irregular
    this.pontos = [];
    let divisoes = 10;
    let anguloDiv = TWO_PI / divisoes;
    for (let a = 0; a < TWO_PI; a += anguloDiv) {
      let r = random(max(5, this.raio - 20), this.raio);
      this.pontos.push({ x: cos(a) * r, y: sin(a) * r });
    }
  }

  atualizar() {
    this.x += this.vx;
    this.y += this.vy;

  
    if (this.x - this.raio <= 0)        this.x = width - this.raio - 1;
    if (this.x + this.raio >= width)    this.x = this.raio + 1;
    if (this.y - this.raio <= 0)        this.y = height - this.raio - 1;
    if (this.y + this.raio >= height)   this.y = this.raio + 1;
  }

  mostrar() {
    push();
    translate(this.x, this.y);
    fill(this.cor);
    for (let p of this.pontos) {
      vertex(p.x, p.y);
    }
    endShape(CLOSE);
    pop();
  }
}

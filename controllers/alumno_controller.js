class AlumnoController {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  listar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}
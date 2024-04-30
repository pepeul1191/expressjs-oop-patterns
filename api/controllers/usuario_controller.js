class UsuarioController {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  listar() {
    console.log('listar!!!')
    console.log(req.params)
  }
}
/// Método trim para reomver os espaços antes e após uma string - .trim()

///////////// Variáveis que armazenam a classe e o id que estão no HTML
var containerElemento = document.querySelector('.cards')
var novaPostagemElemento = document.querySelector('#novaPostagem')

///////////// variaveis para armazenar os dados do input
let inputBanner = document.querySelector('#banner')
let inputGithub = document.querySelector('#github')
let inputNome = document.querySelector('#nome')
let inputOcupacao = document.querySelector('#ocupacao')
let inputTelefone = document.querySelector('#Telefone')
let inputEmail = document.querySelector('#email')
let inputPortifolio = document.querySelector('#portifolio')
let inputCidade = document.querySelector('#cidade')
let inputInstagram = document.querySelector('#instagram')
let inputLinkedin = document.querySelector('#linkedin')

///////////// Inserindo um novo post depois de preencher o formulário
// Utilizando o event listenner para adicionar. E nessa caso, foi removido o onclick do botao lá no html
novaPostagemElemento.addEventListener('click', event => {
  // Para evitar o recarregamento da página no momento em que o botão de dentro do formulário é clicado.
  event.preventDefault()

  containerElemento.innerHTML += `
  <div class="card">
    <div class="banner" style="background-image: url('${inputBanner.value}');"></div>

    <div class="img-github">
      <img src="https://www.github.com/github.png" alt="" />
    </div>

    <div class="apresentacao">
      <h2>Variável nome aqui </h2>
      <h3>variável ocupação aqui</h3>
    </div>
    <div class="info">
      <i class="fa-solid fa-envelope"> <span> variável </span> </i>
      <i class="fa-solid fa-phone-flip"> <span>+55 variável</span> </i>
      <i class="fa-solid fa-globe"> <span> variável  </span> </i>
      <i class="fa-solid fa-location-dot"> <span> variável </span> </i>
    </div>

    <div class="redes">
      <a class="fa-brands fa-github" href="https://www.github.com/variável" target="_blank"></a>
      <a class="fa-brands fa-instagram" href="variável" target="_blank"></a>
      <a class="fa-brands fa-linkedin" href="variável" target="_blank"></a>
    </div>
  </div>
        `

  //////////// Para limpar os campos de inout depois de enviar
})

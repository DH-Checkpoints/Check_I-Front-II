
/// Biblioteca de animação 
// https://michalsnik.github.io/aos/



/// Método trim para reomver os espaços antes e após uma string - .trim()

///////////// Variáveis que armazenam a classe e o id que estão no HTML
let containerSelect = document.querySelector('#container')
var containerElemento = document.querySelector('.cards')
var novaPostagemElemento = document.querySelector('#novaPostagem')

///////////// variaveis para armazenar os dados do input
let inputBanner = document.querySelector('#banner')
let inputGithub = document.querySelector('#github')
let inputNome = document.querySelector('#nome')
let inputOcupacao = document.querySelector('#ocupacao')
let inputTelefone = document.querySelector('#telefone')
let inputEmail = document.querySelector('#email')
let inputPortifolio = document.querySelector('#portifolio')
let inputCidade = document.querySelector('#cidade')
let inputInstagram = document.querySelector('#instagram')
let inputLinkedin = document.querySelector('#linkedin')

///////Inserindo posts principais que serão carregados na página ao ser acessada
let postsPrincipais = [
  {
    campoBanner:"https://i.gifer.com/6Tj6.gif",
    campoGithubFoto:"https://github.com/gabazevdo.png",
    campoNome:"Gabriel Azevedo",
    campoOcupacao:"FronEnd Developer",
    campoTelefone:" 11 99265-9072",
    campoEmail:"gbldja@gmail.com",
    campoPortifolio:"https://gabazevdo.github.io/codelandia/",
    campoCidade:"Itapevi/SP",
    campoGithub:"https://www.github.com/gabazevdo",
    campoInstagram:"https://www.instagram.com/gabazevdo",
    campoLinkedin:"https://www.linkedin.com/in/gabazevdo"
  },
  {
    campoBanner:"https://l3software.com.br/wp-content/uploads/2019/03/jscrambler.jpg",
    campoGithubFoto:"https://github.com/lvs1981.png",
    campoNome:"Luiz Vagner",
    campoOcupacao:"Analista de Processos",
    campoTelefone:" 11 95555-4444",
    campoEmail:"l.vagner1981@hotmail.com",
    campoPortifolio:"https://lvs1981.github.io/lvs1981-Ckeckpoint_II_Front_I/",
    campoCidade:"Taboão da Serra",
    campoGithub:"https://github.com/lvs1981",
    campoInstagram:"https://www.instagram.com/l.vagner1981/",
    campoLinkedin:"https://www.linkedin.com/in/luiz-vagner-da-silva-3737a9150/"
  },
  {
    campoBanner:"",
    campoGithubFoto:"https://github.com/FabioCTD.png",
    campoNome:"",
    campoOcupacao:"",
    campoTelefone:"",
    campoEmail:"",
    campoPortifolio:"",
    campoCidade:"",
    campoGithub: "",
    campoInstagram:"",
    campoLinkedin:""
  }
]
for(var postPrincipal of postsPrincipais){
  containerElemento.innerHTML += `
  <div class="card">
    <div class="banner" style="background-image: url('${postPrincipal.campoBanner}');"></div>

    <div class="img-github">
      <img src="${postPrincipal.campoGithubFoto}" alt="" />
    </div>

    <div class="apresentacao">
      <h2>${postPrincipal.campoNome} </h2>
      <h3>${postPrincipal.campoOcupacao}</h3>
    </div>
    <div class="info">
      <i class="fa-solid fa-envelope"> <span>${postPrincipal.campoEmail}</span></i>
      <i class="fa-solid fa-phone-flip"> <span>+55${postPrincipal.campoTelefone}</span></i>
      <i class="fa-solid fa-globe"> <span><a href="${postPrincipal.campoPortifolio}" target ="blanc_">Site / Portifólio</a> </span></i>
      <i class="fa-solid fa-location-dot"> <span>${postPrincipal.campoCidade}</span></i>
    </div>

    <div class="redes">
      <a class="fa-brands fa-github" href="${postPrincipal.campoGithub}" target="_blank"></a>
      <a class="fa-brands fa-instagram" href="${postPrincipal.campoInstagram}" target="_blank"></a>
      <a class="fa-brands fa-linkedin" href="${postPrincipal.campoLinkedin}" target="_blank"></a>
    </div>
  </div>
        `

}



///////////// Inserindo um novo post depois de preencher o formulário
// Utilizando o event listenner para adicionar. E nessa caso, foi removido o onclick do botao lá no html

novaPostagemElemento.addEventListener('click', event => {
  // Para evitar o recarregamento da página no momento em que o botão de dentro do formulário é clicado.
  event.preventDefault()



  if(inputBanner.value == ''){ inputBanner.value = 'https://i.gifer.com/4V2C.gif' }
  if(inputGithub.value == ''){ inputGithub.value = 'dracula' }
  if(inputNome.value == ''){ inputNome.value = 'Dracula' }
  if(inputOcupacao.value == ''){ inputOcupacao.value = 'Theme VsCode' }
  if(inputEmail.value == ''){ inputEmail.value = 'zeno@draculatheme.com' }
  if(inputTelefone.value == ''){ inputTelefone.value = ' 11 99999-9999' }
  if(inputPortifolio.value == ''){ inputPortifolio.value = 'https://draculatheme.com/about' }
  if(inputCidade.value == ''){ inputCidade.value = 'Dracula é do Brasil' }
  if(inputInstagram.value == ''){ inputInstagram.value = 'https://www.instagram.com/explore/tags/draculatheme/' }
  if(inputInstagram.value == ''){ inputInstagram.value = 'https://www.linkedin.com/' }
  


  containerElemento.innerHTML += `
  <div class="card">
    <div class="banner" style="background-image: url('${inputBanner.value}');"></div>

    <div class="img-github">
      <img src="https://www.github.com/${inputGithub.value}.png" alt="" />
    </div>

    <div class="apresentacao">
      <h2>${inputNome.value} </h2>
      <h3>${inputOcupacao.value}</h3>
    </div>
    <div class="info">
      <i class="fa-solid fa-envelope"> <span>${inputEmail.value}</span></i>
      <i class="fa-solid fa-phone-flip"> <span>+55${inputTelefone.value}</span></i>
      <i class="fa-solid fa-globe"> <span><a href="${inputPortifolio.value}" target ="blanc_">Site / Portifólio </a> </span></i>
      <i class="fa-solid fa-location-dot"> <span>${inputCidade.value}</span></i>
    </div>

    <div class="redes">
      <a class="fa-brands fa-github" href="https://www.github.com/${inputGithub.value}" target="_blank"></a>
      <a class="fa-brands fa-instagram" href="${inputInstagram.value}" target="_blank"></a>
      <a class="fa-brands fa-linkedin" href="${inputLinkedin.value}" target="_blank"></a>
    </div>
  </div>
        `

  //////////// Para limpar os campos de inout depois de enviar

  inputBanner.value = ""
  inputGithub.value = ""
  inputNome.value = ""
  inputOcupacao.value = ""
  inputTelefone.value = ""
  inputEmail.value = ""
  inputPortifolio.value = ""
  inputCidade.value = ""
  inputInstagram.value = ""
  inputLinkedin.value = ""
})

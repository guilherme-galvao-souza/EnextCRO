$(document).ready(function(){
  $('.cases').slick({
    accessibility:true,
    prevArrow:'<img class="prev-arrow" src="./assets/icons/leftArrow.svg" alt="Icone de uma seta apontando para a esquerda">',
    nextArrow:'<img class="next-arrow" src="./assets/icons/rightArrow.svg" alt="Icone de uma seta apontando para a direita">'
  })
})

const sectionSolucoes = document.querySelector("section.solucoes");
const cardsSolucoes = document.querySelectorAll("section.solucoes .cardContainer");
const h2CardsSolucoes = document.querySelector(".solucoes > h2");
let sectionsSolucoesEstaAtiva = false;

const sectionCases = document.querySelector(".cases");
const h1Cases = document.querySelector(".casesContainer > h1");
let sectionCasesEstaAtiva = false;

const sectionContato = document.querySelector(".contato");
let sectionContatoEstaAtiva = false;


window.addEventListener("scroll",function()
{
    animaSolucoes();
    animaCases();
    animaContato();
})

function animaSolucoes()
{
  let sectionSolucoesApareceu = sectionSolucoes.getBoundingClientRect().y < 600 ? true : false;
  
  if(sectionSolucoesApareceu && !sectionsSolucoesEstaAtiva)
  {
    cardsSolucoes.forEach(function(card){
      h2CardsSolucoes.classList.add("ativo");
      card.classList.add("ativo");
    })
    sectionsSolucoesEstaAtiva = true;
  }
}
function animaCases()
{
  let sectionCasesApareceu = sectionCases.getBoundingClientRect().y < 600 ? true : false;
  
  if(sectionCasesApareceu && !sectionCasesEstaAtiva)
  {
    sectionCases.classList.add("ativo");
    h1Cases.classList.add("ativo");
    sectionCasesEstaAtiva = true;
  }
}
function animaContato()
{
  let sectionContatoApareceu = sectionContato.getBoundingClientRect().y < 600 ? true : false;
  
  if(sectionContatoApareceu && !sectionContatoEstaAtiva)
  {
    sectionContato.classList.add("ativo");
    sectionContatoEstaAtiva = true;
  }
}

const headerSolucoes = document.querySelector("header ul li a[href='#soluções']");
const headerCases = document.querySelector("header ul li a[href='#cases']");
const headerContato = document.querySelector("header ul li a[href='#contato']");
headerSolucoes.addEventListener("click",function()
{
  let topPosition = sectionSolucoes.getBoundingClientRect().top - 200;

  window.scroll({
    top:topPosition,
    behavior:"smooth"
  })
})
headerCases.addEventListener("click",function()
{
  let topPosition = sectionCases.getBoundingClientRect().top - 180;
  window.scroll({
    top:topPosition,
    behavior:"smooth"
  })
})
headerContato.addEventListener("click",function()
{
  let topPosition = sectionContato.getBoundingClientRect().top - 150;
  window.scroll({
    top:topPosition,
    behavior:"smooth"
  })
})

const CTAInicial = document.querySelector(".homeInicio a[href='#contato']");
CTAInicial.addEventListener("click",function()
{
  let topPosition = sectionContato.getBoundingClientRect().top - 150;
  window.scroll({
    top:topPosition,
    behavior:"smooth"
  })
})

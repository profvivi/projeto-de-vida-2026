/*aula 2 (atribui a todos botões e remove a classe ativo e ativa o botão que foi clicado)
const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
  botoes[i].onclick = function(){

    for(let j=0;j<botoes.length;j++){
      botoes[j].classList.remove("ativo"); 
    }

    botoes[i].classList.add("ativo");
  }
}
fim aula2*/

//aula 4
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
  botoes[i].onclick = function(){

    for(let j=0;j<botoes.length;j++){
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-04-20T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
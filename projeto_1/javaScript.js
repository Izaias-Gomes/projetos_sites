let valor1 = 0;
function volta() {
  valor1 += 1;
  if (valor1 == 1) {
    primeira_tela();
  } else if (valor1 == 2) {
    segundo_tela();
  } else {
    valor1 = 0;
    treceiro_tela();
  }
}
let botao1 = document.getElementById("botao1");
botao1.addEventListener("click", volta);
function paraFrente() {
  valor1 += 1;
  if (valor1 == 1) {
    segundo_tela();
  } else if (valor1 == 2) {
    primeira_tela();
  } else {
    valor1 = 0;
    treceiro_tela();
  }
}
let botao2 = document.getElementById("botao2");
botao2.addEventListener("click", paraFrente);

function primeira_tela() {
  let tela_fundo = document.querySelector("body");
  tela_fundo.style.backgroundColor = "orange";
  let imagem_fundo = document.getElementById("on");
  imagem_fundo.style.backgroundImage =
    'url("/projeto_1/imagem_sabor_refri/Laranja-refrigerante-foregroundBlur.png")';
  let imagem_lata = document.querySelector("img");
  imagem_lata.setAttribute(
    "src",
    "imagem_sabor_refri/Laranja-refrigerante.png",
  );
  imagem_lata.setAttribute("alt", "lata de laranja");
  let palavra = document.querySelector("p");
  palavra.innerText = "LARANJA";
}
function segundo_tela() {
  let tela_fundo = document.querySelector("body");
  tela_fundo.style.backgroundColor = "rgb(238, 55, 55)";
  let imagem_fundo = document.getElementById("on");
  imagem_fundo.style.backgroundImage =
    'url("/projeto_1/imagem_sabor_refri/Morango-refrigerante-foregroundBlur.png")';
  let imagem_lata = document.querySelector("img");
  imagem_lata.setAttribute(
    "src",
    "imagem_sabor_refri/Morango-refrigerante.png",
  );
  imagem_lata.setAttribute("alt", "lata de morango");
  let palavra = document.querySelector("p");
  palavra.innerText = "MORANGO";
}
function treceiro_tela() {
  let tela_fundo = document.querySelector("body");
  tela_fundo.style.backgroundColor = "rgba(0, 255, 128, 0.58)";
  let imagem_fundo = document.getElementById("on");
  imagem_fundo.style.backgroundImage =
    'url("/projeto_1/imagem_sabor_refri/Abacate-refrigerante-foregroundBlur.png")';
  let imagem_lata = document.querySelector("img");
  imagem_lata.setAttribute(
    "src",
    "imagem_sabor_refri/Abacate-refrigerante.png",
  );
  imagem_lata.setAttribute("alt", "lata de abacate");
  let palavra = document.querySelector("p");
  palavra.innerText = "ABACATE";
}

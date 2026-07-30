const tela = {
  laranga: {
    cor_fundo: "orange",
    img_fundo:
      'url("/projeto_1/imagem_sabor_refri/Laranja-refrigerante-foregroundBlur.png")',
    lata: "imagem_sabor_refri/Laranja-refrigerante.png",
    frase: "lata de laranja",
  },
  morango: {
    cor_fundo: "rgb(238, 55, 55)",
    img_fundo:
      'url("/projeto_1/imagem_sabor_refri/Morango-refrigerante-foregroundBlur.png")',
    lata: "imagem_sabor_refri/Morango-refrigerante.png",
    frase: "lata de morango",
  },
  abacate: {
    cor_fundo: "rgba(0, 255, 128, 0.58)",
    img_fundo:
      'url("/projeto_1/imagem_sabor_refri/Abacate-refrigerante-foregroundBlur.png")',
    lata: "imagem_sabor_refri/Abacate-refrigerante.png",
    frase: "lata de abacate",
  },
};

//munda a cor de fundo, imagem de fundo e imagem da lata;

function munda_tela(fundo, imagem, lata, frase) {
  //munda cor de fundo para orange;
  let tela_fundo = document.querySelector("body");
  tela_fundo.style.backgroundColor = fundo;
  //munda a imagem de fundo
  let imagem_fundo = document.getElementById("on");
  imagem_fundo.style.backgroundImage = imagem;
  //munda a imagem da lata.
  let imagem_lata = document.querySelector("img");
  imagem_lata.setAttribute("src", lata);
  imagem_lata.setAttribute("alt", frase);
}

// função de animação de imagem de fundo
function tela_fundo_animada() {
  let animacao = document.querySelector("div");
  animacao.classList.remove("animecao");
  void animacao.offsetWidth;
  animacao.classList.add("animecao");
}
// função do botao1 esquerdo
function volta() {
  valor1 += 1;
  if (valor1 == 1) {
    munda_tela(
      tela.laranga.cor_fundo,
      tela.laranga.img_fundo,
      tela.laranga.lata,
      tela.laranga.frase,
    );
    // primeira_tela();
    tela_fundo_animada();
  } else if (valor1 == 2) {
    munda_tela(
      tela.morango.cor_fundo,
      tela.morango.img_fundo,
      tela.morango.lata,
      tela.morango.frase,
    );
    tela_fundo_animada();
  } else {
    valor1 = 0;
    munda_tela(
      tela.abacate.cor_fundo,
      tela.abacate.img_fundo,
      tela.abacate.lata,
      tela.abacate.frase,
    );
    tela_fundo_animada();
  }
}
// função do botão2 direito
function paraFrente() {
  valor1 += 1;
  if (valor1 == 1) {
    munda_tela(
      tela.morango.t_f,
      tela.morango.i_i,
      tela.morango.i_l,
      tela.morango.i_p,
    );
    tela_fundo_animada();
  } else if (valor1 == 2) {
    munda_tela(
      tela.laranga.t_f,
      tela.laranga.i_i,
      tela.laranga.i_l,
      tela.laranga.i_p,
    );
    tela_fundo_animada();
  } else {
    valor1 = 0;
    munda_tela(
      tela.abacate.t_f,
      tela.abacate.i_i,
      tela.abacate.i_l,
      tela.abacate.i_p,
    );
    tela_fundo_animada();
  }
}
// animação da tela de abacaxi
tela_fundo_animada();
/* paramento da função da botão esquerdo e direito*/
let valor1 = 0;
let botao1 = document.getElementById("botao1");
botao1.addEventListener("click", volta);
let botao2 = document.getElementById("botao2");
botao2.addEventListener("click", paraFrente);

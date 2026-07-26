console.log('Matemática da Sofia carregada');
const perguntas = {
  idade10: [
    {
      pergunta: "Quanto é 3 × 4?",
      opcoes: ["7", "12", "14", "16"],
      resposta: "12"
    },
    {
      pergunta: "Quanto é 5 + 6?",
      opcoes: ["9", "10", "11", "12"],
      resposta: "11"
    },
    {
      pergunta: "Quanto é 20 ÷ 4?",
      opcoes: ["3", "4", "5", "6"],
      resposta: "5"
    },
    {
      pergunta: "Qual número vem depois de 29?",
      opcoes: ["28", "29", "30", "31"],
      resposta: "30"
    },
    {
      pergunta: "Se uma caixa tem 8 lápis e você ganha mais 2, quantos lápis tem?",
      opcoes: ["9", "10", "11", "12"],
      resposta: "10"
    },
    {
      pergunta: "Quanto é 7 × 2?",
      opcoes: ["12", "13", "14", "15"],
      resposta: "14"
    }
  ],

  idade11: [
    {
      pergunta: "Quanto é 7 × 8?",
      opcoes: ["54", "56", "58", "60"],
      resposta: "56"
    },
    {
      pergunta: "Quanto é 36 ÷ 6?",
      opcoes: ["4", "5", "6", "7"],
      resposta: "6"
    },
    {
      pergunta: "Metade de 18 é:",
      opcoes: ["6", "7", "8", "9"],
      resposta: "9"
    },
    {
      pergunta: "Qual fração representa 2 partes de 4?",
      opcoes: ["1/4", "2/4", "3/4", "4/4"],
      resposta: "2/4"
    },
    {
      pergunta: "Se 3 pacotes têm 5 figurinhas cada, quantas figurinhas há?",
      opcoes: ["12", "13", "14", "15"],
      resposta: "15"
    },
    {
      pergunta: "Quanto é 45 + 27?",
      opcoes: ["62", "72", "70", "68"],
      resposta: "72"
    },
    {
      pergunta: "Quanto é 100 - 37?",
      opcoes: ["53", "63", "73", "83"],
      resposta: "63"
    }
  ],

  idade12: [
    {
      pergunta: "Quanto é 9 × 7?",
      opcoes: ["63", "64", "65", "66"],
      resposta: "63"
    },
    {
      pergunta: "Quanto é 84 ÷ 7?",
      opcoes: ["10", "11", "12", "13"],
      resposta: "12"
    },
    {
      pergunta: "Qual é maior: 3/4 ou 1/2?",
      opcoes: ["3/4", "1/2", "São iguais", "Não dá"],
      resposta: "3/4"
    },
    {
      pergunta: "Quanto é 2/3 de 12?",
      opcoes: ["4", "6", "8", "10"],
      resposta: "8"
    },
    {
      pergunta: "Se um ônibus leva 24 alunos e 6 saem, quantos continuam?",
      opcoes: ["16", "18", "20", "22"],
      resposta: "18"
    },
    {
      pergunta: "Quanto é 125 + 25?",
      opcoes: ["150", "153", "163", "173"],
      resposta: "150"
    },
    {
      pergunta: "Quanto é 5 × 6 + 4?",
      opcoes: ["34", "30", "24", "28"],
      resposta: "34"
    },
    {
      pergunta: "Quanto é 90 - 27?",
      opcoes: ["53", "63", "73", "83"],
      resposta: "63"
    }
  ],

  ciencia: [
    {
      pergunta: "Qual planeta é conhecido como o Planeta Vermelho?",
      opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"],
      resposta: "Marte"
    },
    {
      pergunta: "O que as plantas precisam para fazer fotossíntese?",
      opcoes: ["Areia", "Luz do sol", "Gelo", "Papel"],
      resposta: "Luz do sol"
    },
    {
      pergunta: "Qual parte da planta absorve água do solo?",
      opcoes: ["Flor", "Raiz", "Folha", "Fruto"],
      resposta: "Raiz"
    },
    {
      pergunta: "Qual processo transforma água líquida em vapor?",
      opcoes: ["Condensação", "Evaporação", "Fusão", "Solidificação"],
      resposta: "Evaporação"
    },
    {
      pergunta: "Que gás as pessoas respiram?",
      opcoes: ["Oxigênio", "Dióxido de carbono", "Nitrogênio", "Hidrogênio"],
      resposta: "Oxigênio"
    }
  ]
};

let quizAtual = [];
let indice = 0;
let pontos = 0;
const chaveTrofeus = 'sophiaTrofeus';
let contadorTrofeus = Number(localStorage.getItem(chaveTrofeus) || 0);

function atualizarContadorTrofeus() {
  const elemento = document.getElementById('contadorTrofeus');
  const icones = document.getElementById('trofeusIcones');
  if (elemento) {
    elemento.textContent = contadorTrofeus;
  }
  if (icones) {
    icones.textContent = '🏆'.repeat(Math.min(contadorTrofeus, 5));
  }
}

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");
}

function iniciarQuiz(fase) {
  quizAtual = perguntas[fase];
  indice = 0;
  pontos = 0;

  document.getElementById("pontos").textContent = pontos;
  document.getElementById("totalPerguntas").textContent = quizAtual.length;

  mostrarTela("quiz");
  mostrarPergunta();
}

function mostrarPergunta() {
  const perguntaAtual = quizAtual[indice];

  document.getElementById("numeroPergunta").textContent = indice + 1;
  document.getElementById("perguntaTexto").textContent = perguntaAtual.pergunta;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";

  perguntaAtual.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao;

    botao.onclick = function () {
      verificarResposta(opcao);
    };

    opcoes.appendChild(botao);
  });

  atualizarBarra();
}

function verificarResposta(respostaEscolhida) {
  const respostaCerta = quizAtual[indice].resposta;

  if (respostaEscolhida === respostaCerta) {
    pontos += 20;
  }

  indice++;

  if (indice < quizAtual.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }

  document.getElementById("pontos").textContent = pontos;
}

function atualizarBarra() {
  const porcentagem = ((indice + 1) / quizAtual.length) * 100;
  document.getElementById("barraInterna").style.width = porcentagem + "%";
}

function mostrarResultado() {
  document.getElementById("pontuacaoFinal").textContent = pontos;

  const porcentagem = Math.round((pontos / (quizAtual.length * 20)) * 100);
  const trofeu = document.getElementById("trofeu");
  const badge = document.getElementById("premiacaoBadge");
  let titulo = "";
  let mensagem = "";

  if (porcentagem >= 80) {
    contadorTrofeus += 1;
    localStorage.setItem(chaveTrofeus, contadorTrofeus);
    atualizarContadorTrofeus();

    if (badge) {
      badge.classList.remove('ganhou');
      void badge.offsetWidth;
      badge.classList.add('ganhou');
    }

    titulo = "🏆 Parabéns, Sofia!";
    mensagem = "Você acertou mais de 80%! Você merece um troféu!";
    trofeu.style.display = "block";
  } else if (porcentagem >= 60) {
    titulo = "👏 Muito bom!";
    mensagem = "Você está aprendendo. Vamos praticar mais um pouco.";
    trofeu.style.display = "none";
  } else {
    titulo = "💪 Continue tentando!";
    mensagem = "Errar faz parte do aprendizado. Você consegue!";
    trofeu.style.display = "none";
  }

  document.getElementById("tituloResultado").textContent = titulo;
  document.getElementById("mensagemResultado").textContent = mensagem;

  mostrarTela("resultado");
}

function voltarInicio() {
  mostrarTela("inicio");
}

atualizarContadorTrofeus();

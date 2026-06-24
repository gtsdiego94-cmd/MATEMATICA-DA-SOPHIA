console.log('Matemática da Sofia carregada');
const perguntas = {
  tabuada: [
    {
      pergunta: "Quanto é 3 × 4?",
      opcoes: ["7", "12", "14", "16"],
      resposta: "12"
    },
    {
      pergunta: "Quanto é 5 × 6?",
      opcoes: ["30", "25", "35", "40"],
      resposta: "30"
    },
    {
      pergunta: "Quanto é 8 × 2?",
      opcoes: ["10", "12", "16", "18"],
      resposta: "16"
    },
    {
      pergunta: "Quanto é 7 × 3?",
      opcoes: ["21", "24", "18", "28"],
      resposta: "21"
    },
    {
      pergunta: "Quanto é 9 × 5?",
      opcoes: ["40", "45", "50", "55"],
      resposta: "45"
    }
  ],

  divisao: [
    {
      pergunta: "Se 12 balas forem divididas entre 3 crianças, quantas balas cada uma recebe?",
      opcoes: ["3", "4", "5", "6"],
      resposta: "4"
    },
    {
      pergunta: "Quanto é 20 ÷ 5?",
      opcoes: ["2", "3", "4", "5"],
      resposta: "4"
    },
    {
      pergunta: "Quanto é 18 ÷ 3?",
      opcoes: ["5", "6", "7", "8"],
      resposta: "6"
    },
    {
      pergunta: "Se 24 figurinhas forem divididas entre 4 amigos, quantas ficam para cada um?",
      opcoes: ["4", "5", "6", "8"],
      resposta: "6"
    },
    {
      pergunta: "Quanto é 30 ÷ 10?",
      opcoes: ["2", "3", "4", "5"],
      resposta: "3"
    }
  ],

  fracoes: [
    {
      pergunta: "Metade de uma pizza representa qual fração?",
      opcoes: ["1/2", "1/3", "1/4", "2/3"],
      resposta: "1/2"
    },
    {
      pergunta: "Se uma barra de chocolate foi dividida em 4 partes iguais e você comeu 1, qual fração você comeu?",
      opcoes: ["1/2", "1/4", "3/4", "4/4"],
      resposta: "1/4"
    },
    {
      pergunta: "Qual fração representa um inteiro completo?",
      opcoes: ["1/2", "2/4", "4/4", "1/3"],
      resposta: "4/4"
    },
    {
      pergunta: "Qual é maior?",
      opcoes: ["1/2", "1/4", "1/8", "1/10"],
      resposta: "1/2"
    },
    {
      pergunta: "Duas partes de quatro partes iguais representam:",
      opcoes: ["1/4", "2/4", "3/4", "4/4"],
      resposta: "2/4"
    }
  ],

  problemas: [
    {
      pergunta: "Sofia comprou 3 pacotes com 4 lápis em cada. Quantos lápis ela tem?",
      opcoes: ["7", "10", "12", "14"],
      resposta: "12"
    },
    {
      pergunta: "Pedro tinha 20 reais e gastou 8. Quanto sobrou?",
      opcoes: ["10", "12", "14", "16"],
      resposta: "12"
    },
    {
      pergunta: "Uma caixa tem 6 maçãs. Quantas maçãs há em 4 caixas?",
      opcoes: ["18", "20", "24", "30"],
      resposta: "24"
    },
    {
      pergunta: "Sofia leu 5 páginas por dia durante 6 dias. Quantas páginas ela leu?",
      opcoes: ["25", "30", "35", "40"],
      resposta: "30"
    },
    {
      pergunta: "Há 15 brinquedos para dividir entre 5 crianças. Quantos brinquedos cada uma recebe?",
      opcoes: ["2", "3", "4", "5"],
      resposta: "3"
    }
  ]
};

let quizAtual = [];
let indice = 0;
let pontos = 0;

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

  let titulo = "";
  let mensagem = "";

  if (pontos >= 80) {
    titulo = "🏆 Parabéns, Sofia!";
    mensagem = "Você mandou muito bem! Continue assim.";
  } else if (pontos >= 60) {
    titulo = "👏 Muito bom!";
    mensagem = "Você está aprendendo. Vamos praticar mais um pouco.";
  } else {
    titulo = "💪 Continue tentando!";
    mensagem = "Errar faz parte do aprendizado. Você consegue!";
  }

  document.getElementById("tituloResultado").textContent = titulo;
  document.getElementById("mensagemResultado").textContent = mensagem;

  mostrarTela("resultado");
}

function voltarInicio() {
  mostrarTela("inicio");
}

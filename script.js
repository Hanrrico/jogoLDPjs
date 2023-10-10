// Defina as variáveis globais
let playerName = "";
let score = 0;
let currentQuestion = 0;
let timer;
let questions = [
    {
        question: "Pergunta 1?",
        options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"],
        correctAnswer: 0
    },
    // Adicione mais perguntas aqui...
];

// Função para ocultar a tela inicial e mostrar a tela de jogo
function showGameScreen() {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".game-container").style.display = "block";
}

// Função para iniciar o jogo
function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    // Oculta a tela inicial e mostra a tela de jogo
    showGameScreen();
    // Inicialize a contagem do tempo
    startTimer();
    // Mostre a primeira pergunta
    showQuestion();
}

// Função para mostrar uma pergunta
function showQuestion() {
    if (currentQuestion < questions.length) {
        let questionElement = document.querySelector(".question");
        questionElement.textContent = questions[currentQuestion].question;
        let answerElements = document.querySelectorAll(".answer");
        for (let i = 0; i < answerElements.length; i++) {
            answerElements[i].textContent = questions[currentQuestion].options[i];
        }
    } else {
        // Todas as perguntas foram respondidas
        endGame();
    }
}

// Função para verificar a resposta
function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    showQuestion();
}

// Função para iniciar o temporizador
function startTimer() {
    let seconds = 0;
    timer = setInterval(function () {
        seconds++;
        // Atualize a exibição do temporizador
        // por exemplo, com document.querySelector(".timer").textContent = seconds;
    }, 1000);
}

// Função para encerrar o jogo
function endGame() {
    clearInterval(timer);
    // Calcule a posição no rank com base no score e no tempo
    // Atualize a exibição do rank
    // por exemplo, com document.querySelector(".rank").textContent = playerName + " | " + score + "/5 | " + formattedTime;
}

// Variáveis para o jogo
let perguntasUsadas = []; // Armazena as perguntas já usadas nesta partida
let perguntasDisponiveis = [
    {
        pergunta: "Qual é o nome do famoso físico teórico que formulou a teoria da relatividade?",
        alternativas: ["a) Isaac Newton", "b) Galileu Galilei", "c) Albert Einstein", "d) Stephen Hawking"],
        respostaCorreta: 2, // Resposta correta: Albert Einstein
    },
    {
        pergunta: "Qual é o elemento químico com o símbolo 'Fe'?",
        alternativas: ["a) Ferro", "b) Fósforo", "c) Flúor", "d) Frâncio"],
        respostaCorreta: 0, // Resposta correta: Ferro
    },
    {
        pergunta: "Qual é a capital da Austrália?",
        alternativas: ["a) Melbourne", "b) Sydney", "c) Canberra", "d) Brisbane"],
        respostaCorreta: 2, // Resposta correta: Canberra
    },
    {
        pergunta: "Quem escreveu a peça de teatro 'Romeu e Julieta'?",
        alternativas: ["a) William Shakespeare", "b) Charles Dickens", "c) Jane Austen", "d) F. Scott Fitzgerald"],
        respostaCorreta: 0, // Resposta correta: William Shakespeare
    },
    {
        pergunta: "Qual é o processo pelo qual as plantas convertem a luz solar em energia química?",
        alternativas: ["a) Fotossíntese", "b) Respiração", "c) Fotodegradação", "d) Transpiração"],
        respostaCorreta: 0, // Resposta correta: Fotossíntese
    },
    {
        pergunta: "Qual é o maior osso do corpo humano?",
        alternativas: ["a) Fêmur", "b) Tíbia", "c) Úmero", "d) Rádio"],
        respostaCorreta: 0, // Resposta correta: Fêmur
    },
    {
        pergunta: "Quem é o autor do livro '1984'?",
        alternativas: ["a) George Orwell", "b) Aldous Huxley", "c) Ray Bradbury", "d) J.K. Rowling"],
        respostaCorreta: 0, // Resposta correta: George Orwell
    },
    {
        pergunta: "Qual é o segundo planeta do sistema solar a partir do Sol?",
        alternativas: ["a) Vênus", "b) Marte", "c) Terra", "d) Júpiter"],
        respostaCorreta: 0, // Resposta correta: Vênus
    },
    {
        pergunta: "Qual é o instrumento musical que Wolfgang Amadeus Mozart era famoso por tocar e compor?",
        alternativas: ["a) Violino", "b) Flauta", "c) Piano", "d) Guitarra"],
        respostaCorreta: 2, // Resposta correta: Piano
    },
    {
        pergunta: "Qual é o ácido encontrado nas frutas cítricas, como laranjas e limões?",
        alternativas: ["a) Ácido acético", "b) Ácido sulfúrico", "c) Ácido cítrico", "d) Ácido clorídrico"],
        respostaCorreta: 2, // Resposta correta: Ácido cítrico
    },
    {
        pergunta: "Qual é o nome do famoso físico que formulou as leis do movimento e a lei da gravitação universal?",
        alternativas: ["a) Isaac Newton", "b) Galileu Galilei", "c) Albert Einstein", "d) Stephen Hawking"],
        respostaCorreta: 0, // Resposta correta: Isaac Newton
    },
    {
        pergunta: "Qual é o símbolo químico para o hidrogênio?",
        alternativas: ["a) H", "b) He", "c) Hi", "d) Ho"],
        respostaCorreta: 0, // Resposta correta: Hidrogênio
    },
    {
        pergunta: "Qual é a capital do Canadá?",
        alternativas: ["a) Toronto", "b) Vancouver", "c) Ottawa", "d) Montreal"],
        respostaCorreta: 2, // Resposta correta: Ottawa
    },
    {
        pergunta: "Quem escreveu 'Crime e Castigo'?",
        alternativas: ["a) William Faulkner", "b) Leo Tolstoy", "c) F. Scott Fitzgerald", "d) Fyodor Dostoevsky"],
        respostaCorreta: 3, // Resposta correta: Fyodor Dostoevsky
    },
    {
        pergunta: "Qual é o terceiro planeta do sistema solar a partir do Sol?",
        alternativas: ["a) Vênus", "b) Terra", "c) Marte", "d) Júpiter"],
        respostaCorreta: 1, // Resposta correta: Terra
    },
    {
        pergunta: "Qual é o instrumento musical associado à música flamenca espanhola?",
        alternativas: ["a) Violino", "b) Guitarra", "c) Bandolim", "d) Trompete"],
        respostaCorreta: 1, // Resposta correta: Guitarra
    },
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        alternativas: ["a) Terra", "b) Saturno", "c) Júpiter", "d) Netuno"],
        respostaCorreta: 2, // Resposta correta: Júpiter
    },
    {
        pergunta: "Qual é o processo pelo qual os seres humanos obtêm energia dos alimentos?",
        alternativas: ["a) Respiração", "b) Digestão", "c) Fotossíntese", "d) Evaporação"],
        respostaCorreta: 1, // Resposta correta: Digestão
    },
    {
        pergunta: "Qual é o nome do famoso químico sueco que inventou a dinamite?",
        alternativas: ["a) Alfred Nobel", "b) Marie Curie", "c) Robert Oppenheimer", "d) Dmitri Mendeleev"],
        respostaCorreta: 0, // Resposta correta: Alfred Nobel
    },
    {
        pergunta: "Qual é o gás mais abundante na atmosfera da Terra?",
        alternativas: ["a) Oxigênio", "b) Nitrogênio", "c) Hidrogênio", "d) Dióxido de carbono"],
        respostaCorreta: 1, // Resposta correta: Nitrogênio
    },


]; // Crie uma cópia das perguntas disponíveis
let perguntasPartida = []; // Armazena as 5 perguntas para esta partida
let perguntaAtual = 0;
let respondido = false; // Para controlar se a pergunta já foi respondida

// Função para escolher aleatoriamente 5 perguntas para a partida
function escolherPerguntasParaPartida() {
    while (perguntasPartida.length < 5 && perguntasDisponiveis.length > 0) {
        const indice = Math.floor(Math.random() * perguntasDisponiveis.length);
        perguntasPartida.push(perguntasDisponiveis[indice]);
        perguntasDisponiveis.splice(indice, 1);
    }
}

// Função para carregar uma pergunta
function carregarPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    const alternativasElements = document.querySelectorAll(".alternativa");

    if (perguntaAtual < perguntasPartida.length) {
        perguntaElement.textContent = perguntasPartida[perguntaAtual].pergunta;

        for (let i = 0; i < alternativasElements.length; i++) {
            alternativasElements[i].textContent = perguntasPartida[perguntaAtual].alternativas[i];
        }

        respondido = false; // Reinicia o controle de resposta
        document.getElementById("proxima-pergunta").style.display = "none"; // Esconde o botão "Próxima Pergunta"
    } else {
        perguntaElement.textContent = "Parabéns!Você completou o jogo:)";
        alternativasElements.forEach((alternativa) => (alternativa.textContent = ""));
    }
}

// Função para verificar a resposta
function verificarResposta(respostaSelecionada) {
    if (!respondido) {
        if (respostaSelecionada === perguntasPartida[perguntaAtual].respostaCorreta) {
            // Muda a cor de fundo para verde
            document.querySelectorAll(".alternativa")[respostaSelecionada].style.backgroundColor = "green";

            // Muda a cor de fundo de volta após 1 segundo
            setTimeout(() => {
                document.querySelectorAll(".alternativa")[respostaSelecionada].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                proximaPergunta();
            }, 1000);
        } else {
            // Muda a cor de fundo para vermelho
            document.querySelectorAll(".alternativa")[respostaSelecionada].style.backgroundColor = "red";

            // Muda a cor de fundo de volta após 1 segundo
            setTimeout(() => {
                document.querySelectorAll(".alternativa")[respostaSelecionada].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                proximaPergunta();
            }, 1000);
        }

        respondido = true; // Marca a pergunta como respondida
    }
}

// Função para avançar para a próxima pergunta
function proximaPergunta() {
    if (perguntaAtual < perguntasPartida.length) {
        perguntaAtual++;
        carregarPergunta(); // Avança para a próxima pergunta imediatamente
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    escolherPerguntasParaPartida(); // Escolhe as perguntas para esta partida
    carregarPergunta();
}

// Chame a função iniciarJogo quando a página for carregada
window.onload = iniciarJogo;

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Redireciona o jogador de volta à página inicial
    window.location.href = "index.html";
}
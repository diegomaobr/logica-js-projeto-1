alert('Desafio 3');
let numeroSecreto = 1;
let numeroDigitado;
let pontuacao = 0;
let statusJogo = 1

if (statusJogo == 1) {
    while (pontuacao < 10) {
        statusJogo = prompt('Informe 1 para continuar ou 2 para sair');
        if (statusJogo == 1) {
            numeroDigitado = prompt('Informe um numero de 1 a 10');
            if (numeroDigitado == numeroSecreto) {
                alert('Acertou o numero digitado, pontuacao: ' + pontuacao);
                pontuacao++;
            }
            if (numeroDigitado != numeroSecreto) {
                alert('Voce errou o numero digitado');
            }
        }
        if (statusJogo == 2) {
            alert('Jogo encerrado');
            break;
        }
        alert('Tente novamente, precisa de 10 pontos para ganhar');
    }
}



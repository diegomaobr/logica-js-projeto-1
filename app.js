alert('Bem vindo ao jogo do numero secreto');
let numeroRandom = 1000;
let numeroSecreto = parseInt(Math.random() * numeroRandom + 1);
let numeroDigitado;
let numeroTentativas = 1;
console.log(numeroSecreto);
//enquanto o numeroDigitado nao for igual a numeroSecreto
while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt(`Escolha um numero entre 1 e ${numeroRandom}`);
    //se o numeroDigitado for igual ao numeroSecreto
    if (numeroSecreto == numeroDigitado) {
        break;
    } else {
        //se o numeroDigitado for maior ao numeroSecreto
        if (numeroDigitado > numeroSecreto) {
            alert(`O numero secreto é menor que ${numeroDigitado} tentativa: ${numeroTentativas}`);
        } else {
            alert(`O numero secreto é maior que ${numeroDigitado} tentativa: ${numeroTentativas}`);
        }
    }
    numeroTentativas ++;
}
//operador ternario conferindo numero de tentativas
let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Voce acertou! ${numeroSecreto} com:  ${numeroTentativas} ${palavraTentativa}`);
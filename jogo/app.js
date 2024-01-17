let listaNumerosSecretos = [];
let numeroSecretoMaximo = 40;
let numeroSecreto = gerarNumeroSecreto();
let numeroTentativas = 1;
msgInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    let tentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto) {
        let msgVitoria = `voce acertou com ${numeroTentativas} ${tentativa}`;
        exibirTextoTela('h1', 'Parabens!!');
        exibirTextoTela('p', msgVitoria);
        alterarBotaoChutar('true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        limparCampo();        
        if (chute > numeroSecreto) {
            exibirTextoTela('p', `o numero secreto é menor que ${chute}`);
        } else {
            exibirTextoTela('p', `o numero secreto é maior que ${chute}`);
        }
        numeroTentativas++;
    }
};

function novoJogo() {
    msgInicial();
    numeroTentativas = 1;
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    alterarBotaoChutar('false');
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

function limparCampo() {
    document.querySelector('input').value = '';
};

function alterarBotaoChutar(alteracao) {
    alteracao == 'true' ? document.getElementById('botaoChutar').setAttribute('disabled', true) : document.getElementById('botaoChutar').removeAttribute('disabled');
};

function msgInicial() {
    exibirTextoTela('h1', 'Jogo do numero secreto!!');
    exibirTextoTela('p', 'escolha um numero de 1 a '+numeroSecretoMaximo);
};

function exibirTextoTela(tipo, texto) {
    let campo = document.querySelector(tipo);
    campo.innerHTML = texto;
};

function gerarNumeroSecreto() {
    let numeroSecretoTemporario = parseInt(Math.random() * numeroSecretoMaximo + 1);
    if (listaNumerosSecretos.length == numeroSecretoMaximo) {
        listaNumerosSecretos = [];
    }
    if (listaNumerosSecretos.includes(numeroSecretoTemporario)) {
        return gerarNumeroSecreto();
    } else {
        listaNumerosSecretos.push(numeroSecretoTemporario);
        return numeroSecretoTemporario;
    }
};
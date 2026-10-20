
 // EXERCÍCIO 1: Passagem por Referência

function saudacao() {
    console.log("Olá! Bem-vindo ao Back-End com Node.js!");
}

function executar(callback) {
    console.log("Iniciando processo...");
    callback();
}

executar(saudacao);


// EXERCÍCIO 2: Callback Recebendo Parâmetros

function calcularDobro(numero, callbackResultado) {
    let valorDobrado = numero * 2;
    callbackResultado(valorDobrado);
}

function imprimirFormatado(valor) {
    console.log("[RESULTADO]: O valor calculado é " + valor);
}

calcularDobro(25, imprimirFormatado);


// EXERCÍCIO 3: Mesma Função, Comportamentos Diferentes

function operar(a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}

function somar(x, y) {
    return x + y;
}

function multiplicar(x, y) {
    return x * y;
}

console.log("Soma:", operar(10, 4, somar));
console.log("Multiplicação:", operar(10, 4, multiplicar));


// EXERCÍCIO 4: Arrow Function Inline

function processarTexto(texto, callbackModificadora) {
    callbackModificadora(texto);
}

processarTexto("senai valinhos", (t) => console.log(t.toUpperCase()));


// EXERCÍCIO 5: Callback Assíncrona com setTimeout

function simularDownload(nomeArquivo, callbackConclusao) {
    console.log("Iniciando download de " + nomeArquivo + "...");

    setTimeout(() => {
        callbackConclusao();
    }, 1500);
}

simularDownload("dados_clientes.csv", () => {
    console.log("✅ Download finalizado com sucesso no disco!");
});

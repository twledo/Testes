let numGen = 0; // Variável global para armazenar o número gerado

// Função para gerar o número aleatório
function generation_number() {
    numGen = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
    let numGeneration = document.getElementById("numGeneration");
    numGeneration.textContent = `Número gerado: ${numGen}`; // Exibe o número gerado
}

// Função para validar e comparar os números
function js_for_html() {
    let num = document.getElementById("number");
    let output = document.getElementById("output");
    let button = document.getElementById("button");

    button.addEventListener("click", function () {
        let value_num = parseInt(num.value); // Converte o valor inserido para número inteiro

        // Valida se o número inserido está entre 1 e 100
        if (isNaN(value_num) || value_num < 1 || value_num > 100) {
            output.textContent = "O valor inserido deve ser entre 1 e 100";
        } else if (numGen === value_num) {
            output.textContent = "Você acertou, Parabéns!";
        } else {
            output.textContent = `O número digitado foi ${value_num}. Tente novamente!`;
        }
    });
}

// Inicialização
window.onload = function () {
    generation_number();
    js_for_html();
}

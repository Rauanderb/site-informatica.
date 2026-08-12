/// script.js

// 1. Alterar texto de uma seção ao clicar em um botão
function alterarTexto() {
    document.getElementById("inicio").querySelector("p").innerHTML = "Monte seu PC com os melhores componentes!";
}

// 2. Exibir uma mensagem ao usuário
function mostrarMensagem() {
    alert("Obrigado por visitar nossa loja!");
}

// 3. Ler dados do formulário e validar campos
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    // 4. Gerar mensagem personalizada
    alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");

    // 5. Salvar nome no localStorage
    localStorage.setItem("visitante", nome);
});

// 6. Recuperar informação do localStorage
window.addEventListener("load", function() {
    let visitante = localStorage.getItem("visitante");
    if (visitante) {
        document.getElementById("inicio").querySelector("h2").innerHTML = "Bem-vindo de volta, " + visitante + "!";
    }
});
// Contador de visitas usando localStorage
let visitas = localStorage.getItem("visitas");

// Se não existir ainda, começa em 0
if (!visitas) {
    visitas = 0;
}

// Incrementa a cada visita
visitas++;
localStorage.setItem("visitas", visitas);

// Atualiza o texto no HTML
document.getElementById("visitas").textContent = "Você é o visitante número: " + visitas;

// 7. Alterar estilo da página (tema escuro/claro)
function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

// 8. Contador de visitas usando localStorage
let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
console.log("Número de visitas: " + visitas);

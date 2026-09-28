const nome = document.querySelector("#nome");
const mensagemNome = document.querySelector("#mensagemNome");

nome.addEventListener('input', () => {
    mensagemNome.innerText = "Olá, " + nome.value + "! Escolha sua tatuagem."
});

const btnTema = document.querySelector("#btnTema");

btnTema.addEventListener('click', () => {
    document.body.classList.toggle("dark");
});

const btnImagem1 = document.querySelector("#btnImagem1");
const imagemTattoo1 = document.querySelector("#imagem1");

btnImagem1.addEventListener('click', () => {
    imagemTattoo1.src = "images/aguiaoldschool.jpg";
});

const btnImagem2 = document.querySelector("#btnImagem2");
const imagemTattoo2 = document.querySelector("#imagem2");

btnImagem2.addEventListener('click', () => {
    imagemTattoo2.src = "images/cobrarealismo.jpg";
});

const btnImagem3 = document.querySelector("#btnImagem3");
const imagemTattoo3 = document.querySelector("#imagem3");

btnImagem3.addEventListener('click', () => {
    imagemTattoo3.src = "images/anubisblackwork.jpg";
});

const btnImagem4 = document.querySelector("#btnImagem4");
const imagemTattoo4 = document.querySelector("#imagem4");

btnImagem4.addEventListener('click', () => {
    imagemTattoo4.src = "images/mandalaminimalista.png";
});

const btnSenha = document.querySelector("#btnSenha");

btnSenha.addEventListener('click', () => {
    if(senha.type === "password"){
        senha.type = "text";
        btnSenha.innerText = "Ocultar";
    } 
    else{
        senha.type = "password";
        btnSenha.innerText = "Mostrar";
    }
});

const btnContador = document.querySelector("#btnContador");

let segundos = 30;

let contador = setInterval(() => {
    segundos--;
    tempo.innerText = segundos;

    if(segundos <0){
        clearInterval(contador);
        tempo.innerText = "Tempo esgotado!";
        btnContador.disabled = true;
    }
}, 1000);

btnContador.addEventListener('click', () => {
    clearInterval(contador);
    btnContador.innerText = "Contador pausado";
    btnContador.disabled = true;
});


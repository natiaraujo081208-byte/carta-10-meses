/* =================================
   DATA EM QUE COMEÇARAM A NAMORAR
================================= */

const inicioNamoro = new Date(2025, 10, 27);


/* =================================
   CONTADOR DE MESES E DIAS
================================= */

function atualizarContador() {

    const agora = new Date();

    let meses =
        (agora.getFullYear() - inicioNamoro.getFullYear()) * 12 +
        (agora.getMonth() - inicioNamoro.getMonth());


    /*
        Se ainda não chegamos ao dia 27
        deste mês, significa que o mês
        atual ainda não foi completado.
    */

    if (agora.getDate() < inicioNamoro.getDate()) {
        meses--;
    }


    /*
        Cria uma data correspondente ao
        aniversário do relacionamento
        depois dos meses completos.
    */

    const dataDosMeses = new Date(inicioNamoro);

    dataDosMeses.setMonth(
        dataDosMeses.getMonth() + meses
    );


    /*
        Calcula quantos dias sobraram
        depois dos meses completos.
    */

    const diferenca =
        agora.getTime() - dataDosMeses.getTime();


    const umDia =
        1000 * 60 * 60 * 24;


    const dias =
        Math.floor(diferenca / umDia);


    /*
        Coloca os valores na página.
    */

    document.getElementById("months").textContent = meses;

    document.getElementById("days").textContent = dias;
}


/* Atualiza quando a página abre */

atualizarContador();


/*
    Atualiza uma vez por minuto.
    Como agora mostramos apenas meses e dias,
    não precisamos atualizar a cada segundo.
*/

setInterval(atualizarContador, 60000);


/* =================================
   ABRIR A CARTA
================================= */

function abrirCarta() {

    const carta = document.getElementById("carta");

    carta.classList.add("show");

    setTimeout(() => {

        carta.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}


/* =================================
   CORAÇÕES FLUTUANDO
================================= */

function criarCoracao() {

    const container =
        document.querySelector(".hearts");


    const coracao =
        document.createElement("div");


    coracao.classList.add("floating-heart");

    coracao.innerHTML = "♥";


    /* Posição aleatória */

    coracao.style.left =
        Math.random() * 100 + "%";


    /* Tamanho aleatório */

    const tamanho =
        Math.random() * 15 + 10;

    coracao.style.fontSize =
        tamanho + "px";


    /* Velocidade aleatória */

    const duracao =
        Math.random() * 5 + 5;

    coracao.style.animationDuration =
        duracao + "s";


    container.appendChild(coracao);


    /*
        Apaga o coração depois
        da animação.
    */

    setTimeout(() => {

        coracao.remove();

    }, duracao * 1000);
}


/*
    Cria um coração a cada 700ms
*/

setInterval(criarCoracao, 700);


/* =================================
   ANIMAÇÃO DA CARTA
================================= */

const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


observador.observe(
    document.getElementById("carta")
);
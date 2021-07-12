
const idDias = document.getElementById("days");
const idHoras = document.getElementById("hours");
const idMinutos = document.getElementById("mins");
const idSegundos = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function contagemRegressiva() {
    const dataAnoNovo = new Date(newYears);
    const dataAtual = new Date();

    const tS = (dataAnoNovo - dataAtual) / 1000;

    const dias = Math.floor(tS / 3600 / 24);
    const horas = Math.floor(tS / 3600) % 24;
    const mins = Math.floor(tS / 60) % 60;
    const segundos = Math.floor(tS) % 60;

    idDias.innerHTML = dias;
    idHoras.innerHTML = horas;
    idMinutos.innerHTML = mins;
    idSegundos.innerHTML = segundos;
}


// initial call
contagemRegressiva();

setInterval(contagemRegressiva, 1000);
<<<<<<< HEAD
import Timer from './timer.js';
import Sound from './sounds.js';

// temporizador
const minutesDisplay = document.querySelector('#number .minutes span');
const secondsDisplay = document.querySelector('#number .seconds span');

let minutosAtualizado = 0;

// chama funções modularizadas
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
});

const sound = Sound();

// botões de controle
const btnPlay = document.querySelector('#play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('#stop');
const btnAddMinutos = document.querySelector('#add');
const btnRemoveMinutos = document.querySelector('#remove');

// botões de som
const btnSomDeFloresta = document.querySelector('#florest');
const btnSomDeChuva = document.querySelector('#rain');
const btnSomDeCafeteira = document.querySelector('#coffe');
const btnSomDeFogo = document.querySelector('#fire');

export {
    btnPlay,
    btnPause,
    btnStop,
    btnAddMinutos,
    btnRemoveMinutos,
    btnSomDeFloresta,
    btnSomDeChuva,
    btnSomDeCafeteira,
    btnSomDeFogo,
};
=======
// temporizador
const minutos = document.querySelector(".minutes");
const segundos = document.querySelector(".seconds");
let minutosAtualizado = 0;

// botões de controle
const btnPlay = document.querySelector("#play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector("#stop");
const btnAddMinutos = document.querySelector("#add");
const btnRemoveMinutos = document.querySelector("#remove");

// botões de som
const btnSomDeFloresta = document.querySelector("#florest");
const btnSomDeChuva = document.querySelector("#rain");
const btnSomDeCafeteira = document.querySelector("#coffe");
const btnSomDeFogo = document.querySelector("#fire");

// eventos
btnPlay.addEventListener("click", (e) => {
  btnPlay.classList.add("hide");
  btnPause.classList.remove("hide");
});

btnPause.addEventListener("click", (e) => {
  btnPause.classList.add("hide");
  btnPlay.classList.remove("hide");
});
>>>>>>> e248298347604f268b18eaf1aa3fc68ef4cd1a9f

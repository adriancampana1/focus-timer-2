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

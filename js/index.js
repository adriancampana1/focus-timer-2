import Timer from './timer.js';
import Sound from './sounds.js';
import Events from './events.js';
import Controls from './controls.js';

// temporizador
const minutesDisplay = document.querySelector('#number .minutes span');
const secondsDisplay = document.querySelector('#number .seconds span');

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

const controls = Controls({
    btnPause,
    btnPlay,
    btnStop,
});

Events({ controls, timer, sound });

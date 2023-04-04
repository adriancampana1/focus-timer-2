import Timer from './timer.js';
import Sound from './sounds.js';
import Events from './events.js';
import Controls from './controls.js';

// temporizador
const minutesDisplay = document.querySelector('#number .minutes span');
const secondsDisplay = document.querySelector('#number .seconds span');

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
const controlVolumeFlorest = document.querySelector('#volForest');
const controlVolumeRain = document.querySelector('#volRain');
const controlVolumeCoffe = document.querySelector('#volCoffe');
const controlVolumeFire = document.querySelector('#volFire');

// botões do dark-mode

const body = document.querySelector('body');

const sliderVolForest = document.getElementById('volForest');
const sliderVolRain = document.getElementById('volRain');
const sliderVolCoffe = document.getElementById('volCoffe');
const sliderVolFire = document.getElementById('volFire');

const controleVolForest = sliderVolForest.querySelector(
    '::-webkit-slider-thumb'
);
const controleVolRain = sliderVolRain.querySelector('::-webkit-slider-thumb');
const controleVolCoffe = sliderVolCoffe.querySelector('::-webkit-slider-thumb');
const controleVolFire = sliderVolFire.querySelector('::-webkit-slider-thumb');

const darkModeBtn = document.getElementById('light-mode-btn');
const lightModeBtn = document.getElementById('dark-mode-btn');

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
    minutesDisplay,
    secondsDisplay,
    controlVolumeFlorest,
    controlVolumeRain,
    controlVolumeCoffe,
    controlVolumeFire,
    sliderVolForest,
    sliderVolRain,
    sliderVolCoffe,
    sliderVolFire,
    darkModeBtn,
    lightModeBtn,
    controleVolCoffe,
    controleVolFire,
    controleVolRain,
    controleVolForest,
    body,
};
const sound = Sound();

const controls = Controls({
    btnPause,
    btnPlay,
    btnStop,
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
});

Events({ controls, timer, sound });

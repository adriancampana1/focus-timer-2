import {
    btnPlay,
    btnPause,
    btnStop,
    btnSomDeFloresta,
    btnSomDeChuva,
    btnSomDeCafeteira,
    btnSomDeFogo,
    btnAddMinutos,
    btnRemoveMinutos,
    minutesDisplay,
    secondsDisplay,
} from './index.js';

import Timer from './timer.js';

// eventos

export default function ({ controls, timer, sound }) {
    let minutosAtualizado = 0;

    btnPlay.addEventListener('click', (e) => {
        controls.play();
        timer.countdown();
    });

    btnPause.addEventListener('click', (e) => {
        controls.pause();
        timer.hold();
    });

    btnStop.addEventListener('click', (e) => {
        controls.reset();
        timer.reset();
    });

    btnAddMinutos.addEventListener('click', (e) => {
        minutosAtualizado += 5;
        timer.updateDisplay(minutosAtualizado, 0);
        timer.updateMinutes(minutosAtualizado);
    });

    btnRemoveMinutos.addEventListener('click', (e) => {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);
        let limite = minutes <= 0 && seconds <= 0;
        if (limite) {
            return;
        } else {
            minutosAtualizado -= 5;
        }
        timer.updateDisplay(minutosAtualizado, 0);
        timer.updateMinutes(minutosAtualizado);
    });

    btnSomDeFloresta.addEventListener('click', (e) => {
        sound.somDeFloresta();
    });

    btnSomDeChuva.addEventListener('click', (e) => {
        sound.somDeChuva();
    });

    btnSomDeCafeteira.addEventListener('click', (e) => {
        sound.somDeCafeteria();
    });

    btnSomDeFogo.addEventListener('click', (e) => {
        sound.somDeFogo();
    });
}

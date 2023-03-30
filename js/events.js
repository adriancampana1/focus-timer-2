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
} from './index.js';

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
        minutosAtualizado -= 5;
        timer.updateDisplay(minutosAtualizado, 0);
        timer.updateMinutes(minutosAtualizado);
    });

    btnSomDeFloresta.addEventListener('click', (e) => {
        sound.somDeFloresta();
    });
}

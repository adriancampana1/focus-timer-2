import {
    btnPlay,
    btnPause,
    btnStop,
    btnSomDeFloresta,
    btnSomDeChuva,
    btnSomDeCafeteira,
    btnSomDeFogo,
} from './index.js';

// eventos

export default function ({ timer, sound }) {
    btnPlay.addEventListener('click', (e) => {
        btnPlay.classList.add('hide');
        btnPause.classList.remove('hide');
        timer.countdown();
    });

    btnPause.addEventListener('click', (e) => {
        btnPause.classList.add('hide');
        btnPlay.classList.remove('hide');
        timer.hold();
    });

    btnStop.addEventListener('click', (e) => {
        btnPlay.classList.remove('hide');
        btnPause.classList.add('hide');
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

    btnSomDeChuva.addEventListener('click', (e) => {
        sound.soundFlorest.play();
    });
}

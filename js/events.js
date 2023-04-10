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
    controlVolumeFlorest,
    controlVolumeRain,
    controlVolumeCoffe,
    controlVolumeFire,
    sliderVolForest,
    sliderVolCoffe,
    sliderVolRain,
    sliderVolFire,
    minutesDisplay,
    secondsDisplay,
    separatorDisplay,
    darkModeBtn,
    lightModeBtn,
    body,
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

    darkModeBtn.addEventListener('click', (e) => {
        body.classList.toggle('dark');

        minutesDisplay.classList.add('light-mode');
        secondsDisplay.classList.add('light-mode');
        separatorDisplay.classList.add('light-mode');

        btnPlay.classList.add('light-mode');
        btnPause.classList.add('light-mode');
        btnStop.classList.add('light-mode');
        btnAddMinutos.classList.add('light-mode');
        btnRemoveMinutos.classList.add('light-mode');

        btnSomDeFloresta.classList.remove('light');
        btnSomDeFloresta.classList.add('dark-gray');
        btnSomDeFloresta.classList.add('color1');

        btnSomDeChuva.classList.remove('light');
        btnSomDeChuva.classList.add('dark-gray');
        btnSomDeChuva.classList.add('color1');

        btnSomDeCafeteira.classList.remove('light');
        btnSomDeCafeteira.classList.add('dark-gray');
        btnSomDeCafeteira.classList.add('color1');

        btnSomDeFogo.classList.remove('light');
        btnSomDeFogo.classList.add('dark-gray');
        btnSomDeFogo.classList.add('color1');

        sliderVolForest.classList.add('dark-mode-slider');
        sound.toggleDarkMode(sliderVolForest);

        sliderVolCoffe.classList.add('dark-mode-slider');
        sound.toggleDarkMode(sliderVolCoffe);

        sliderVolRain.classList.add('dark-mode-slider');
        sound.toggleDarkMode(sliderVolRain);

        sliderVolFire.classList.add('dark-mode-slider');
        sound.toggleDarkMode(sliderVolFire);

        darkModeBtn.classList.add('hide');
        lightModeBtn.classList.remove('hide');
    });

    lightModeBtn.addEventListener('click', (e) => {
        body.classList.remove('dark');

        minutesDisplay.classList.remove('light-mode');
        secondsDisplay.classList.remove('light-mode');
        separatorDisplay.classList.remove('light-mode');

        btnPlay.classList.remove('light-mode');
        btnPause.classList.remove('light-mode');
        btnStop.classList.remove('light-mode');
        btnAddMinutos.classList.remove('light-mode');
        btnRemoveMinutos.classList.remove('light-mode');

        btnSomDeFloresta.classList.add('light');
        btnSomDeFloresta.classList.remove('dark-gray');
        btnSomDeFloresta.classList.remove('color1');

        btnSomDeChuva.classList.add('light');
        btnSomDeChuva.classList.remove('dark-gray');
        btnSomDeChuva.classList.remove('color1');

        btnSomDeFogo.classList.add('light');
        btnSomDeFogo.classList.remove('dark-gray');
        btnSomDeFogo.classList.remove('color1');

        btnSomDeCafeteira.classList.add('light');
        btnSomDeCafeteira.classList.remove('dark-gray');
        btnSomDeCafeteira.classList.remove('color1');

        sliderVolForest.classList.remove('dark-mode-slider');
        sound.toggleDarkMode(sliderVolForest);

        sliderVolCoffe.classList.remove('dark-mode-slider');
        sound.toggleDarkMode(sliderVolCoffe);

        sliderVolRain.classList.remove('dark-mode-slider');
        sound.toggleDarkMode(sliderVolRain);

        sliderVolFire.classList.remove('dark-mode-slider');
        sound.toggleDarkMode(sliderVolFire);

        darkModeBtn.classList.remove('hide');
        lightModeBtn.classList.add('hide');
    });
}

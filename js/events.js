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

    function darkModeChangeColors() {
        if (body.classList.contains('dark')) {
            minutesDisplay.classList.add('light-mode');
            secondsDisplay.classList.add('light-mode');
            separatorDisplay.classList.add('light-mode');

            btnPlay.classList.add('light-mode');
            btnPause.classList.add('light-mode');
            btnStop.classList.add('light-mode');
            btnAddMinutos.classList.add('light-mode');
            btnRemoveMinutos.classList.add('light-mode');

            btnSomDeCafeteira.style.backgroundColor = '#29292E';
            btnSomDeChuva.style.backgroundColor = '#29292E';
            btnSomDeFloresta.style.backgroundColor = '#29292E';
            btnSomDeFogo.style.backgroundColor = '#29292E';

            btnSomDeFloresta.classList.add('color2');
            btnSomDeChuva.classList.add('color2');
            btnSomDeFogo.classList.add('color2');
            btnSomDeCafeteira.classList.add('color2');

            sliderVolForest.classList.add('dark-mode-slider');
            controlVolumeFlorest.style.backgroundColor = '#fff';

            sliderVolCoffe.classList.add('dark-mode-slider');
            controlVolumeCoffe.style.backgroundColor = '#fff';

            sliderVolRain.classList.add('dark-mode-slider');
            controlVolumeRain.style.backgroundColor = '#fff';

            sliderVolFire.classList.add('dark-mode-slider');
            controlVolumeFire.style.backgroundColor = '#fff';

            darkModeBtn.classList.add('hide');
            lightModeBtn.classList.remove('hide');
        } else {
            minutesDisplay.classList.remove('light-mode');
            secondsDisplay.classList.remove('light-mode');
            separatorDisplay.classList.remove('light-mode');

            btnPlay.classList.remove('light-mode');
            btnPause.classList.remove('light-mode');
            btnStop.classList.remove('light-mode');
            btnAddMinutos.classList.remove('light-mode');
            btnRemoveMinutos.classList.remove('light-mode');

            btnSomDeCafeteira.style.backgroundColor = '#e1e1e6';
            btnSomDeChuva.style.backgroundColor = '#e1e1e6';
            btnSomDeFloresta.style.backgroundColor = '#e1e1e6';
            btnSomDeFogo.style.backgroundColor = '#e1e1e6';

            btnSomDeFloresta.classList.remove('color2');
            btnSomDeChuva.classList.remove('color2');
            btnSomDeFogo.classList.remove('color2');
            btnSomDeCafeteira.classList.remove('color2');

            sliderVolForest.classList.remove('dark-mode-slider');
            controlVolumeFlorest.style.backgroundColor = '#323239';

            sliderVolCoffe.classList.remove('dark-mode-slider');
            controlVolumeCoffe.style.backgroundColor = '#323239';

            sliderVolRain.classList.remove('dark-mode-slider');
            controlVolumeRain.style.backgroundColor = '#323239';

            sliderVolFire.classList.remove('dark-mode-slider');
            controlVolumeFire.style.backgroundColor = '#323239';

            lightModeBtn.classList.add('hide');
            darkModeBtn.classList.remove('hide');
        }
    }

    function changeColorDarkModeVersion(audio, button) {
        const card = button;
        if (card.classList.contains('dark-blue')) {
            audio.play();
        } else {
            audio.pause();
            audio = '';
        }
    }

    function toggleLightModeVersion(slider) {
        if (slider.classList.contains('dark-mode-slider')) {
            slider.style.backgroundColor = '#fff';
        } else {
            slider.style.backgroundColor = '#323239';
        }
    }

    btnSomDeFloresta.addEventListener('click', (e) => {
        btnSomDeFloresta.classList.toggle('dark-blue');
        btnSomDeFloresta.classList.toggle('dark-gray');

        sliderVolForest.classList.toggle('dark-mode-slider');
        changeColorDarkModeVersion(sound.soundFlorest, btnSomDeFloresta);
    });

    darkModeBtn.addEventListener('click', (e) => {
        body.classList.toggle('dark');

        darkModeChangeColors();
    });

    lightModeBtn.addEventListener('click', (e) => {
        body.classList.remove('dark');

        darkModeChangeColors();
    });
}

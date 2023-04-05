import {
    controlVolumeCoffe,
    controlVolumeFire,
    controlVolumeFlorest,
    controlVolumeRain,
    btnSomDeFloresta,
    btnSomDeFogo,
    btnSomDeCafeteira,
    btnSomDeChuva,
    sliderVolForest,
    sliderVolCoffe,
    sliderVolRain,
    sliderVolFire,
} from './index.js';

export default function () {
    const soundFlorest = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Floresta.wav?raw=true'
    );
    const soundRain = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Chuva.mp3?raw=true'
    );
    const soundCoffe = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Cafeteria.wav?raw=true'
    );
    const soundFire = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Lareira.wav?raw=true'
    );

    const despertador = new Audio(
        'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
    );

    soundFlorest.loop = true;
    soundRain.loop = true;
    soundCoffe.loop = true;
    soundFire.loop = true;

    function changeColor(audio, button) {
        const card = button;
        if (card.classList.contains('color1')) {
            audio.play();
        } else {
            audio.pause();
            audio = '';
        }
    }

    function toggleDarkMode(slider) {
        if (slider.classList.contains('dark-mode-slider')) {
            slider.style.backgroundColor = '#fff';
        } else {
            slider.style.backgroundColor = '#323239';
        }
    }

    controlVolumeFlorest.addEventListener('input', (e) => {
        soundFlorest.volume = controlVolumeFlorest.value;
    });

    controlVolumeRain.addEventListener('input', (e) => {
        soundRain.volume = controlVolumeRain.value;
    });

    controlVolumeCoffe.addEventListener('input', (e) => {
        soundCoffe.volume = controlVolumeCoffe.value;
    });

    controlVolumeFire.addEventListener('input', (e) => {
        soundFire.volume = controlVolumeFire.value;
    });

    btnSomDeFloresta.addEventListener('click', (e) => {
        btnSomDeFloresta.classList.toggle('color1');
        btnSomDeFloresta.classList.toggle('blue');
        btnSomDeFloresta.classList.toggle('light');

        sliderVolForest.classList.toggle('dark-mode-slider');

        changeColor(soundFlorest, btnSomDeFloresta);
        toggleDarkMode(sliderVolForest);
    });

    btnSomDeChuva.addEventListener('click', (e) => {
        btnSomDeChuva.classList.toggle('color1');
        btnSomDeChuva.classList.toggle('blue');
        btnSomDeChuva.classList.toggle('light');

        sliderVolRain.classList.toggle('dark-mode-slider');

        changeColor(soundRain, btnSomDeChuva);
        toggleDarkMode(sliderVolRain);
    });

    btnSomDeCafeteira.addEventListener('click', (e) => {
        btnSomDeCafeteira.classList.toggle('color1');
        btnSomDeCafeteira.classList.toggle('blue');
        btnSomDeCafeteira.classList.toggle('light');

        sliderVolCoffe.classList.toggle('dark-mode-slider');

        changeColor(soundCoffe, btnSomDeCafeteira);
        toggleDarkMode(sliderVolCoffe);
    });

    btnSomDeFogo.addEventListener('click', (e) => {
        btnSomDeFogo.classList.toggle('color1');
        btnSomDeFogo.classList.toggle('blue');
        btnSomDeFogo.classList.toggle('light');

        sliderVolFire.classList.toggle('dark-mode-slider');

        changeColor(soundFire, btnSomDeFogo);
        toggleDarkMode(sliderVolFire);
    });

    return {
        changeColor,
        toggleDarkMode,
    };
}

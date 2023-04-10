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

    function changeColorLightMode(audio, button) {
        const card = button;
        if (
            card.classList.contains('blue') ||
            card.classList.contains('dark-blue')
        ) {
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

    btnSomDeFloresta.addEventListener('click', (e) => {
        btnSomDeFloresta.classList.toggle('color1');

        if (
            btnSomDeFloresta.classList.contains('dark-gray') ||
            btnSomDeFloresta.classList.contains('dark-blue')
        ) {
            btnSomDeFloresta.classList.toggle('dark-blue');
            btnSomDeFloresta.classList.toggle('dark-gray');
            btnSomDeFloresta.classList.toggle('color1');
            sliderVolForest.classList.toggle('dark-mode-slider');
            toggleDarkMode(sliderVolForest);
        } else {
            btnSomDeFloresta.classList.toggle('blue');
            btnSomDeFloresta.classList.toggle('light');
        }

        sliderVolForest.classList.toggle('dark-mode-slider');

        changeColorLightMode(soundFlorest, btnSomDeFloresta);
        toggleDarkMode(sliderVolForest);
    });

    btnSomDeChuva.addEventListener('click', (e) => {
        btnSomDeChuva.classList.toggle('color1');

        if (
            btnSomDeChuva.classList.contains('dark-gray') ||
            btnSomDeChuva.classList.contains('dark-blue')
        ) {
            btnSomDeChuva.classList.toggle('dark-blue');
            btnSomDeChuva.classList.toggle('dark-gray');
            btnSomDeChuva.classList.toggle('color1');
            sliderVolRain.classList.toggle('dark-mode-slider');
            toggleDarkMode(sliderVolRain);
        } else {
            btnSomDeChuva.classList.toggle('blue');
            btnSomDeChuva.classList.toggle('light');
        }

        sliderVolRain.classList.toggle('dark-mode-slider');

        changeColorLightMode(soundRain, btnSomDeChuva);
        toggleDarkMode(sliderVolRain);
    });

    btnSomDeCafeteira.addEventListener('click', (e) => {
        btnSomDeCafeteira.classList.toggle('color1');

        if (
            btnSomDeCafeteira.classList.contains('dark-gray') ||
            btnSomDeCafeteira.classList.contains('dark-blue')
        ) {
            btnSomDeCafeteira.classList.toggle('dark-blue');
            btnSomDeCafeteira.classList.toggle('dark-gray');
            btnSomDeCafeteira.classList.toggle('color1');
            sliderVolCoffe.classList.toggle('dark-mode-slider');
            toggleDarkMode(sliderVolCoffe);
        } else {
            btnSomDeCafeteira.classList.toggle('blue');
            btnSomDeCafeteira.classList.toggle('light');
        }

        sliderVolCoffe.classList.toggle('dark-mode-slider');

        changeColorLightMode(soundCoffe, btnSomDeCafeteira);
        toggleDarkMode(sliderVolCoffe);
    });

    btnSomDeFogo.addEventListener('click', (e) => {
        btnSomDeFogo.classList.toggle('color1');

        if (
            btnSomDeFogo.classList.contains('dark-gray') ||
            btnSomDeFogo.classList.contains('dark-blue')
        ) {
            btnSomDeFogo.classList.toggle('dark-blue');
            btnSomDeFogo.classList.toggle('dark-gray');
            btnSomDeFogo.classList.toggle('color1');
            sliderVolFire.classList.toggle('dark-mode-slider');
            toggleDarkMode(sliderVolFire);
        } else {
            btnSomDeFogo.classList.toggle('blue');
            btnSomDeFogo.classList.toggle('light');
        }

        sliderVolFire.classList.toggle('dark-mode-slider');

        changeColorLightMode(soundFire, btnSomDeFogo);
        toggleDarkMode(sliderVolFire);
    });

    return {
        changeColorLightMode,
        toggleDarkMode,
    };
}

import {
    controlVolumeCoffe,
    controlVolumeFire,
    controlVolumeFlorest,
    controlVolumeRain,
} from './index.js';

import {
    btnSomDeFloresta,
    btnSomDeFogo,
    btnSomDeCafeteira,
    btnSomDeChuva,
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

        changeColor(soundFlorest, btnSomDeFloresta);
    });

    btnSomDeChuva.addEventListener('click', (e) => {
        btnSomDeChuva.classList.toggle('color1');
        btnSomDeChuva.classList.toggle('blue');
        btnSomDeChuva.classList.toggle('light');
        changeColor(soundRain, btnSomDeChuva);
    });

    btnSomDeCafeteira.addEventListener('click', (e) => {
        btnSomDeCafeteira.classList.toggle('color1');
        btnSomDeCafeteira.classList.toggle('blue');
        btnSomDeCafeteira.classList.toggle('light');
        changeColor(soundCoffe, btnSomDeCafeteira);
    });

    btnSomDeFogo.addEventListener('click', (e) => {
        btnSomDeFogo.classList.toggle('color1');
        btnSomDeFogo.classList.toggle('blue');
        btnSomDeFogo.classList.toggle('light');
        changeColor(soundFire, btnSomDeFogo);
    });
}

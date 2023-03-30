export default function () {
    const soundFlorest = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Floresta.wav?raw=true'
    );
    const soundRain = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Chuva.wav?raw=true'
    );
    const soundCoffe = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Cafeteria.wav?raw=true'
    );
    const soundFire = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Lareira.wav?raw=true'
    );

    soundFlorest.loop = true;
    soundRain.loop = true;
    soundCoffe.loop = true;
    soundFire.loop = true;

    function somDeFloresta() {
        soundFlorest.play();
        soundRain.pause();
        soundCoffe.pause();
        soundFire.pause();
    }

    function somDeChuva() {
        soundRain.play();
    }

    function somDeCafeteria() {
        soundCoffe.play();
        soundFlorest.pause();
        soundRain.pause();
        soundFire.pause();
    }

    function somDeFogo() {
        soundFire.play();
        soundFlorest.pause();
        soundRain.pause();
        soundCoffe.pause();
    }

    return {
        somDeFloresta,
        somDeChuva,
        somDeCafeteria,
        somDeFogo,
    };
}

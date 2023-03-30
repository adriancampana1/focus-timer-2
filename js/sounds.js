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

    function despertadorAutomatico() {
        despertador.play();
    }

    return {
        somDeFloresta,
        somDeChuva,
        somDeCafeteria,
        somDeFogo,
        despertadorAutomatico,
    };
}

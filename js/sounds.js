export default function () {
    const soundFlorest = new Audio(
        'https://github.com/adriancampana1/focus-timer-2/blob/main/assets/Floresta.wav?raw=true'
    );
    const soundRain = new Audio(
        'https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view'
    );
    const soundCoffe = new Audio(
        'https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view'
    );
    const soundFire = new Audio(
        'https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view'
    );

    soundFlorest.loop = true;
    soundRain.loop = true;
    soundCoffe.loop = true;
    soundFire.loop = true;

    function somDeFloresta() {
        soundFlorest.play();
    }

    function somDeChuva() {
        soundRain.play();
    }

    function somDeCafeteria() {
        soundCoffe.play();
    }

    function somDeFogo() {
        soundFire.play();
    }

    return {
        somDeFloresta,
        somDeChuva,
        somDeCafeteria,
        somDeFogo,
    };
}

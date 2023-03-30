export default function Controls({ btnPause, btnPlay, btnStop }) {
    function play() {
        btnPlay.classList.add('hide');
        btnPause.classList.remove('hide');
    }

    function pause() {
        btnPause.classList.add('hide');
        btnPlay.classList.remove('hide');
    }

    function reset() {
        btnPlay.classList.remove('hide');
        btnPause.classList.add('hide');
    }

    return {
        reset,
        play,
        pause,
    };
}

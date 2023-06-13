import sound1 from './sounds/sound1.mp3';

export const soundButton: HTMLTemplateElement | null = document.querySelector('.soundButton');
const backSound = new Audio();

export function playPauseSound(): void {
    backSound.src = sound1;
    backSound.volume = 0.1;
    backSound.autoplay = true;
    backSound.play();
    backSound.loop = true;
    if (soundButton) {
        soundButton.innerHTML = 'Stop relax music';
        soundButton.classList.toggle('play');
    }
}

export function pauseSound(): void {
    backSound.pause();
    if (soundButton) {
        soundButton.innerHTML = 'Play relax music';
        soundButton.classList.toggle('play');
    }
}

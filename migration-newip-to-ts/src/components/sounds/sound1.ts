import sound1 from './sounds/sound1.mp3';

export const soundButton = document.querySelector('.soundButton') as HTMLTemplateElement;
const backSound = new Audio();

export function playPauseSound(): void {
    backSound.src = sound1;
    backSound.volume = 0.1;
    backSound.autoplay = true;
    backSound.play();
    soundButton.innerHTML = 'Pause relax music';
    soundButton.classList.toggle('play');
}

export function pauseSound(): void {
    backSound.pause();
    soundButton.innerHTML = 'Play relax music';
    soundButton.classList.toggle('play');
}

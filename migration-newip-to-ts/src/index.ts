import App from './components/app/app';
import { playPauseSound } from './components/sounds/sound1';
import { pauseSound } from './components/sounds/sound1';
import { soundButton } from './components/sounds/sound1';
import './global.css';

const app = new App();
app.start();

soundButton?.addEventListener('click', function (): void {
    if (soundButton?.classList.contains('play')) {
        pauseSound();
    } else {
        playPauseSound();
    }
});

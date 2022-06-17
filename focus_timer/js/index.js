import { Elements } from "./elements.js"
import { Timer } from "./timer.js"
import { Controls } from "./controls.js"

const {
    body,
    displayMinutes,
    displaySeconds,
    lightModeButton,
    darkModeButton,
    playButton,
    pauseButton,
    stopButton,
    incrementButton,
    decrementButton,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton
} = Elements;

// Declare default bindings for minutes and seconds
const defaultMinutes = 25, defaultSeconds = 0;

// Initialize timer functionalities
const timer = Timer(
    {
        displayMinutes,
        displaySeconds,
        defaultMinutes,
        defaultSeconds
    }
);

// Initialize controls functionalities
const controls = Controls(
    {
        timer,
        body,
        displayMinutes,
        lightModeButton,
        darkModeButton,
        playButton,
        pauseButton,
        stopButton,
        incrementButton,
        decrementButton,
        forestButton,
        rainButton,
        coffeeButton,
        fireplaceButton
    }
)

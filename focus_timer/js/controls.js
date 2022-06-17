import { Sounds } from "./sounds.js"

export function Controls({
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
}) {

    // Import audio from Sounds object
    const sounds = Sounds();

    // Setup buttons functionalities
    lightModeButton.addEventListener("click", function() {

        lightModeButton.classList.add("hidden");
        darkModeButton.classList.remove("hidden");
        
        body.classList.remove("in-light-mode")
        body.classList.add("in-dark-mode")

    })

    darkModeButton.addEventListener("click", function() {

        darkModeButton.classList.add("hidden");
        lightModeButton.classList.remove("hidden");

        body.classList.remove("in-dark-mode")
        body.classList.add("in-light-mode")

    })

    playButton.addEventListener("click", function() {

        timer.play();
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
        stopButton.classList.remove("disabled");
        sounds.buttonPress.play();
    })

    pauseButton.addEventListener("click", function() {

        timer.pause();
        pauseButton.classList.add("hidden");
        playButton.classList.remove("hidden");
        sounds.buttonPress.play();
    })

    stopButton.addEventListener("click", function() {

        if (stopButton.classList.contains("disabled")) {
            return

        } else {
            timer.stop();
            pauseButton.classList.add("hidden");
            playButton.classList.remove("hidden");
            stopButton.classList.add("disabled");
            sounds.buttonPress.play();            
        }

    })

    incrementButton.addEventListener("click", function() {

        timer.increment();
        sounds.buttonPress.play();

        decrementButton.classList.remove("disabled");

    })

    decrementButton.addEventListener("click", function() {

        if (decrementButton.classList.contains("disabled")) {
            return;
        } else {
            timer.decrement();
            sounds.buttonPress.play();
            incrementButton.classList.remove("disabled");
        }

    })

    forestButton.addEventListener("click", function() {
        let selectedButton = document.querySelector(".selected");
        selectedButton.classList.remove("selected");
        forestButton.classList.add("selected");
        
        selectedButton.children[1].classList.add("hidden");
        forestButton.children[1].classList.remove("hidden");

        sounds.rain.pause();
        sounds.coffee.pause();
        sounds.fireplace.pause();

        sounds.forest.play();
        sounds.forest.volume = forestButton.children[1].value / 100;

        document.querySelector(":root").style.setProperty("--color-angle", "70");
    })

    rainButton.addEventListener("click", function() {
        let selectedButton = document.querySelector(".selected");

        selectedButton.classList.remove("selected");
        rainButton.classList.add("selected");

        selectedButton.children[1].classList.add("hidden");
        rainButton.children[1].classList.remove("hidden");

        sounds.forest.pause();
        sounds.coffee.pause();
        sounds.fireplace.pause();

        sounds.rain.play();
        sounds.rain.volume = rainButton.children[1].value / 100;

        document.querySelector(":root").style.setProperty("--color-angle", "194");

    })

    coffeeButton.addEventListener("click", function() {
        let selectedButton = document.querySelector(".selected");
        selectedButton.classList.remove("selected");
        coffeeButton.classList.add("selected");

        selectedButton.children[1].classList.add("hidden");
        coffeeButton.children[1].classList.remove("hidden");

        sounds.forest.pause();
        sounds.rain.pause();
        sounds.fireplace.pause();

        sounds.coffee.play();
        sounds.coffee.volume = coffeeButton.children[1].value / 100;

        document.querySelector(":root").style.setProperty("--color-angle", "30");

    })

    fireplaceButton.addEventListener("click", function() {
        let selectedButton = document.querySelector(".selected");
        selectedButton.classList.remove("selected");
        fireplaceButton.classList.add("selected");

        selectedButton.children[1].classList.add("hidden");
        fireplaceButton.children[1].classList.remove("hidden");

        sounds.forest.pause();
        sounds.rain.pause();
        sounds.coffee.pause();

        sounds.fireplace.play();
        sounds.fireplace.volume = fireplaceButton.children[1].value / 100;

        document.querySelector(":root").style.setProperty("--color-angle", "0");

    })

    // When timer finishes:
    // --> Make pauseButton hidden
    // --> Make playButton visible
    // --> Disable stopButton
    document.addEventListener("timerFinishes", function() {

        pauseButton.classList.add("hidden");
        playButton.classList.remove("hidden");
        stopButton.classList.add("disabled");

        sounds.timerFinishes.play();

    })

    // When timer reaches less than 5 minutes:
    document.addEventListener("timerReachedLastFiveMinutes", function() {

        decrementButton.classList.add("disabled");

    })

    // When timer reaches its cap:
    document.addEventListener("timerReachedMaxValue", function() {
        incrementButton.classList.add("disabled");
    })
}
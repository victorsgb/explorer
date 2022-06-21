export function Timer({
    displayMinutes,
    displaySeconds,
    defaultMinutes,
    defaultSeconds
}) {
    // Function to refresh display
    const updateTimer = function(minutes, seconds) {
        
        displayMinutes.textContent = String(minutes).padStart(2, "0");
        displaySeconds.textContent = String(seconds).padStart(2, "0");

    }

    // Refresh timer when first loaded with default values
    updateTimer(defaultMinutes, defaultSeconds);

    // Event to be triggered when timer finishes its countdown
    const timerFinishes = new Event ("timerFinishes");

    // Event to be triggered when timer reaches less than five minutes
    const timerReachedLastFiveMinutes = new Event ("timerReachedLastFiveMinutes");

    // Event to be triggered when timer was set to maximum value
    const timerReachedMaxValue = new Event ("timerReachedMaxValue");

    // Declaration of bindings
    let timerID; // Used to pause/stop the timer
    let currentMinutes = Number(displayMinutes.textContent);
    let currentSeconds = Number(displaySeconds.textContent);

    const play = function() {

        currentMinutes = Number(displayMinutes.textContent);
        currentSeconds = Number(displaySeconds.textContent);

        timerID = setTimeout(function() {

            if (currentSeconds > 0) {
                currentSeconds--;
            }

            if (currentSeconds == 0 && currentMinutes > 0) {
                currentSeconds = 59;
                currentMinutes--;
            }

            updateTimer(currentMinutes, currentSeconds);

            if (currentMinutes <= 5) {
                document.dispatchEvent(timerReachedLastFiveMinutes);
            }

            if (currentMinutes == 0 && currentSeconds == 0) {
                document.dispatchEvent(timerFinishes);
                stop();
                return;
            } else {
                play();
            }
        }, 1000);
    }

    const pause = function() {
        clearTimeout(timerID);
    }

    const stop = function() {
        clearTimeout(timerID);
        updateTimer(defaultMinutes, defaultSeconds);
    }

    const clamp = (min, max, value) => {
        if (min > max) throw new Error('min cannot be greater than max');
        return value < min
            ? min
            : value > max
            ? max
            : value;
    }

    const increment = function() {

        currentMinutes = Number(displayMinutes.textContent);
        currentSeconds = Number(displaySeconds.textContent);

        currentMinutes = clamp(0, 95, currentMinutes + 5);
        updateTimer(currentMinutes, currentSeconds);

        defaultMinutes = clamp(5, 95, currentMinutes);

        if (defaultMinutes == 95) {
            document.dispatchEvent(timerReachedMaxValue);
        }
    }

    const decrement = function() {

        currentMinutes = Number(displayMinutes.textContent);
        currentSeconds = Number(displaySeconds.textContent);

        currentMinutes = clamp(0, 95, currentMinutes - 5);
        updateTimer(currentMinutes, currentSeconds);

        defaultMinutes = clamp(5, 95, currentMinutes);

        if (defaultMinutes <= 5) {
            document.dispatchEvent(timerReachedLastFiveMinutes);
        }

    }

    return {
        play,
        pause,
        stop,
        increment,
        decrement
    }
}
export function Sounds () {

    const forest = new Audio("./sounds/forest.wav");
    forest.loop = true;

    const rain = new Audio("./sounds/rain.wav");
    rain.loop = true;

    const coffee = new Audio("./sounds/coffee.wav");
    coffee.loop = true;

    const fireplace = new Audio("./sounds/fireplace.wav");
    fireplace.loop = true;

    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");

    const timerFinishes = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

    return {
        buttonPress,
        timerFinishes,
        forest,
        rain,
        coffee,
        fireplace
    }

}
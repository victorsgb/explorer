const hue = document.querySelector(":root")

let x = 0.0, y = 0.0;
let hueColor;
let baseColor = 194;

function changeHueValue() {
    setTimeout(() => {
        
        hueColor = baseColor + Math.sin(x) * 40;

        hue.style.setProperty("--hue", String(hueColor));

        // console.log(newColor);
        x += 0.1;
        changeHueValue();
    }, 100);
}

changeHueValue();

const colorAngle = document.querySelector(":root")

let x = 0.0;

function changeColorAngle() {
    setTimeout(() => {
        
        newColor = 194 + Math.sin(x) * 40;
        
        colorAngle.style.setProperty("--color-angle", String(newColor));

        // console.log(newColor);
        x += 0.1;
        changeColorAngle();
    }, 100);
}

changeColorAngle();
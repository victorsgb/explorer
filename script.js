import { Elements } from './elements.js';

const {
    root,
    body,
    img,
    lightModeButton,
    darkModeButton
} = Elements();

let baseColor = 194;

function updateColors(x=0) {
    setTimeout(() => {
        
        let hueColor = baseColor + Math.sin(x) * 40;

        if (body.classList.contains('in-light-mode')) {
            root.style.setProperty("--hue", String(hueColor));      
            root.style.setProperty("--bg-primary-light", `hsl(${String(hueColor)}, 80%, 93%)`);
            root.style.setProperty("--bg-primary-medium", `hsl(${String(hueColor)}, 70%, 86%)`);
            root.style.setProperty("--bg-primary-dark", `hsl(${String(hueColor)}, 50%, 15%)`);
            root.style.setProperty("--bg-primary-dark-transparent", `hsla(${String(hueColor)}, 50%, 15%, 0.2)`);
            root.style.setProperty("--bg-primary-dark-unavailable", `hsla(${String(hueColor)}, 50%, 15%, 0.4)`);
            root.style.setProperty("--bg-secondary-light", `hsl(${String(hueColor)}, 80%, 100%)`);
            root.style.setProperty("--fc-primary-dark", `hsl(${String(hueColor)}, 50%, 15%)`);
            root.style.setProperty("--fc-primary-dark-unavailable", `hsl(${String(hueColor)}, 50%, 25%)`);
            root.style.setProperty("--fc-primary-hover", `hsl(${String(hueColor)}, 100%, 30%)`);
            root.style.setProperty("--logo-symbol", `hsl(${String(hueColor)}, 100%, 15%)`);
            root.style.setProperty("--logo-text", `hsl(${String(hueColor)}, 100%, 15%)`);

            img.classList.add('img-in-light-mode');
            img.classList.remove('img-in-dark-mode');

        } else if (body.classList.contains('in-dark-mode')) {            
            root.style.setProperty("--hue", String(hueColor));      
            root.style.setProperty("--bg-primary-light", `hsl(${String(hueColor)}, 80%, 5%)`);
            root.style.setProperty("--bg-primary-medium", `hsl(${String(hueColor)}, 70%, 8%)`);
            root.style.setProperty("--bg-primary-dark", `hsl(${String(hueColor)}, 50%, 85%)`);
            root.style.setProperty("--bg-primary-dark-transparent", `hsla(${String(hueColor)}, 50%, 85%, 0.2)`);
            root.style.setProperty("--bg-primary-dark-unavailable", `hsla(${String(hueColor)}, 50%, 15%, 0.4)`);
            root.style.setProperty("--bg-secondary-light", `hsl(${String(hueColor)}, 80%, 15%)`);
            root.style.setProperty("--fc-primary-dark", `hsl(${String(hueColor)}, 50%, 85%)`);
            root.style.setProperty("--fc-primary-dark-unavailable", `hsl(${String(hueColor)}, 50%, 35%)`);
            root.style.setProperty("--fc-primary-hover", `hsl(${String(hueColor)}, 100%, 70%)`);
            root.style.setProperty("--logo-symbol", `hsl(${String(hueColor)}, 100%, 85%)`);
            root.style.setProperty("--logo-text", `hsl(${String(hueColor)}, 100%, 85%)`);

            img.classList.add('img-in-dark-mode');
            img.classList.remove('img-in-light-mode');

        }
 
        // console.log(newColor);
        x += 0.1;
        updateColors(x);
    }, 100);
}

lightModeButton.addEventListener("click", () => {
    lightModeButton.classList.add("hidden");
    darkModeButton.classList.remove("hidden");

    body.classList.add("in-dark-mode");
    body.classList.remove("in-light-mode");
});

darkModeButton.addEventListener("click", () => {
    darkModeButton.classList.add("hidden");
    lightModeButton.classList.remove("hidden");
    body.classList.add("in-light-mode");
    body.classList.remove("in-dark-mode");
});


updateColors();

export function Elements(){

  const root = document.querySelector(":root")

  let body = root.children[1];

  let main = body.querySelector("main");

  let img = main.querySelector("#whats-next #chart img");

  const lightModeButton = body.querySelector(".light-mode");
  const darkModeButton = body.querySelector(".dark-mode");

  return {
    root,
    body,
    img,
    lightModeButton,
    darkModeButton
  }
}
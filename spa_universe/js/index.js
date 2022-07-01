import Router from "./router.js"

const router = new Router(); 

router.add("/", "/pages/home.html", "url(images/mountains-universe-1.png)");
router.add("/universe", "/pages/universe.html", "url(images/mountains-universe-2.png)");
router.add("/explore", "/pages/explore.html", "url(images/mountains-universe-3.png)");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

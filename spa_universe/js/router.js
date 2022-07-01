export default class Router {

    routes = {404: ["/pages/404.html", "url(images/mountains-universe-1.png)"]};

    add(pathname, page, image) {
        this.routes[pathname] = [page, image];
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
   
        window.history.pushState({}, '', event.target);
    
        this.handle();
    }
    
    handle() {
        const pathname = window.location.pathname;

        const route = this.routes.hasOwnProperty(pathname)? this.routes[pathname][0] : this.routes[404][0];
        
        const bg_image = this.routes.hasOwnProperty(pathname)? this.routes[pathname][1] : this.routes[404][1];

        document.querySelector(":root").children[1].style.setProperty("background-image", bg_image);

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html;
        })

    }

}
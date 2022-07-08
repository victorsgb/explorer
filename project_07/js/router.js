export default class Router {

    routes = {404: "/pages/404.html"};

    add(pathname, page) {
        this.routes[pathname] = page;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
   
        window.history.pushState({}, '', event.target);
    
        this.handle();
    }
    
    handle() {
        const pathname = window.location.pathname;

        const route = this.routes[pathname] || this.routes[404];
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html;
        })

    }

}
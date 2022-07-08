import { GitHubUser } from "./githubUser.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        
        this.load();
        
    }

    async add(username) {

        try {

            const userExists = this.entries.find(user => user.login === username);

            if (userExists) {
                throw new Error("Usuário já cadastrado");
            }

            const user = await GitHubUser.search(username);
            
            if (user.login === undefined) {
                throw new Error("Usuário não encontrado");
            }
            
            this.entries = [user, ...this.entries];
            this.update();
            this.save();

        } catch(e) {
            alert(e.message);
        }
    }

    save() {
        localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => {
            return entry.login !== user.login;
        });

        this.entries = filteredEntries;
        this.save();
        this.update();
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root);

        this.tbody = this.root.querySelector("tbody");

        this.update();
        this.onAdd();
    }

    onAdd() {
        const addButton = this.root.querySelector(".search button");
        addButton.onclick = () => {
            const { value } = this.root.querySelector(".search #input-search");
            this.add(value);
        };
    }

    update() {
        this.removeAllTr();

        this.entries.forEach((user) => {
            const row =         this.createTr();
            
            row.querySelector(".user img").src = `https://github.com/${user.login}.png`;

            row.querySelector(".user img").alt = `Imagem de ${user.name}`;

            row.querySelector(".user a").href = `https://github.com/${user.login}`;

            row.querySelector(".user a p").textContent = user.name;

            row.querySelector(".user a span").textContent = user.login;

            row.querySelector(".repositories").textContent = user.public_repos;

            row.querySelector(".followers").textContent = user.followers;

            row.querySelector(".remove").onclick = () => this.delete(user);

            this.tbody.append(row);
        })
    }

    removeAllTr(){
        this.tbody.querySelectorAll("tr").forEach(tr => {
            tr.remove();
        })
    }

    createTr() {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/victorsgb.png" alt="Imagem de Victor">
            <a href="https://github.com/victorsgb" target="_blank">
                <p>Victor Baptista</p>
                <span>victorsgb</span>   
            </a>
        </td>
        <td class="repositories">
            3
        </td>
        <td class="followers">
            11
        </td>
        <td class="remove">
            <button class="&times;">&times;</button>
        </td>
        `

        return tr;
    }
}
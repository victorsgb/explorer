export class GitHubUser {

    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({login, name, public_repos, followers}) => ({login, name, public_repos, followers}));
        // Aqui abaixo uma forma simplificada do que está acontecendo acima
        // .then(data => {

        //     return {
        //         login: data.login,
        //         name: data.name,
        //         public_repos: data.public_repos,
        //         followers: data.followers
        //     }
        // })
    }
}
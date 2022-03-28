import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const template = document.querySelector('#projects .col');
document.querySelector('#projects .col').remove();

const octokit = new Octokit();

octokit.rest.repos.listForUser({
    username: 'TrAsKiN',
}).then(({ data }) => {
    document.querySelector('#loading').remove();
    data.forEach(repo => {
        if (repo.description && !repo.fork && !repo.archived) {
            var card = template.cloneNode(true);
            card.querySelector('.card-title').innerHTML = repo.name;
            card.querySelector('.card-text').innerHTML = repo.description;
            card.querySelector('.card-link').setAttribute('href', repo.html_url);
            card.classList.remove('d-none');
            document.querySelector('#projects').appendChild(card);
        }
    });
});

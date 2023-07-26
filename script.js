const sources = [
    // Tier 1
    { name: 'Julien Maynard', type: 'journalist', tier: 1, workplace: 'PSG', link: 'JulienMaynard' },
    { name: 'Ambre Godillon', type: 'journalist', tier: 1, workplace: 'PSG', link: 'AmbreGodillon' },
    { name: 'Fabrice Porzyc', type: 'journalist', tier: 1, workplace: 'PSG', link: 'fabriceporzyc' },
    { name: 'Bruno Salomon', type: 'journalist', tier: 1, workplace: 'France Bleu Paris', link: 'bruno_salomon' },
    { name: 'Saber Desfarges', type: 'journalist', tier: 1, workplace: 'TF1', link: 'SaberDesfa' },
    { name: 'Benjamin Quarez', type: 'journalist', tier: 1, workplace: 'Le Parisien', link: 'B_Quarez' },
    { name: 'Adrien Chantegrelet', type: 'journalist', tier: 1, workplace: 'Le Parisien', link: 'Adrientp' },
    { name: 'Marc Mechenoua', type: 'journalist', tier: 1, workplace: 'GOAL', link: 'LeMechenoua' },
    { name: 'Rubén Uría', type: 'journalist', tier: 1, workplace: 'Sport.es', link: 'rubenuria' },
    { name: 'beIN SPORTS', type: 'media', tier: 1, link: 'https://twitter.com/beinsports_FR' },
    // Tier 2
    { name: 'Philippe Goguet', type: 'journalist', tier: 2, workplace: 'CulturePSG', link: 'pgoguet' },
    { name: 'Guillaume Maillard-Pacini', type: 'journalist', tier: 2, workplace: 'Eurosport', link: 'Guillaumemp' },
    { name: 'Fabrice Hawkins', type: 'journalist', tier: 2, workplace: 'RMC', link: 'FabriceHawkins' },
    { name: 'Loïc Tanzi', type: 'journalist', tier: 2, workplace: 'L’Équipe', link: 'Tanziloic' },
    { name: 'Gianluca Di Marzio', type: 'journalist', tier: 2, workplace: 'Sky Sport', link: 'DiMarzio' },
    { name: 'Florian Plettenberg', type: 'journalist', tier: 2, workplace: 'Sky Sport', link: 'Plettigoal' },
    { name: 'Ben Jacobs', type: 'journalist', tier: 2, link: 'JacobsBen' },
    { name: 'Ben Jacobs', type: 'journalist', tier: 2, link: 'JacobsBen' },
    { name: 'CulturePSG', type: 'media', tier: 2, link: 'CulturePSG' },
    // Tier 3
    { name: 'Adrià Albets', type: 'journalist', tier: 3, workplace: 'Cadena SER', link: 'AdriaAlbets' },
    { name: 'Onda Cero', type: 'media', tier: 3, link: 'OndaCero_es' },
    // Tier 4
    { name: 'Francesc Aguilar', type: 'journalist', tier: 4, workplace: 'MD', link: 'FApor_elmundo' },
    { name: 'Tuttosport', type: 'media', tier: 4, link: 'tuttosport' },
    // Tier 5
    { name: 'Adrián Sánchez', type: 'journalist', tier: 5, workplace: 'Más Que Pelotas', link: '_AdrianSnchz' },
    { name: 'Twitter ITKs', type: 'media', tier: 5, link: '' },
    // Aggregators
    { name: 'ActualiteBarca', tier: 'aggregator', link: 'ActualiteBarca' },
];

sources.forEach(source => {
    document.querySelector(`.tier-${source.tier} .tier-content`).appendChild(
        document.createRange().createContextualFragment(
            `<a class="source ${source.type === 'journalist' ? 'journalist' : source.type === 'media' ? 'media' : 'aggregator'}" href="https://twitter.com/${source.link}" target="_blank">
            ${source.type !== 'journalist' ? source.name : `${source.name} <span class="workplace">(${source.workplace})</span>`}
            </a>`
        )
    );
})

document.querySelectorAll('.tier-content').forEach(node => {
    const element = node.querySelector('.media, .aggregator');
    if (element && element.classList.contains('media')) {
        node.insertBefore(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
    else if (element && element.classList.contains('aggregator')) {
        node.appendChild(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
})

document.querySelector('.tier-aggregator .tier-content').appendChild(
    document.createRange().createContextualFragment(
        `<div class="tier-notes">Note that the following accounts are just news aggregators. They merely report transfer related stories and rumors, but are not the actual source of the story itself.</div>`
    )
);

document.querySelector('.last-update a').setAttribute('href', update.thread);
document.querySelector('.last-update a').textContent = `Last update: ${new Date(update.time).toUTCString().slice(0, 16)}`;

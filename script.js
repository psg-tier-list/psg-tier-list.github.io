const sources = [
    // Tier 1
    { name: 'Julien Maynard', type: 'journalist', tier: 1, workplace: 'PSG', link: 'JulienMaynard' },
    { name: 'Ambre Godillon', type: 'journalist', tier: 1, workplace: 'PSG', link: 'AmbreGodillon' },
    { name: 'Fabrice Porzyc', type: 'journalist', tier: 1, workplace: 'PSG', link: 'fabriceporzyc' },
    { name: 'Bruno Salomon', type: 'journalist', tier: 1, workplace: 'France Bleu Paris', link: 'bruno_salomon' },
    { name: 'Saber Desfarges', type: 'journalist', tier: 1, workplace: 'TF1', link: 'SaberDesfa' },
    { name: 'Benjamin Quarez', type: 'journalist', tier: 1, workplace: 'Le Parisien', link: 'B_Quarez' },
    { name: 'Marc Mechenoua', type: 'journalist', tier: 1, workplace: 'GOAL', link: 'LeMechenoua' },
    { name: 'Fabrice Hawkins', type: 'journalist', tier: 1, workplace: 'RMC', link: 'FabriceHawkins' },
    { name: 'beIN SPORTS', type: 'media', tier: 1, link: 'https://twitter.com/beinsports_FR' },
    // Tier 2
    { name: 'Guillaume Maillard-Pacini', type: 'journalist', tier: 2, workplace: 'Eurosport', link: 'Guillaumemp' },
    { name: 'Rubén Uría', type: 'journalist', tier: 2, workplace: 'Sport.es', link: 'rubenuria' },
    { name: 'Gianluca Di Marzio', type: 'journalist', tier: 2, workplace: 'Sky Sport', link: 'DiMarzio' },
    { name: 'Ben Jacobs', type: 'journalist', tier: 2, workplace: 'Freelance', link: 'JacobsBen' },
    { name: 'Adrien Chantegrelet', type: 'journalist', tier: 2, workplace: 'Le Parisien', link: 'Adrientp' },
    { name: 'Marcelo Bechler', type: 'journalist', tier: 2, workplace: 'TNT Sports', link: 'marcelobechler' },
    { name: 'Bruno Andrade', type: 'journalist', tier: 2, workplace: 'UOL Esporte', link: 'brunoandrd' },
    { name: 'Djamel', type: 'journalist', tier: 2, workplace: 'Freelance', link: 'Djaameel_' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 2, workplace: 'Freelance', link: 'FabrizioRomano' },
    { name: 'Esam', type: 'journalist', tier: 2, workplace: 'SPORTS ZONE', link: 'EsamB2Back' },
    { name: 'RMC Sport', type: 'media', tier: 2, link: 'RMCsport' },
    { name: 'A Bola', type: 'media', tier: 2, link: 'abolapt' },
    { name: 'SPORTS ZONE', type: 'media', tier: 2, link: 'SportsZone__' },
    // Tier 3
    { name: 'Alessandro Grandesso', type: 'journalist', tier: 3, workplace: 'Gazzetta dello Sport', link: 'agrandesso' },
    { name: 'Nicolò Schira', type: 'journalist', tier: 3, workplace: 'Gazzetta dello Sport', link: 'NicoSchira' },
    { name: 'Maxime Dupuis', type: 'journalist', tier: 3, workplace: 'Eurosport', link: 'maximedupuis' },
    { name: 'Nicolas Hortus', type: 'journalist', tier: 3, workplace: 'Canal Supporters', link: 'NicolasHortus' },
    { name: 'Matteo Moretto', type: 'journalist', tier: 3, workplace: 'Relevo', link: 'MatteMoretto' },
    { name: 'Mohamed Bouhafsi', type: 'journalist', tier: 3, workplace: 'France Télévisions', link: 'mohamedbouhafsi' },
    { name: 'Florian Plettenberg', type: 'journalist', tier: 3, workplace: 'Sky Sport', link: 'Plettigoal' },
    { name: 'Santi Aouna', type: 'journalist', tier: 3, workplace: 'Foot Mercato', link: 'Santi_J_FM' },
    { name: 'Abdellah Boulma', type: 'journalist', tier: 3, workplace: 'Sports.fr', link: 'AbdellahBoulma' },
    { name: 'Omar Altundag', type: 'journalist', tier: 3, workplace: 'Freelance', link: 'OmarAlt14' },
    { name: 'Philippe Goguet', type: 'journalist', tier: 3, workplace: 'CulturePSG', link: 'pgoguet' },
    { name: 'Loïc Tanzi', type: 'journalist', tier: 3, workplace: 'L’Équipe', link: 'Tanziloic' },
    { name: 'Jason Burt', type: 'journalist', tier: 3, workplace: 'The Telegraph', link: 'JBurtTelegraph' },
    { name: 'Romain Molina', type: 'journalist', tier: 3, workplace: 'Freelance', link: 'Romain_Molina' },
    { name: 'Eurosport', type: 'media', tier: 3, link: 'Eurosport_FR' },
    { name: 'Le Parisien', type: 'media', tier: 3, link: 'le_Parisien' },
    { name: 'L’Équipe', type: 'media', tier: 3, link: 'lequipe' },
    { name: 'Sky Sport', type: 'media', tier: 3, link: 'SkySports' },
    { name: 'CulturePSG', type: 'media', tier: 3, link: 'CulturePSG' },
    { name: 'France Football', type: 'media', tier: 3, link: 'francefootball' },
    { name: 'Canal Supporters', type: 'media', tier: 3, link: 'CanalSupporters' },
    { name: 'The Athletic', type: 'media', tier: 3, link: 'TheAthletic' },
    { name: 'Gazzetta dello Sport', type: 'media', tier: 3, link: 'Gazzetta_it' },
    { name: 'Foot Mercato', type: 'media', tier: 3, link: 'footmercato' },
    { name: 'O Jogo', type: 'media', tier: 3, link: 'ojogo' },
    // Tier 4
    { name: 'Dominique Sévérac', type: 'journalist', tier: 4, workplace: 'Le Parisien', link: 'le_Parisien' },
    { name: 'Daniel Riolo', type: 'journalist', tier: 4, workplace: 'RMC', link: 'DanielRiolo' },
    { name: 'Romain Collet-Gaudin', type: 'journalist', tier: 4, workplace: 'Eurosport', link: 'RomainCG75' },
    { name: 'Simone Rovera', type: 'journalist', tier: 4, workplace: 'Freelance', link: 'SimoneRovera' },
    { name: 'Arthur Perrot', type: 'journalist', tier: 4, workplace: 'RMC', link: 'ArthurPerrot' },
    { name: 'Antonio Vitiello', type: 'journalist', tier: 4, workplace: 'Tuttosport', link: 'AntoVitiello' },
    { name: 'Duncan Castles', type: 'journalist', tier: 4, workplace: 'Freelance', link: 'DuncanCastles' },
    { name: 'Jonathan Johnson', type: 'journalist', tier: 4, workplace: 'CBS Sports', link: 'Jon_LeGossip' },
    { name: 'Julien Laurens', type: 'journalist', tier: 4, workplace: 'ESPN', link: 'LaurensJulien' },
    { name: 'Dario Divialle', type: 'journalist', tier: 4, workplace: 'Sud Radio', link: 'DivialleDario' },
    { name: 'The Telegraph', type: 'media', tier: 4, link: 'TeleFootball' },
    { name: 'The Guardian', type: 'media', tier: 4, link: 'guardian' },
    { name: 'Tuttosport', type: 'media', tier: 4, link: 'tuttosport' },
    { name: 'CBS Sports', type: 'media', tier: 4, link: 'CBSSportsGolazo' },
    { name: 'Canal+', type: 'media', tier: 4, link: 'CanalplusSport' },
    { name: 'RTL', type: 'media', tier: 4, link: 'rtlinfo' },
    { name: 'ESPN', type: 'media', tier: 4, link: 'ESPNFC' },

    { name: 'Record', type: 'media', tier: 4, link: 'Record_Portugal' },
    { name: 'SPORT', type: 'media', tier: 4, link: 'sport' },
    // Tier 5
    { name: 'Phillipe Sanfourche', type: 'journalist', tier: 5, workplace: 'RTL', link: 'PhilSANFOURCHE' },
    { name: 'Damien Degorre', type: 'journalist', tier: 5, workplace: 'L’Équipe', link: 'lequipe' },
    { name: 'Arnaud Hermant', type: 'journalist', tier: 5, workplace: 'L’Équipe', link: 'lequipe' },
    { name: 'Gilles Favard', type: 'journalist', tier: 5, workplace: 'Freelance', link: 'GillesFavard' },
    { name: 'Grégory Schneider', type: 'journalist', tier: 5, workplace: 'Libération', link: 'SchneiderGrgory' },
    { name: 'Nabil Djellit', type: 'journalist', tier: 5, workplace: 'Freelance', link: 'Nabil_djellit' },
    { name: 'Sabri', type: 'journalist', tier: 5, workplace: 'Freelance', link: 'Sabripsgourien' },
    { name: 'giltorcy', type: 'journalist', tier: 5, workplace: 'Freelance', link: 'gilpsg77' },
    { name: 'Pedro Morata', type: 'journalist', tier: 5, workplace: 'Marca', link: 'pedro_morata' },
    { name: 'Javi Miguel', type: 'journalist', tier: 5, workplace: 'Marca', link: 'fansjavimiguel' },
    { name: 'Max Miotto', type: 'journalist', tier: 5, workplace: 'PSG COMMUNITY', link: 'Maxmiotto_' },
    { name: 'Miloud Kotbi', type: 'journalist', tier: 5, workplace: 'PSG COMMUNITY', link: 'miloudkotbi' },
    { name: 'Mohamed Kotbi', type: 'journalist', tier: 5, workplace: 'PSG COMMUNITY', link: 'MohaKouldBe' },
    { name: 'Vincent Duluc', type: 'journalist', tier: 5, workplace: 'L’Équipe', link: 'vincentduluc' },
    { name: 'Rudy Galetti', type: 'journalist', tier: 5, workplace: 'Freelance', link: 'RudyGaletti' },
    { name: 'Rodrigo Fáez', type: 'journalist', tier: 5, workplace: 'Freelance', link: 'RodrigoFaez' },
    { name: 'The Mirror', type: 'media', tier: 5, link: 'DailyMirror' },
    { name: 'AS', type: 'media', tier: 5, link: 'diarioas' },
    { name: 'Mundo Deportivo', type: 'media', tier: 5, link: 'mundodeportivo' },
    { name: 'Bleacher Report', type: 'media', tier: 5, link: 'BleacherReport' },
    { name: 'The Sun', type: 'media', tier: 5, link: 'TheSun' },
    { name: 'El Chiringuito', type: 'media', tier: 5, link: 'elchiringuitotv' },
    { name: 'Daily Mail', type: 'media', tier: 5, link: 'DailyMailUK' },
    { name: 'PSGInside_Actus', type: 'media', tier: 5, link: 'PSGInside_Actus' },
    { name: 'J.D Team Paris', type: 'media', tier: 5, link: 'JDTeamPSG1' },
    { name: 'E. FM info foot', type: 'media', tier: 5, link: 'EFMinfofoot' },
    { name: 'PSG REPORTER', type: 'media', tier: 5, link: 'Psg_reporter' },
    { name: 'MARCA', type: 'media', tier: 5, link: 'marca' },
    { name: 'PSG COMMUNITY', type: 'media', tier: 5, link: 'psgcommunity_' },
    // Aggregators
    { name: 'PSGhub', tier: 'aggregator', link: 'PSGhub' },
    { name: 'PSG Report', tier: 'aggregator', link: 'PSG_Report' },
    { name: 'PSG Talk', tier: 'aggregator', link: 'PSGTalk' },
    { name: 'Paris_SGINFOS', tier: 'aggregator', link: 'Paris_SGINFOS' },
    { name: 'MEGA PSG', tier: 'aggregator', link: 'MegaPSG_' },
    { name: 'Paris Galaxy', tier: 'aggregator', link: 'ParisGalaxyOff' },
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

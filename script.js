// Array de filmes com informações
const movies = [
    {
        id: 1,
        title: "Velozes e Furiosos",
        year: 2001,
        rating: 6.8,
        description: "Dominic Toretto é um criminoso que lidera um bando de pilotos de carros roubados. Brian O'Conner é um policial infiltrado que tenta capturá-lo. Quando Brian se vê envolvido no mundo dos corredores ilegais, uma amizade improvável surge entre os dois.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    },
    {
        id: 2,
        title: "Velozes e Furiosos 2",
        year: 2003,
        rating: 6.5,
        description: "Brian O'Conner retorna para uma nova missão no Japão, onde enfrenta novos desafios e conhece novos personagens no mundo das corridas ilegais.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    },
    {
        id: 3,
        title: "Velozes e Furiosos 3",
        year: 2006,
        rating: 6.3,
        description: "Dom Toretto sai da prisão e se vê envolvido em uma série de roubos de combustível que o levam a enfrentar novos inimigos e desafios.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    },
    {
        id: 4,
        title: "Velozes e Furiosos 4",
        year: 2009,
        rating: 6.6,
        description: "Dom Toretto e Brian O'Conner se unem novamente para uma missão de vingança contra um traficante de drogas poderoso.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    },
    {
        id: 5,
        title: "Velozes e Furiosos 5",
        year: 2011,
        rating: 7.0,
        description: "Dom e sua equipe planejam um roubo audacioso no Rio de Janeiro, enfrentando a polícia e criminosos locais.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    },
    {
        id: 6,
        title: "Velozes e Furiosos 6",
        year: 2013,
        rating: 7.0,
        description: "Dom e sua equipe enfrentam um criminoso internacional em uma série de missões ao redor do mundo.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    },
    {
        id: 7,
        title: "Velozes e Furiosos 7",
        year: 2015,
        rating: 7.1,
        description: "A equipe se reúne para uma última missão, enfrentando um vilão misterioso e poderoso.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    },
    {
        id: 8,
        title: "Velozes e Furiosos 8",
        year: 2017,
        rating: 6.6,
        description: "Dom enfrenta um novo desafio quando uma mulher misteriosa o recruta para uma missão que o coloca contra sua própria equipe.",
        iframeUrl: "https://www.youtube.com/embed/tKF6qe-YSWY",
        emoji: "🏎️"
    }
];

// Função para renderizar os filmes
function renderMovies(moviesToRender = movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    moviesGrid.innerHTML = '';

    moviesToRender.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.onclick = () => openModal(movie);

        movieCard.innerHTML = `
            <div class="movie-thumbnail">
                <span style="font-size: 80px;">${movie.emoji}</span>
                <div class="play-button">▶</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-year">${movie.year}</div>
                <div class="movie-rating">
                    <span>⭐ ${movie.rating}</span>
                </div>
            </div>
        `;

        moviesGrid.appendChild(movieCard);
    });
}

// Função para abrir o modal
function openModal(movie) {
    const modal = document.getElementById('movieModal');
    const movieFrame = document.getElementById('movieFrame');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    movieFrame.src = movie.iframeUrl;
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('movieModal');
    const movieFrame = document.getElementById('movieFrame');

    modal.style.display = 'none';
    movieFrame.src = '';
    document.body.style.overflow = 'auto';
}

// Função para pesquisar filmes
function searchMovies() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        renderMovies(movies);
        return;
    }

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.year.toString().includes(searchTerm)
    );

    renderMovies(filteredMovies);
}

// Função para permitir Enter na busca
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchMovies();
        }
    });

    // Fechar modal ao clicar fora
    const modal = document.getElementById('movieModal');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Renderizar filmes inicialmente
    renderMovies();
});

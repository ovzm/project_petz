document.addEventListener('DOMContentLoaded', function() {
    var flkty = new Flickity('.carousel', {
        wrapAround: true,
        // Outras opções de configuração podem ser adicionadas aqui
    });
});

const slider = document.querySelector('.js-slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    slider.scrollBy({ left: -slider.offsetWidth / 4 * 4, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    slider.scrollBy({ left: slider.offsetWidth / 4 * 4, behavior: 'smooth' });
});
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


/* ! MORE - DROP BOX */
function toggleText() {
    var extraContent = document.getElementById('extra-content');
    var toggleLink = document.getElementById('toggle-link');
    var closeLink = document.getElementById('close-link');

    if (extraContent.classList.contains('expanded')) {
        extraContent.classList.remove('expanded');
        setTimeout(function() {
            extraContent.classList.add('hidden');
        }, 500); // Tempo para coincidir com a duração da animação
        toggleLink.style.display = "inline";
        closeLink.style.display = "none";
    } else {
        extraContent.classList.remove('hidden');
        setTimeout(function() {
            extraContent.classList.add('expanded');
        }, 10); // Pequeno atraso para garantir que a animação de expansão funcione
        toggleLink.style.display = "none";
        closeLink.style.display = "inline";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    NiceSelect.bind(document.getElementById("language-select-bottom"), { searchable: true });

    // Script for short Carousel active 
    let productCarousel = new Splide('.product-carousel', {
        perPage: 1,
        rewind: true,
        arrows: true,
        pagination: false,
        gap: 15,
        type: 'fade',
        arrowPath: 'M38.7 10.6H0M0 9.6h38.7v2H0z M29.4 21.4L27.9 20l9.4-9.3-9.4-9.3L29.4 0l10.7 10.7z'
    });
    productCarousel.mount();


    // Script for Read more/less content 
    if (document.getElementById('posts') !== null) {
        const posts = document.getElementById('posts');
        posts.addEventListener('click', function (event) {
            event.preventDefault();
            const readMoreBtn = event.target.closest('.read-more');
            btnText = readMoreBtn.innerHTML;
            if (!readMoreBtn) return;
            if (btnText == 'Read More') {
                readMoreBtn.parentElement.classList.add('show-more')
                readMoreBtn.innerHTML = 'Read Less';
            } else {
                readMoreBtn.parentElement.classList.remove('show-more')
                readMoreBtn.innerHTML = 'Read More';
            }
        })
    }
})
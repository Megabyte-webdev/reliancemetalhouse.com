window.addEventListener('load', () => {
function loadAnims() {

        var elementsToShow = document.querySelectorAll('.animate');
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            }
        });

        const element = document.querySelectorAll('.is-in-view');
        element.forEach((el)=> {
            if (isElementVisible(el)) {
                el.classList.add("is-visible");
            } else {
                el.classList.remove("is-visible");
            }
        })
    }
    const body=document.querySelector('body');
    body.onscroll= loadAnims
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return ((rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
    }
    loadAnims()
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= (element.closest('.hero-section')? -200: 0) &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    
    })
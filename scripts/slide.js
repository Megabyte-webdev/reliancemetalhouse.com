window.addEventListener('load', () => {

    const slider = document.querySelector('.slide-images');
    var slideView = document.querySelector('.full-image');

    for (let i = 1; i <= 18; i++) {
        let img = document.createElement('img');
        img.src = `./images/img${i}.jpg`;
        if (i === 5) img.className = "active";
        slider.appendChild(img);
    }
    var images = document.querySelectorAll('.slide-images img');
    let counter = 0;
    let slideShow;
    
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    
    slideView.style.backgroundImage = "url("+images[0].src+")";
    function autoSlide() {
        images[counter].className = "";
        counter = (counter+1)%images.length;
        slideView.style.backgroundImage = "url("+images[counter].src+")";
        slider.scrollLeft = images[0].offsetWidth*counter;
        images[counter].className = "active";
    }
    function gotoSlide(n) {
        clearInterval(slideShow);
        images[counter].className = "";
        counter = n%images.length;
        slideView.style.backgroundImage = "url("+images[counter].src+")";
        images[counter].className = "active";
        slider.scrollLeft = images[0].offsetWidth*counter;
        slideShow = setInterval(autoSlide, 3000)
    }
    
    window.addEventListener("scroll", function(){
        if (isElementVisible(slideView)) {
        setTimeout(function() {
            gotoSlide(counter)
        }, 1000)
    }   
    
    })
    

    images.forEach((e, index) => {
        e.addEventListener('click', () => {
            gotoSlide(index);
        });
    });



});
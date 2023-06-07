 
 


function alternarCor() {
    var body = document.querySelector('body');
    var texto = document.querySelector('#btn_tema');
    var corAtual = window.getComputedStyle(body).backgroundColor;

    if (corAtual === 'rgb(27, 32, 33)' || corAtual === '#1B2021') {
        body.style.backgroundColor = 'white';
        texto.innerHTML="<h1>light</h1>"
    } else {
        body.style.backgroundColor = '#1B2021';
        texto.innerHTML="<h1>dark</h1>"
    }
}
 
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
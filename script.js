var slideIndex = 1;
showSlides(slideIndex);
let t = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function act() {
    let tar;
    tar = document.querySelectorAll('.list')[0];
    console.log(tar);
    t++;
    if (t % 2 == 0) {
        tar.style.height = '100px';
        tar.style.opacity='1';
        tar.style.display = 'block';
        document.querySelector('.education').style.height='140px';
    } else {
        tar.style.height = '0px';
        document.querySelector('.education').style.height='35px';
        tar.style.opacity='0';
        tar.style.display = 'none';
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log('lol');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
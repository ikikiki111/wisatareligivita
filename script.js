let slideIndex = 1;
let currentEffect = 'fade';
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
let autoSlideInterval;

function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}


    for (let i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
        slides[i].className = "slide";
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex-1].className = "slide active " + currentEffect;
    dots[slideIndex-1].className += " active";
}


function changeSlide(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}


function currentSlide(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}


function setEffect(effect) {
    currentEffect = effect;
    showSlides(slideIndex);
}


function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000); 
}

showSlides(slideIndex);
startAutoSlide();


document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    startAutoSlide();
});


function sendToWhatsApp(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
    

    if (!nama || !email || !pesan) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        return false;
    }


    document.getElementById('errorMessage').style.display = 'none';
    

    document.getElementById('successMessage').style.display = 'block';

  
    const pesanWhatsApp = `Halo, saya ${nama} (${email}) ingin mengirim pesan:\n\n${pesan}`;
    

    const pesanEncoded = encodeURIComponent(pesanWhatsApp);
    
 
    const nomorWhatsApp = '6285293343432'; 
    

    const whatsappURL = `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;
    

    window.open(whatsappURL, '_blank');
    

    document.getElementById('whatsappForm').reset();
    
    return false;
}
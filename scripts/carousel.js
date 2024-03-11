let slidesIndex = 0;
let slides = document.getElementsByClassName('myImage');
let dots = document.getElementsByClassName("dot");
let slideInterval;

showSlides();
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidesIndex++;
    if (slidesIndex > slides.length) {
        slidesIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ")
    }
    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex - 1].className += " active";
    slideInterval = setTimeout(showSlides, 3000);
}


/* COMMENT: the following actions have been put in comments as for design reasons I didnt need the buttons
   COMMENT: all of the JS actions is activated in a seperate file that will be submited in the end altogether
function prevSlide(){
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slidesIndex--;
    if(slidesIndex < 1) {
        slidesIndex = slides.length;
    }
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active")}
    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex-1].className += " active";
}

function nextSlide(){
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slidesIndex++;
    if(slidesIndex > slides.length){
        slidesIndex = 1;
    }
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", " ")
    }
    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex - 1].className += " active";
}

function playSlide(){
    slideInterval = setTimeout(showSlides, 3000);
}

function stopSlide(){
    clearTimeout(slideInterval);
}*/
function currentSlide(imageNumber) {
    console.log('currentSlide', imageNumber)
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slidesIndex = imageNumber;
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ")
    }
    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex - 1].className += " active";
}


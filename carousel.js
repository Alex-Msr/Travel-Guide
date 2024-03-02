let slidesIndex = 0;
let slides = document.getElementsByClassName('myImage');
let dots = document.getElementsByClassName("dot");
let slideInterval;

showSlides();
function showSlides(){
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slidesIndex++;
    if(slidesIndex > slides.length){
        slidesIndex = 1;
    }
    for(let i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", " ")
    }
    slides[slidesIndex - 1].style.display = "block";
    dots[slidesIndex-1].className += " active";
    slideInterval = setTimeout (showSlides, 3000);

    //for (i = 0; i < slides.length; i++) {
     //   slides[i].style.opacity = 0;
    //  }
    //  slidesIndex++;
    //  if (slidesIndex > slides.length) {
    //    slidesIndex = 1
   //   }
   //  slides[slidesIndex - 1].style.opacity = 1;
}

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
}
function currentSlide(imageNumber){
    console.log('currentSlide', imageNumber)
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slidesIndex = imageNumber;
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", " ")
    }
    slides[slidesIndex-1].style.display="block";
    dots[slidesIndex-1].className += " active";
}


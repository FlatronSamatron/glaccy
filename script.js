let slides = document.getElementsByClassName('mySlides');
let dot = document.getElementsByClassName('dot');


function currentSlide(n){
    for(let i = 0; i<slides.length; i++){
        slides[i].classList.add('hide');
    }
    slides[n-1].classList.remove('hide');
    if(n == 1){
        document.body.style.backgroundColor ="#849d8f";
    }
    if(n == 2){
        document.body.style.backgroundColor ="#8996a6";
    }
    if(n == 3){
        document.body.style.backgroundColor ="#9e8c85";
    }
}


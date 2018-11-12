let slides = document.getElementsByClassName('mySlides');
let dot = document.getElementsByClassName('dot');
let forma = document.getElementById('forma');

function currentSlide(n){
    for(let i = 0; i<slides.length; i++){
        slides[i].classList.add('hide');
        dot[i].classList.remove('active');
    }
    slides[n-1].classList.remove('hide');
    dot[n-1].classList.add('active')
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

function formAct() { 
    let pos = window.pageYOffset-450;
    let id = setInterval(frame, 1);
    function frame() {
      if (pos == window.pageYOffset+100) {
        clearInterval(id);
      } else {
        pos= pos + 10; 
        forma.style.top = pos + 'px'; 
      }
    }
  }

function formOut(){
    let pos = window.pageYOffset+100;
    let id = setInterval(frame, 1);
    function frame() {
      if (pos == -450) {
        clearInterval(id);
      } else {
        pos= pos - 10; 
        forma.style.top = pos + 'px'; 
      }
    }
}
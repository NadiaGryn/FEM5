const images = document.querySelectorAll(`.image-to-show`);

function showImg (){
 
 for( i=0; i < images.length; i++){
     if (images[i].classList.length >1 ) {

    images[i].classList.remove(`active`);
    if (i+1 === images.length) {
      images[0].classList.add(`active`);
    }

    else {
      images[i+1].classList.add(`active`);
    }    
    break;
  }  
 }
}

let timerId = setInterval(showImg, 1000);

const buttonStart = document.createElement(`button`);
buttonStart.innerText = `START`;
document.body.prepend(buttonStart);

const buttonEnd = document.createElement(`button`);
buttonEnd.innerText = `END`;
buttonStart.after(buttonEnd);

buttonEnd.addEventListener(`click`, () => {
  clearInterval(timerId);
});

buttonStart.addEventListener(`click`, () => {
  timerId = setInterval(showImg, 1000);
})








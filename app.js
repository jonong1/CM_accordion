let accordion = document.getElementsByClassName('container');
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

let button = document.getElementById("btn");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    for (i=0; i<accordion.length; i++) {
      if (accordion[i].classList.toggle('active')) {
        accordion[i].classList.toggle('active')
      }
    }
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    for (i=0; i<accordion.length; i++) {
      if (!accordion[i].classList.toggle('active')) {
        accordion[i].classList.toggle('active')
      }
    }
  }
}, false);
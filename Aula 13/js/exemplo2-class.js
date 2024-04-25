function ocultarDivs() {
    let divs_ = document.getElementsByClassName('ocultar');
    for (let i = 0; i < divs_.length; i++) {
        divs_[i].style.display = 'none';
    }
  }
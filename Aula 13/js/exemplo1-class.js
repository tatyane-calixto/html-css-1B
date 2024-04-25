function destacarParagrafo() {
    let paragrafos = document.getElementsByClassName('destacar');
    for (let i = 0; i < paragrafos.length; i++) {
      paragrafos[i].style.backgroundColor = 'red';
    }
  }
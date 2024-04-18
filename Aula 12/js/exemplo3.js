function MudarVisibilidade() {
    // Obtendo o elemento pelo seu ID
    let paragrafo = document.getElementById("paragrafo_oculto");
    let titulo = document.getElementById("titulo_oculto");
    
    // Alternando a visibilidade do elemento
    if (titulo.style.display === "none" && paragrafo.style.display === "none") {
       titulo.style.display = "block";
       paragrafo.style.display = "block";
    } else {
      titulo.style.display = "none";
      paragrafo.style.display = "none";
    }
  }
function adicionarAtividade() {
  let listaAtividade = document.getElementById("listaAtividade");
  let novaAtividade = document.getElementById("novaAtividade");

  if (novaAtividade.value.trim()!=''){
    listaAtividade.innerHTML +=`<li class="atividade">${novaAtividade.value.trim()}</li>`;
    novaAtividade.value = '';
  }else{
    alert("Digite uma atividade!");
  }

}

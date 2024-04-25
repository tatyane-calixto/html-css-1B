function adicionarAtividade() {
  let listaAtividade = document.getElementById("listaAtividade");
  let novaAtividade = document.getElementById("novaAtividade");

  if (novaAtividade.value.trim()!=''){
    listaAtividade.innerHTML +=`<li class="atividade"><input type="checkbox">${novaAtividade.value.trim()}</li>`;
    novaAtividade.value = '';
  }else{
    alert("Digite uma atividade!");
  }

}

  
  function deletarSelecionada() {
    let checkboxes  = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;
    let atividade = document.getElementsByClassName("atividade");

    for(let i = 0;i < checkboxes.length;i++ ){
      if(checkboxes[i].checked){
        isChecked = true;
        break;
      }
    }

    if(!isChecked){
      alert("Escolha uma opção para apagar!");
      return;
    }

    for(let i = checkboxes.length - 1 ; i >=0;i--){
      if(checkboxes[i].checked){
        atividade[i].remove();

      }

    }

    
   
  }
  
  
  
  function deletarTudo() {
    let listaAtividade = document.getElementById("listaAtividade");
    listaAtividade.innerHTML = '';

  }
  
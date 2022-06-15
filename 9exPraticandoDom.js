function addNewHouse() {
  let type = document.querySelector('input[name="type"]:checked').value
  let area = document.getElementById('area').value
  let occupied = document.querySelector('input[name="occupied"]').value

  let newList = document.createElement('li')
  newList.innerText = `${occupied} - Tipo: ${type} - Área ${area} - `

  let removeButton = document.createElement('button')
  removeButton.type = 'button'
  removeButton.innerText = 'Remover'
  removeButton.setAttribute('onclick', 'removeHouse(this)')

  newList.appendChild(removeButton)

  document.getElementById('houseList').appendChild(newList)
}

function removeHouse(button) {
  let liToRemove = button.parentNode
  document.getElementById('houseList').removeChild(liToRemove)
}
/* sistema de cadastro para uma corretora de imoveis
Sistema para cadastrar imoveis e exibir aos clientes
Deve ser informado o tipo (casa/apto), área e se está alugado ou não
Apos preenchido, o form deve ser limpo para o prox. cadastro
Abaixo do formulario aparecer lista com os imoveis cadastrados e deve ser atualizada assim que o imovel é criado
Os imoveis marcados como ALUGADO deve ter essa info antes de qualquer outra (fundo vermelho, letra bco)
Botão para remover
*/

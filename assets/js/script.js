var meds = [];

function addMed(){
  event.preventDefault();
  let med = {
    "medName": document.getElementById("fName").value,
    "medQtd": document.getElementById("fQtd").value,
    "medClass": document.getElementById("fClass").value
  }

  document.getElementById("fName").value = "";
  document.getElementById("fQtd").value = "";
  document.getElementById("fClass").value = "";
  meds.push(med);
  renderTable();
}

function renderTable(){
  let table = document.getElementById('dataTable');
  table.innerHTML = `<tr>
          <th>ID</th>
          <th>Medicamento</th>
          <th>Quantidade</th>
          <th>Classe do medicamento</th>
          <th>Ação</th>
        </tr>`

  for(let i=0; i < meds.length; i++){
    table.innerHTML = table.innerHTML + `<td> ${i}</td>
    <td> ${meds[i].medName}</td>
    <td> ${meds[i].medQtd}</td>
    <td> ${meds[i].medClass}</td>
    <td> <img src="/assets/images/remove.png" width="25px" height="25px" onclick="removePet(${i})"> </td>`
  }
}

function removeMed(index){
  meds.splice(index, 1);
  renderTable();
}
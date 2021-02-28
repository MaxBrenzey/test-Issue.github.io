// selectors
let table = document.querySelector('#table');
const addBtn = document.querySelector("#addBtn");
const editBtn = document.querySelector("#editBtn");
const removeBtn = document.querySelector("#removeBtn");

const fname = document.querySelector("#fname").value;
const email = document.querySelector("#email").value;
const age = document.querySelector("#age").value;

let rIndex;

// event listeners
addBtn.addEventListener('click', addRow);
editBtn.addEventListener('click', editRow);
removeBtn.addEventListener('click', removeRow);

// check the empty input
function checkEmptyInput() {
  let isEmpty = false;
  const CheckFullName = document.querySelector("#fname").value;
  const CheckEmail = document.querySelector("#email").value;
  const CheckAge = document.querySelector("#age").value;
  // remember about empty input
  if (CheckFullName === "") {
    alert("Full Name Connot Be Empty");
    isEmpty = true;
  } else if (CheckEmail === "") {
    alert("Email Connot Be Empty");
    isEmpty = true;
  } else if (CheckAge === "") {
    alert("Age Connot Be Empty");
    isEmpty = true;
  }
  return isEmpty;
}

// add Row
function addRow() {
  if (!checkEmptyInput()) {
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    const AddFullName = document.querySelector("#fname").value;
    const AddEmail = document.querySelector("#email").value;
    const AddAge = document.querySelector("#age").value;

    cell1.innerHTML = AddFullName;
    cell2.innerHTML = AddEmail;
    cell3.innerHTML = AddAge;

    //  to localStorage
    const saveObjLocal = {
      name: AddFullName,
      email: AddEmail,
      age: AddAge
    };

    localStorage.setItem('person', JSON.stringify(saveObjLocal));

    // call the function to set the event to the new row
    selectedRow();
  }
}


// select row
function selectedRow() {

  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      rIndex = this.rowIndex;
      document.querySelector("#fname").value = this.cells[0].innerHTML;
      document.querySelector("#email").value = this.cells[1].innerHTML;
      document.querySelector("#age").value = this.cells[2].innerHTML;
    };
  }
}
selectedRow();

// edit row
function editRow() {
  const editFullNmae = document.querySelector("#fname").value;
  const editEmail = document.querySelector("#email").value;
  const editAge = document.querySelector("#age").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = editFullNmae;
    table.rows[rIndex].cells[1].innerHTML = editEmail;
    table.rows[rIndex].cells[2].innerHTML = editAge;
  }
}

// remove row
function removeRow() {
  table.deleteRow(rIndex);
  // clear input text
  document.querySelector("#fname").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#age").value = "";
}
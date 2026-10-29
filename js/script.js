// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let employeeForm = document.getElementById("addForm");
let employeeTable = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employees = 1;
// ADD EMPLOYEE
employeeForm.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  let newId = document.getElementById("id").value;
  let newName = document.getElementById("name").value;
  let newExtension = document.getElementById("extension").value;
  let newEmail = document.getElementById("email").value;
  let newIDepartment = document.getElementById("idepartment").value;

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

  let newRow = employees.insertRow();

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let id = newRow.insertCell(0);
  let name = newRow.insertCell(1);
  let extension = newRow.insertCell(2);
  let email = newRow.insertCell(3);
  let department = newRow.insertCell(4);

  let createTextNode = document.createTextNode(newRow);

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

  id.appendChild(createTextNode);
  name.appendChild(createTextNode);
  extension.appendChild(createTextNode);
  email.appendChild(createTextNode);
  department.appendChild(createTextNode);

  // CREATE THE DELETE BUTTON
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  let textDelete = document.createTextNode("X");
  deleteBtn.appendChild(textDelete);
  newRow.appendChild(deleteBtn);

  // RESET THE FORM
  employeeForm.reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  id.focus();

  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  employees++;
});

// DELETE EMPLOYEE
employeeTable.addEventListener("click", (e) => {
  // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
  if (e.target.classList.contains("delete")) {
    // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
    if (confirm("Are you sure you want to delete this task?")) {
      // REMOVE THE SELECTED ROW
      employeeTable.removeChild(e.target.parentElement);
    }
  }
});

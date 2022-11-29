var selectedRow = null

function onFormSubmit(e) 
{
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null)
        {
            insertNewRecord(formData);
		}
        else
        {
            updateRecord(formData);
		}
        resetForm();    
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.mobno;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.age;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = ` <button onClick="onDelete(this)">Delete</button>`;

    resetForm();
}

//Retrieve the data
function readFormData() 
{
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["email"] = document.getElementById("email").value;
    formData["mobno"] = document.getElementById("mobno").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
}

//Reset the data
function resetForm() 
{
    document.getElementById("fname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("mobno").value = '';
    document.getElementById("age").value = '';
    selectedRow = null;
}

//Delete the data
function onDelete(td) 
{
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
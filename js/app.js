let studentList = [];
let index = 0;

function addStudent() {
    studentList[index] = document.getElementById('nameInput').value;
    index++;
    displayList();
}

function modifyStu(id) {
    let name = prompt("Nhập tên bạn muốn sửa: ");
    studentList[id] = name;
    document.getElementById(id).innerText = name;
}

function deleteStu(id) {
    studentList.splice(id, 1);
    index--;
    displayList();
}

function displayList() {
    let data = "";
    for (let i = 0; i < studentList.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + "</td>";
        data += "<td id =" + i + ">" + studentList[i] + "</td>";
        data += "<td>" + "<button onclick ='modifyStu(this.id)' id =" + i + ">Sửa</button>" + "</td>";
        data += "<td>" + "<button onclick='deleteStu(this.id)' id =" + i + ">Xóa</button>";
        data += "</tr>";
    }
    document.getElementById('tableBody').innerHTML = data;
}

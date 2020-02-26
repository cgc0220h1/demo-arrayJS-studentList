let studentList = [];
let data = "";
let index = 0;

function addStudent() {
    data = "";
    studentList[index] = document.getElementById('name-input').value;
    index++;
    DisplayList();
}

function modifyStu(id) {
    let name = prompt("Nhập tên bạn muốn sửa: ");
    studentList[id] = name;
    document.getElementById(id).innerText = name;
}

function deleteStu(id) {
    studentList.splice(id, 1);
    index--;
    DisplayList();
}

function DisplayList() {
    let data = "";
    for (let i = 0; i < studentList.length; i++) {
        data += "<tr>";
        data += "<td>" + i + "</td>";
        data += "<td id =" + i + ">" + studentList[i] + "</td>";
        data += "<td>" + "<button onclick ='modifyStu(this.id)' id =" + i + ">Sửa</button>" + "</td>";
        data += "<td>" + "<button onclick='deleteStu(this.id)' id =" + i + ">Xóa</button>";
        data += "</tr>";
    }
    document.getElementById('table-body').innerHTML = data;
}

function addStudent() {
    let input = document.getElementById("name");
    let list = document.getElementById("studentList");

    let student = document.createElement("p");
    student.innerHTML = input.value;

    list.append(student);
}

function addFirst() {
    let input = document.getElementById("name");
    let list = document.getElementById("studentList");

    let student = document.createElement("p");
    student.innerHTML = input.value;

    list.prepend(student);
}
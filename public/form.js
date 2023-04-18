if (!sessionStorage.getItem('flag')) {
    redirect();
}
var time = 0;

window.onfocus = function () { time = 0; }
window.onclick = function () { time = 0; }
window.onmousemove = function () { time = 0; }
window.onkeypress = function () { time = 0; }
window.onkeydown = function () { time = 0; }
window.onkeyup = function () { time = 0; }
window.onscroll = function () { time = 0; }

var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));

var frequency = setInterval(function () {
    time++;
    if (time > 5) { // 10 Sec time
        clearInterval(frequency);
        sessionStorage.clear();
        myModal.show();
    }
}, 1000)


if (sessionStorage.getItem("")) {
    redirect();
}

function login() {
    redirect();
}

function redirect() {
    window.location.assign("index");
}


// Form data submission start

const save = document.querySelector('#save');

const saveEmp = async() => {
    event.preventDefault()
    console.log("hi");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var department = document.getElementById("department").value;
    var role = document.getElementById("role").value;

    console.log(name);
    console.log(email);
    console.log(department);
    console.log(role);

    let response = await fetch("http://localhost:3000/submit",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "name":name,
            "role":role,
            "department":department,
            "email":email
        })
    });
    console.log(response);
}
save.addEventListener('click', saveEmp);

// Form data Submission End
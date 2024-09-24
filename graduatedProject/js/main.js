let source = document.getElementById("main");

let shoe1 = document.getElementById("shoe1");
// console.log(shoe1.getAttribute("src"));
let shoe2 = document.getElementById("shoe2");
let shoe3 = document.getElementById("shoe3");
let shoe4 = document.getElementById("shoe4");

shoe1.addEventListener("click", function () {
    source.setAttribute("src", `${shoe1.getAttribute("src")}`);
});
shoe2.addEventListener("click", function () {
    source.setAttribute("src", `${shoe2.getAttribute("src")}`);
});
shoe3.addEventListener("click", function () {
    source.setAttribute("src", `${shoe3.getAttribute("src")}`);
});
shoe4.addEventListener("click", function () {
    source.setAttribute("src", `${shoe4.getAttribute("src")}`);
});

let about = document.getElementById("About");
console.log(about);
about.addEventListener("click",function () {
    console.log("clicked");
    let clasees = document.getElementsByClassName("active");
    console.log(clasees);
    for (let i = 0; i < clasees.length; i++) {
        if (clasees[i].className == "active") {
            clasees[i].classList.remove("active");
            console.log("YES");
        }
    }
    about.className = "active";
});


let home = document.getElementById("Home");
console.log(home);
home.addEventListener("click",function () {
    console.log("clicked");
    let clasees = document.getElementsByClassName("active");
    console.log(clasees);
    for (let i = 0; i < clasees.length; i++) {
        if (clasees[i].className == "active") {
            clasees[i].classList.remove("active");
            console.log("YES");
        }
    }
    home.className = "active";
});


let services=document.getElementById("service")
console.log(services);
services.addEventListener("click",function () {
    console.log("clicked");
    let clasees = document.getElementsByClassName("active");
    console.log(clasees);
    for (let i = 0; i < clasees.length; i++) {
        if (clasees[i].className == "active") {
            clasees[i].classList.remove("active");
            console.log("YES");
        }
    }
    services.className = "active";
});

// window.addEventListener("scroll",()=>{
//     if (window.scrollY>=800)
//     {
//         about.className="active";
//         home.classList.remove("active");
//     }
//     else
//     {
//         home.className="active";
//         about.classList.remove("active");
//     }
// })
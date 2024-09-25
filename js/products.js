

let review = document.getElementById("Review");
console.log(review);
review.addEventListener("click",function () {
    console.log("clicked");
    let clasees = document.getElementsByClassName("active");
    console.log(clasees);
    for (let i = 0; i < clasees.length; i++) {
        if (clasees[i].className == "active") {
            clasees[i].classList.remove("active");
            console.log("YES");
        }
    }
    review.className = "active";
});


let product = document.getElementById("Product");
console.log(product);
product.addEventListener("click",function () {
    console.log("clicked");
    let clasees = document.getElementsByClassName("active");
    console.log(clasees);
    for (let i = 0; i < clasees.length; i++) {
        if (clasees[i].className == "active") {
            clasees[i].classList.remove("active");
            console.log("YES");
        }
    }
    product.className = "active";
    location.href="../pages/products.html#product"
});


let review1 = document.getElementById("Review1");
console.log(review1);
review.addEventListener("click",function () {
    console.log("clicked");
    let clasees = document.getElementsByClassName("active1");
    console.log(clasees);
    for (let i = 0; i < clasees.length; i++) {
        if (clasees[i].className == "active1") {
            clasees[i].classList.remove("active1");
            console.log("YES");
        }
    }
    review1.className = "active1";
    location.href="../pages/products.html#product"
});


let product1 = document.getElementById("Product1");
console.log(product1);
product.addEventListener("click",function () {
    console.log("clicked");
    let clasees = document.getElementsByClassName("active1");
    console.log(clasees);
    for (let i = 0; i < clasees.length; i++) {
        if (clasees[i].className == "active1") {
            clasees[i].classList.remove("active1");
            console.log("YES");
        }
    }
    product1.className = "active1";
    location.href="../pages/products.html#product"
});

window.addEventListener("scroll",()=>{
    if (window.scrollY>=800)
    {
        review.className="active";
        product.classList.remove("active");
        review1.className="active1";
        product1.classList.remove("active1");
    }
    else
    {
        product.className="active";
        review.classList.remove("active");
        product1.className="active1";
        review1.classList.remove("active1");
    }
})



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

window.addEventListener("scroll",()=>{
    if (window.scrollY>=800)
    {
        review.className="active";
        product.classList.remove("active");
    }
    else
    {
        product.className="active";
        review.classList.remove("active");
    }
})
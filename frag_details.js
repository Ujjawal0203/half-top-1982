


// import navbar below-----;

import {My_navbar} from "./components/R_navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = My_navbar();

//import navbar above-------;







//don't change below code

// getting details data from local storage
let data = JSON.parse(localStorage.getItem("product"));
console.log(data);

// appending data to fra_details page
const Pro_details = () =>{
    let image_container = document.querySelector(".image_container");
    let img = document.createElement("img");
    img.src = data.image;
    image_container.append(img);



    
    //making buttons---------------------;
        //btn_div_main is main div we will append add to cart and image in this div;
        let btn_div_main = document.createElement("div");
        btn_div_main.id = "buttons";

        let addToCart = document.createElement("button");
        addToCart.id = 'cart';
        addToCart.innerText = "🛒Add To Cart";

        //div to append heart image
        let like_div = document.createElement("div");
        like_div.id = "like";
        like_div.style.backgroundColor = "rgb(70, 69, 69)";


        //making image tag for heart image;
        let like_img = document.createElement("div");
        like_img.innerText = "🤍";
        like_div.append(like_img);


        //appending addToCart button and like_div to btn_div_main;
        btn_div_main.append(addToCart,like_div);





//getting details contaier form html;
    let detail = document.querySelector(".details_container");
    let title = document.createElement("h2");
    title.innerHTML = data.title;
    let price = document.createElement("h4");
    price.innerHTML = "₹";
    let span = document.createElement("span");
    span.innerHTML = data.price;
    price.append(span);

    let input = document.createElement("input");
    input.placeholder = "Enter pincode"
    let button = document.createElement("button");
    button.innerText = 'CHECK';
    button.addEventListener('click',()=>{
        alert("Stock available");
    });
    let div = document.createElement("div");
    div.className = "checkaddress";
    div.append(input,button);

    let policy = document.createElement("div");
    policy.className = "policy";
    policy.style.display = "flex";
    policy.style.fontSize = "15px";
    policy.style.marginTop = "10px";




    let product_quality = document.createElement("div");
    product_quality.innerHTML = "100% GENUINE PRODUCT"
    let easy_return = document.createElement("div");
    easy_return.className = "easy_return";
    easy_return.style.display = "flex";
    let easy_return_div1 = document.createElement("div");
    let easy_return_div2 = document.createElement("div");
    easy_return_div2.className = "easy_return_div2";

    let easy_return_img = document.createElement("img");
    easy_return_img.src = "https://www.beautybebo.com/pub/media/wysiwyg/return_product.png"

    easy_return_div1.append(easy_return_img);
    easy_return_div2.innerHTML = "EASY RETURN POLICY";

    easy_return.append(easy_return_div1,easy_return_div2);


    policy.append(product_quality,easy_return)



    detail.append(title,price,btn_div_main,div,policy);


    let main = document.querySelector("#main");
    main.append(image_container,detail);

    addToCart.addEventListener("click",()=>{
        cart_fun(data.image,data.title,data.price);
    });
}

Pro_details();

const cart_fun = (img,title,price)=>{

    let arr = JSON.parse(localStorage.getItem("database")) || [];

    let obj = {
        img,
        title,
        price
    }
    // console.log(obj);
    arr.push(obj);
    localStorage.setItem("database",JSON.stringify(arr));
    alert("Item added to Cart Succesfully");

}
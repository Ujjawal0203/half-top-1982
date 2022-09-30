
//No No No need to import any navbar this is already import function for append----;
//don't make any change


const append = (data,container) =>{
    container.innerHTML = null;
    data.forEach(element => {
        let img = document.createElement("img");
        img.src = element.img;
        let title = document.createElement("p");
        title.innerText = element.title;
        title.style.height = "20px";
        let price = document.createElement("h4");
        price.innerText = element.price;

        //making buttons---------------------;
        //btn_div_main is main div we will append add to cart and image in this div;
        let btn_div_main = document.createElement("div");
        btn_div_main.id = "buttons";

        let addToCart = document.createElement("button");
        addToCart.id = 'cart';
        addToCart.innerText = "Add To Cart";

        //div to append heart image
        let like_div = document.createElement("div");
        like_div.id = "like";

        //making image tag for heart image;
        let like_img = document.createElement("img");
        like_img.src = "https://cdn-icons-png.flaticon.com/512/3237/3237429.png";
        like_div.append(like_img);


        //appending addToCart button and like_div to btn_div_main;
        btn_div_main.append(addToCart,like_div);
        

        let div = document.createElement("div");
        div.className = "card";

        div.append(img,title,price,btn_div_main);
        div.addEventListener('click',()=>{
            let obj = {
                image: element.img,
                title: element.title,
                price: element.price,
            }
            localStorage.setItem("product",JSON.stringify(obj));
            window.open("frag_details.html","_self");
        })
        container.append(div);  
    }); 
}

export {append};

// this code is to call the navbar in anypage
import navbar from "../components/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar();
console.log(nav);



// import navbar below-----;

// code(import here);


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






    let detail = document.querySelector(".details_container");
    let title = document.createElement("h2");
    title.innerHTML = data.title;
    let price = document.createElement("h4");
    price.innerHTML = data.price;
    detail.append(title,price,btn_div_main);


    let main = document.querySelector("#main");
    main.append(image_container,detail);
}

Pro_details();
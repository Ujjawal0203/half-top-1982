
//No No No need to import any navbar this is already import function for append----;
//don't make any change


const append = (data,container) =>{
    container.innerHTML = null;
    data.forEach(element => {
        let img = document.createElement("img");
        img.src = element.img;
        let title = document.createElement("p");
        title.style.height = "45px";
        // title.style.border = "1px solid yellow";
        title.innerText = element.title;

        let title_div = document.createElement("div");
        title_div.style.height = "73px";
        // title_div.style.border = "1px solid green";



        title_div.append(title);                //appending title to title_div here


        // if(element.discount==undefined){
        //     title_div.append(title);
        // }else{
        //     title_div.append(title,discount);
        // }

       
        let price = document.createElement("h1");
        price.innerText = "₹";
        let span = document.createElement("span");
        span.innerText = `${element.price}`;
        span.id = "num";
        price.append(span);

        let actual = document.createElement("h3");
        actual.id = "actual";
        actual.innerText =  `₹${element.actual}`;
        actual.style.textDecoratarion = "line-through";
        // actual.style.color = "#ddd";



        let price_div = document.createElement('div');
        price_div.style.display = "flex";
        price_div.style.alignItems = "center";
        price_div.style.justifyContent = "space-evenly";
        // price_div.style.border = "1px solid black";
        price_div.style.margin = "auto";
        price_div.style.width = "150px";

        let discount = document.createElement("h3");
        discount.className = "discount";
        discount.innerText = element.discount;

        if(element.actual==undefined && element.discount==undefined){
            price_div.append(price);
        }
        else{
            price_div.append(actual,price,discount);
        }
        
        // if(element.actual == undefined){
        //     price_div.append(price);
        // }
        // else{
        //     price_div.append(actual,price);
        // }


        //making buttons---------------------;
        //btn_div_main is main div we will append add to cart and image/heart in this div;
        let btn_div_main = document.createElement("div");
        btn_div_main.id = "buttons";
        btn_div_main.style.marginBottom ="40px";

        let addToCart = document.createElement("button");
        addToCart.id = 'cart';
        addToCart.innerText = "🛒Add To Cart";

        //div to append heart image
        let like_div = document.createElement("div");
        like_div.id = "like";
        like_div.style.backgroundColor = " rgb(70, 69, 69)";
        like_div.style.display = "flex";
        like_div.style.alignItems = "center";

        //making image tag for heart image;
        let like_img = document.createElement("div");
        like_img.innerHTML = "🤍";
        like_div.append(like_img);

        
        //appending addToCart button and like_div to btn_div_main;
        btn_div_main.append(addToCart,like_div);
        

        let div = document.createElement("div");
        div.className = "card";


        // if(element.discount==undefined){
        //     div.append(img,title_div,price,btn_div_main);
        // }
        // else{
        //     div.append(img,discount,title_div,price,btn_div_main);
        // }
//appending to the dom--------------------------------------------------------;;


        


        // let pri_dis_div = document.createElement('div');
        // pri_dis_div.style.display = "flex";
        // pri_dis_div.append(title_div,price_div);
        // // div.append(img,title_div,price_div,btn_div_main);     

       




        div.append(img,title_div,price_div,btn_div_main);           //appending all  here-------------


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


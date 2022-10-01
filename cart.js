//import navbar here-------;

//code;

//impot navbar above-------;


let arr = JSON.parse(localStorage.getItem("database"));

let total = 0;

const append = () =>{
    let container = document.getElementById("content");
    container.innerHTML = null;
    arr.forEach((element,index) => {
        let container_child = document.createElement("div");
        let container_grandchild = document.createElement("div");
        container_grandchild.id = "container_grandchild";

        let img = document.createElement('img');
        img.src = element.img;
        let title = document.createElement("h3");
        
        title.innerHTML = element.title;
        let price = document.createElement("h3");
        price.innerHTML = element.price;
        price.style.marginTop = "0px"
        total  = total + Number(element.price);

        let input = document.createElement('input');
        input.value = "1"
        input.id = "qtn";

        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.width = "18%";
        div.style.height = "20%"
        div.style.marginTop = "8px"
        div.style.justifyContent = "space-between";
        div.append(input,price);
        container_grandchild.append(img,title,div);


        let remove = document.createElement("button");
        remove.innerHTML = "Remove Item";
        remove.addEventListener("click",(event)=>{
            event.target.parentNode.remove();
            arr.splice(index,1);
            // console.log(arr);
            localStorage.setItem("database",JSON.stringify(arr));
            // window.reload();
            location.reload();
        })


        let hr = document.createElement("hr");
        container_child.append(container_grandchild,hr,remove,hr);
        container_child.id = "container_child";
        container.append(container_child);
    });
}

append();

console.log(total);

let cart_total = document.getElementById("cart_total");
cart_total.innerHTML = total;

const summary = ()=>{
    let summary = document.getElementById("summary");
    let title = document.createElement("h3");
    title.innerText = "Summary";

    let div_1 = document.createElement("div");
    div_1.style.display = "flex";
    div_1.style.justifyContent = "space-between";
    div_1.style.boxShadow = "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
    div_1.style.height = "60px";
    div_1.style.fontSize = "20px";


    let subtotal = document.createElement("p");
    subtotal.innerText = "subtotal";
    let total_price = document.createElement("p");
    total_price.innerText = total;
    div_1.append(subtotal,total_price,);

    let div_2 = document.createElement("div");

   
    let shipping = document.createElement("p");
    shipping.innerText = "7 Business days"
    let del_charge = document.createElement("p");
    del_charge.innerText = "₹0.00";
    div_2.append(shipping,del_charge);
   


    div_2.style.display = "flex";
    div_2.style.justifyContent = "space-between";
    div_2.style.boxShadow = "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
    div_2.style.height = "60px";
    div_2.style.fontSize = "20px";


    let div_3 = document.createElement("div");
    let order = document.createElement('p');
    order.innerText = "order total include GST";
    let order_cost = document.createElement("p");
    order_cost.innerText = total;
    console.log(total);
    div_3.append(order,order_cost);

    div_3.style.display = "flex";
    div_3.style.justifyContent = "space-between";
    div_3.style.boxShadow = "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
    div_3.style.height = "60px";
    div_3.style.fontSize = "20px";


    let apply = document.createElement("input");
    apply.placeholder = "Apply coupon code";
    apply.style.background = "rgb(236, 233, 233)";
    apply.style.width = "98%";
    apply.style.height = "30px";


    let div = document.createElement('div');
    div.style.marginTop = "30px";
    div.style.paddingBottom = "20px";
    div.style.backgroundColor = "rgb(236, 233, 233)";
    
    let button = document.createElement("button");
    button.style.background = "rgb(221,2,133)";
    button.style.height = "40px";
    button.style.border = "none";
    button.style.color = "white";
    button.style.marginTop = "20px";
    button.style.width = "100%";
    button.style.cursor = "pointer";

    button.innerHTML = "PROCEED TO CHECKOUT";
    button.addEventListener("click",()=>{
        alert("Order placed successfully");
    })

    div.append(button);

    summary.append(title,div_1,div_2,div_3,apply,div);
}

summary();

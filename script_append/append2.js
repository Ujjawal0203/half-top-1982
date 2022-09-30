function displayItems(product){

  let product_list=document.getElementById("product-list");
  product_list.innerHTML=null;

  product.forEach((el)=>{
  
   let div=document.createElement("div");
   div.setAttribute("id","box")
 
   let img=document.createElement("img");
   img.setAttribute("id","image")
   img.src=el.image;
   img.addEventListener("click",function(){
  
     details(el)
 
   })
 
   let name=document.createElement("p")
   name.setAttribute("id","name")
   name.innerText=el.title;
   name.addEventListener("click",function(){
  
     details(el)
 
   })
 
   let RPrice=document.createElement("del")
   RPrice.setAttribute("id","RPrice")
   RPrice.innerText="₹"+el.strikedOffPrice;
 
   let price=document.createElement("span")
   price.setAttribute("id","price")
   price.innerText="₹"+el.price;
 
   let discount=document.createElement("span")
   discount.setAttribute("id","discount")
   discount.innerText=el.discount;
 
 
 
 
   let rating = document.createElement("p");
       rating.setAttribute("id", "rating");
       rating.innerText="⭐⭐⭐⭐⭐(1)";
 
 
   let btn_div=document.createElement("div")
   btn_div.setAttribute("id","btn_div")
   
 
   let btn=document.createElement("button")
   btn.innerText="Add to Card"
   btn.setAttribute("id","btn")
   btn.addEventListener("click",function(){
  
     details(el)
 
   })
   
 
   let spanfav = document.createElement("span");
       spanfav.setAttribute("id", "fav");
       spanfav.innerHTML = "🤍";
 
 
       
       btn_div.append(btn,spanfav)   
 
   div.append(img,name,rating,RPrice,price,discount,btn_div)
   
   product_list.append(div)
  
 
 
  })
 
 
 
 }


 // change details acording to your file name...

function details(el) {
  // if (UserDetail === null) {
  //   alert("create an account first");
  //   window.location.href = "signup.html";
  // } else {
    localStorage.setItem("product_data", JSON.stringify(el));
    // window.location.href = "product.html";
  // }
}

 export default displayItems;
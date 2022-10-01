


import { product, sortingData } from "./Data//productData.js";

import displayItems from "./script_append/append2.js"
let product_list=document.getElementById("product-list");

let product_catagory=document.getElementById("product_catagory");

displayItems(product.makeup)

let skin=document.getElementById("skin");
skin.addEventListener("click",function(){

  displayItems(product.skin)

  product_catagory.innerText="skin";

})


console.log(product);


let makeup=document.getElementById("makeup");
makeup.addEventListener("click",function(){

  displayItems(product.makeup)

  product_catagory.innerText="makeup";

})

let hair=document.getElementById("hair");
hair.addEventListener("click",function(){

  displayItems(product.hair)

  product_catagory.innerText="hair";

})



let personal=document.getElementById("personal");
personal.addEventListener("click",function(){

  displayItems(product.personal)
  product_catagory.innerText="personal Care";

})

let kids=document.getElementById("mom");
kids.addEventListener("click",function(){

  displayItems(product.kids)
  product_catagory.innerText="Mom & Baby Care";

})

let perfume=document.getElementById("frag");
perfume.addEventListener("click",function(){

  displayItems(product.perfume)
  product_catagory.innerText="Fragrance";

})




let ayurveda=document.getElementById("aurveda");
ayurveda.addEventListener("click",function(){

  displayItems(product.ayurveda)
  product_catagory.innerText="Auirveda";

})



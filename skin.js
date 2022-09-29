


import { product, sortingData } from "./Data//productData.js";

import displayItems from "./components/append2.js"
let product_list=document.getElementById("product-list");

let skin=document.getElementById("skin");
skin.addEventListener("click",function(){

  displayItems(product.skin)

})


console.log(product);


let makeup=document.getElementById("makeup");
makeup.addEventListener("click",function(){

  displayItems(product.makeup)

})

let hair=document.getElementById("hair");
hair.addEventListener("click",function(){

  displayItems(product.hair)

})



let personal=document.getElementById("personal");
personal.addEventListener("click",function(){

  displayItems(product.personal)

})

let kids=document.getElementById("mom");
kids.addEventListener("click",function(){

  displayItems(product.kids)

})

let perfume=document.getElementById("frag");
perfume.addEventListener("click",function(){

  displayItems(product.perfume)

})




let ayurveda=document.getElementById("aurveda");
ayurveda.addEventListener("click",function(){

  displayItems(product.ayurveda)

})


































































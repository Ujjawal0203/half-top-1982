
//import navbar below------------------------;


//


//import navbar above-------------------------;


let current_page = 1;



//here importing append 
import {append} from "./script_append/append.js";

let fragrance_1 = [

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/e/me-deodorant.jpg",
    title:"Mamaearth Me Deo For A Scent That’s Unique To You",
    price: 299.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo9.jpg",
    title:"Fogg Black Fresh Fougere Body Spray Deodorant For Men",
    price: 250.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo5.jpg",
    title:"Fogg Black Fresh Spicy Body Spray Deodorant For Men",
    price: 234.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e54.jpg",
    title:"Engage Sport Cool Deodorant For Women, Citrus & Spicy, Skin Friendly",
    price: 195.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e52.jpg",
    title:"Engage Sport Fresh Deodorant For Women, Skin Friendly",
    price: 195.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e51.jpg",
    title:"Engage Spell Deodorant For WomenEngage Spell Deodorant For Women",
    price: 210.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d36.jpg",
    title:"Denver Noble Hamilton Deodorant Body Spray",
    price: 220.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d35.jpg",
    title:"Denver Imperial Deodorant For Men",
    price: 212.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d34.jpg",
    title:"Denver Prestige Deodorant For Men - Hamilton",
    price: 249.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d33.jpg",
    title:"Denver Honour Hamilton Deo",
    price: 249.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d32.jpg",
    title:"Denver SRK Emperor Deodorant Autograph Collection - 150ml",
    price: 212.00,
    },
    
    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d29.jpg",
    title:"Denver Sporting Club Rider Deo",
    price: 179.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d27.jpg",
    title:"Denver Sporting Club - Victor Deo - 165ml",
    price: 179.00,
    },
    
    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d25.jpg",
    title:"Denver Royal Oud Deo - Hamilton",
    price: 179.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d23.jpg",
    title:"Denver Hamilton Deo",
    price: 212.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d22.jpg",
    title:"Denver Caliber Deodorant For Men - Hamilton",
    price: 212.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/7/37_4_1.jpg",
    title:"Denver Pride Hamilton Deo",
    price: 212.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/1/d18.jpg",
    title:"Denver Hamilton Imperial Deodorant Body Spray",
    price: 179.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/1/d17.jpg",
    title:"Denver Deodorant Spray For Men - Hamilton",
    price: 179.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-80.jpg",
    title:"NIVEA Deodorant Roll On - Pearl & Beauty (Pack Of 2)",
    price: 358.00,
    },


    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/i/ni1.jpg",
    title:"NIVEA MEN Deodorant - Fresh Boost",
    price: 199.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/6/n6.jpg",
    title:"NIVEA MEN Deodorant - Cool Kick (Pack Of 2)",
    price: 378.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/3/f3_1_1.jpg",
    title:"Fogg Black Fresh Oriental Body Spray Deodorant For Men",
    price: 275.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/1/f1_2.jpg",
    title:"Fogg Bleu Series Spring Fragrance Body Spray",
    price: 255.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl34.jpg",
    title:"Plum Green Tea Clear Skin Specialist Duo",
    price: "1663.00",
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/4/n4_1.jpg",
    title:"NIVEA Deodorant Protect & Care - Women",
    price: 199.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/2/n2_1.jpg",
    title:"NIVEA MEN Deodorant - Fresh Active",
    price: 225.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/9/d9.jpg",
    title:"Dove Original Antiperspirant Deodorant For Women",
    price: 220.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm217.jpg",
    title:"Mamaearth Gift Of Nature Kit For Newborns And Babies",
    price: 1365.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm161.jpg",
    title:"Mamaearth Easy Tummy Roll On For Indigestion And Colic Relief - Hing And",
    price: 249.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-67.jpg",
    title:"Mamaearth Anti Mosquito Fabric Roll On - Pack Of 3",
    price: 297.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbb_964005808594306_1a.jpg",
    title:"NIVEA Deodorant Whitening Floral Touch - Women",
    price: 225.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4005808163588_bb.jpg",
    title:"NIVEA Deodorant Whitening Smooth Skin - Women (Pack Of 2)",
    price: 376.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/f/sfdsdfsfd.jpg",
    title:"Kamasutra Hard Deodorant Spray For Men",
    price: 189.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/y/h/yhnbbyhn.jpeg",
    title:"Kamasutra Storm Deodorant Spray For Men",
    price: 210.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-208.jpg",
    title:"Kamasutra Dare Deodorant Spray For Men - Pack Of 2",
    price: 378.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-207.jpg",
    title:"Kamasutra Urge Deodorant Spray For Men - Pack Of 2",
    price: 378.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d29.jpg",
    title:"Denver Sporting Club Rider Deo",
    price: 179.00,
    },


];

let fragrance_2 = [

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/f/sfdsdfsfd.jpg",
    title:"Kamasutra Hard Deodorant Spray For Men",
    price: 189.00,
    },
 
    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/f/9fd2fca8906087777243__1_.jpg",
    title:"Mamaearth Eau De Parfum For A Fragrance As Unique As You",
    price: 629.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/e/me-deodorant.jpg",
    title:"Mamaearth Me Deo For A Scent That’s Unique To You",
    price: 299.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/8/s8.jpg",
    title:"Calvin Klein Eternity For Men Eau De Parfum",
    price: 3468.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo15.jpg",
    title:"Fogg Scent Intensio Men Fragrance Body Spray",
    price: 539.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo8.jpg",
    title:"Fogg Scent Xpressio Men Fragrance Body Spray",
    price: 539.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e55.jpg",
    title:"Engage Yin Eau De Parfum For Men",
    price: 459.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/4/e49.jpg",
    title:"Engage W1 Perfume Spray For Women",
    price: 225.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d37.jpg",
    title:"Denver Esteem Hamilton Perfume",
    price: 448.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d31.jpg",
    title:"Denver Sporting Club Goal Perfume - 60ml",
    price: 257.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/3/d30.jpg",
    title:"Denver Insight Eau De Perfume",
    price: 448.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d28.jpg",
    title:"Denver Hamilton Caliber Perfume - 100ml",
    price: 448.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/y/h/yhnbbyhn.jpeg",
    title:"Kamasutra Storm Deodorant Spray For Men",
    price: 210.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-208.jpg",
    title:"Kamasutra Dare Deodorant Spray For Men - Pack Of 2",
    price: 378.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-207.jpg",
    title:"Kamasutra Urge Deodorant Spray For Men - Pack Of 2",
    price: 378.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/2/f2_1.jpg",
    title:"Fogg Black Fresh Woody Fragrance Body Spray",
    price: 275.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/1/f1_2.jpg",
    title:"Fogg Bleu Series Spring Fragrance Body Spray",
    price: 255.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl34.jpg",
    title:"Plum Green Tea Clear Skin Specialist Duo",
    price: 1663.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/4/n4_1.jpg",
    title:"NIVEA Deodorant Protect & Care - Women",
    price: 199.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/2/n2_1.jpg",
    title:"NIVEA MEN Deodorant - Fresh Active",
    price: 225.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/e/me-deodorant.jpg",
    title:"Mamaearth Me Deo For A Scent That’s Unique To You",
    price: 299.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo9.jpg",
    title:"Fogg Black Fresh Fougere Body Spray Deodorant For Men",
    price: 250.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo5.jpg",
    title:"Fogg Black Fresh Spicy Body Spray Deodorant For Men",
    price: 234.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e54.jpg",
    title:"Engage Sport Cool Deodorant For Women, Citrus & Spicy, Skin Friendly",
    price: 195.00,
    },

    {img:"https://www.beautybebo.com/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e52.jpg",
    title:"Engage Sport Fresh Deodorant For Women, Skin Friendly",
    price: 195.00,
    },

    {img:"https://www.beautybebo/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e51.jpg",
    title:"Engage Spell Deodorant For WomenEngage Spell Deodorant For Women",
    price: 210.00,
    },
];


//acessing products to append data on webpage;
let container = document.querySelector(".products");
//appending data on the dom
const product_append = (data,box) =>{
    box.innerHTML = null;
    append(data,box);
}

product_append(fragrance_1,container);


//making function to sort the productsj-------------sort----------;

document.querySelector("#sort").addEventListener("change",()=>{
    my_sort();
});

const my_sort = ()=>{

    let selected = document.getElementById("sort").value;

    if(current_page==1){
        
        if(selected=="Name"){
            fragrance_1.sort((a,b)=>{
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return  0;
            });
        };
    
        if(selected == "low-high"){
            fragrance_1.sort((a,b)=>{
                if(a.price > b.price) return 1;
                if(a.price < b.price) return -1;
                return 0;
            })
        }
    
    
        if(selected=="high-low"){
            fragrance_1.sort((a,b)=>{
                if(a.price > b.price) return -1;
                if(a.price < b.price) return 1;
                return 0;
            })
        };
        product_append(fragrance_1,container);

    }
    if(current_page==2){

        if(selected=="Name"){
            fragrance_2.sort((a,b)=>{
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return  0;
            });
        };
    
        if(selected == "low-high"){
            fragrance_2.sort((a,b)=>{
                if(a.price > b.price) return 1;
                if(a.price < b.price) return -1;
                return 0;
            })
        }
    
    
        if(selected=="high-low"){
            fragrance_2.sort((a,b)=>{
                if(a.price > b.price) return -1;
                if(a.price < b.price) return 1;
                return 0;
            })
        };
        product_append(fragrance_2,container);

    }

}



//making pagination here
let next = document.getElementById("next");
next.addEventListener('click',()=>{
    current_page = current_page + 1;
    console.log(current_page);


    if(current_page==2){
        product_append(fragrance_2,container);
        console.log("called");
    }

    if(current_page==1){
        product_append(fragrance_1,container);
        console.log("called");
    }


    if(current_page >= 2){
        next.disabled = true;
    }
    if(current_page < 2){
        next.disabled = false;
    }

    if(current_page <= 1){
        prev.disabled = true;
    }
    if(current_page > 1){
        prev.disabled = false;
    }


//giving background color to active------- ------------;
    let active = document.querySelectorAll('.pagination p');
    active.forEach((elem)=>{
        // console.log(elem.innerHTML);

        if(elem.innerHTML == current_page){
            elem.style.backgroundColor = "rgb(221,2,133)";
            elem.style.color = "white";
        }else{
            elem.style.backgroundColor = "#ddd";
            elem.style.color = "black";
        }

    });


});

let prev = document.getElementById("prev");
prev.disabled = true;
prev.addEventListener('click',()=>{
    current_page = current_page - 1;
    console.log(current_page);

    if(current_page==2){
        product_append(fragrance_2,container);
        console.log("called");
    }

    if(current_page==1){
        product_append(fragrance_1,container);
        console.log("called");
    }


    if(current_page <= 1){
        prev.disabled = true;
    }
    if(current_page > 1){
        prev.disabled = false;
    }

    if(current_page >= 2){
        next.disabled = true;
    }
    if(current_page < 2){
        next.disabled = false;
    }


//giving background color to active------- ------------;
    let active = document.querySelectorAll('.pagination p');
    active.forEach((elem)=>{
        // console.log(elem.innerHTML);

        if(elem.innerHTML == current_page){
            elem.style.backgroundColor = "rgb(221,2,133)";
            elem.style.color = "white";
        }else{
            elem.style.backgroundColor = "#ddd";
            elem.style.color = "black";
        }

    });


});


//importing navbar below;


// import {My_navbar} from "./components/R_navbar.js";
// let navbar_div = document.getElementById("navbar");
// navbar_div.innerHTML = My_navbar();


//importing navbar above;


//importing append function;
import {append} from "./script_append/append.js";

let current_page = 1;

let data1 = [
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/8/18_12_3.jpg",
    title:"Vaadi Herbals Aloe Vera Face Scrub",
    price: 285,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/7/17_14_4.jpg",
    title:"Vaadi Herbals 24 Carat Gold Massage Gel With 24 Carat",
    price: 320,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/4/o45.jpg",
    title:"O3+ Volcano Scrub",
    price: 450,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/4/o41_1.jpg",
    title:"O3+ Milk Scrub Dry Skin Dermal Zone",
    price: 431,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/8/288.jpg",
    title:"Himalaya Herbals Oil-Free Radiance Gel Cream",
    price: 260,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/7/s7.jpg",
    title:"Shahnaz Husain Shalocks Plus Ayurvedic Hair Oil",
    price: 640,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/1/s1_1.jpg",
    title:"Shahnaz Husain Gold 2-In-1 Anti Ageing Gel",
    price: 1857,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/1/41glllfrqml._sl1001_.jpg",
    title:"L'oreal Paris Aura Perfect Scrub",
    price: 400,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/2/b28.jpg",
    title:"Biotique Bio Sea Weed Revitalizing Anti Fatigue Eye",
    price: 199,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/2/b25.jpg",
    title:"Bioderma Atoderm Intensive Gel Moussant Ultra-Soothing",
    price: 599,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/1/c1.jpg",
    title:"Cetaphil Sun Spf 30 Light Gel",
    price: 1070,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/3/b3.jpg",
    title:"Biotique Advanced Organics Tea Tree Targeted Skin",
    price: 338,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/j/6/j6.jpg",
    title:"Joy Hydra Refresh Ultra Light Gel Moisturiser",
    price: 255,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be106.jpg",
    title:"Beeone Papaya Scrub",
    price: 394,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be102_1.jpg",
    title:"Beeone Papaya Facial Gel",
    price: 210,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be100.jpg",
    title:"Beeone Oxygen Facial Gel",
    price: 248,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be97.jpg",
    title:"Beeone Orange Facial Gel",
    price: 210,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be95.jpg",
    title:"Beeone Neem Scrub",
    price: 394,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be93.jpg",
    title:"Beeone Neem And Tulsi Face Pack",
    price: 230,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be91.jpg",
    title:"Beeone Mint Facial Gel",
    price: 210,
    },
    
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be85.jpg",
    title:"Beeone Lemon Facial Gel",
    price: 210,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be84.jpg",
    title:"Beeone Kesar Scrub",
    price: 393,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be69.jpg",
    title:"Beeone Gold Facial Gel",
    price: 230,
    },

    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be45.jpg",
    title:"Beeone Diamond Facial Gel",
    price: 248,
    },
]

let data2 = [
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl48.jpg",
        title:"Plum Spa At Home For Oily Skin",
        price: 805,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl47.jpg",
        title:"Plum Overnight Recovery Duo",
        price: 1948,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl39.jpg",
        title:"Plum Bright Years Under-Eye Recovery Gel",
        price: 833,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl36.jpg",
        title:"Plum Hello Aloe Gentle Cleansing Lotion",
        price: 340,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl21.jpg",
        title:"Plum BodyLovin' Drivin' Me Cherry Shower Gel",
        price: 330,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl20.png",
        title:"Plum Grape Seed & Sea Buckthorn Mild Foam Scrub",
        price: 285,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl15.jpg",
        title:"Plum E-Luminence Simply Supple Cleansing Balm",
        price: 475,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/l/pl12.jpg",
        title:"Plum Green Tea Glow-At-Home Set",
        price: 1715,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/8/18_12_3.jpg",
        title:"Vaadi Herbals Aloe Vera Face Scrub",
        price: 285,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/7/17_14_4.jpg",
        title:"Vaadi Herbals 24 Carat Gold Massage Gel With 24 Carat",
        price: 320,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/4/o45.jpg",
        title:"O3+ Volcano Scrub",
        price: 450,
    },
    
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/4/o41_1.jpg",
        title:"O3+ Milk Scrub Dry Skin Dermal Zone",
        price: 431,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/l/vl6.jpg",
        title:"O3+ Milk Scrub Dry Skin Dermal Zone",
        price: 431,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/3/h3.jpg",
        title:"Gillette Venus Bundle 2 Simply Venus B4G1 Packs",
        price: 707,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/3/h3.jpg",
        title:"Shahnaz Husain 24 Carat Gold Anti - Age Exfoliating",
        price: 1442,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/3/13_17_3.jpg",
        title:"Clean & Clear Blackhead Clearing Daily Scrub - (Pack)",
        price: 216,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm106.jpg",
        title:"Mamaearth BhringAmla Conditioner With Bhringraj",
        price: 290,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/k/k/kkk_1.jpg",
        title:"Himalaya Gentle Baby Laundry Wash (Pouch)",
        price: 374,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/f/dfdsfds.jpg",
        title:"Himalaya Herbals Anti-Dandruff Hair Oil",
        price: 207,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/e/5e2621e7612076600645_1_1_.jpg",
        title:"Cetaphil SUN SPF 50+ Light Gel",
        price: 981,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/e/fe6a144plumx00000151_1.jpg",
        title:"Plum 10% AHA + 5% PHA + 0.5% BHA Exfoliating Peel",
        price: 558,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/0/209f77clorea00000342_5.jpg",
        title:"L'Oreal Paris Revitalift Deep Purifying Crystal Cleansing",
        price: 499,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-49_1.jpg",
        title:"L'Oreal Paris Expert White Activ Oil Control Charcoal",
        price: 459,
    },
]

let data3 = [

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001408-34.png",
        title:"Himalaya Anti-Hair Fall Shampoo With Bhringaraja",
        price: 505,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001417-1.png",
        title:"Patanjali Kesh Kanti Hair Oil",
        price: 250,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/l/ll16.jpg",
        title:"Lakme Blush & Glow Green Apple Apricot Gel Scrub-Pack",
        price: 250,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/l/ll15.jpg",
        title:"Lakme Blush & Glow Orange Walnut Gel Scrub-Pack Of 2",
        price: 250,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001379-1.jpg",
        title:"Bioderma Sebium Sérum",
        price: 167,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/0/10_26_5.jpg",
        title:"Roop Mantra Mix Fruit Face Wash (Pack Of 2)",
        price: 1607,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/1/11_33_3.jpg",
        title:"Roop Mantra Mix Fruit Face Wash (Pack Of 2)",
        price: 1607,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/vatika_black_shine-2-min.jpeg",
        title:"Dabur Vatika Black Shine Shampoo 340mlDabur Vatika Black Shine Shampoo 340ml",
        price: 168,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/i/himalayan_organics-2-min_1.jpg",
        title:"Himalayan Organics Vitamin C Night Cream With",
        price: 1099,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/a/patanjali_ayurverd-1-min.jpg",
        title:"Patanjali Ayurverd Ltd Saundarya Anti Aging Cream",
        price: 264,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/0/100ml_honey.jpg",
        title:"Biotique Bio Honey Gel Refreshing Foaming Face",
        price: 120,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/revitalizing_night_cream.jpg",
        title:"Himalaya Herbals Revitalizing Night Cream",
        price: 260,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/e/definer_extra_smooth.jpg",
        title:"Himalaya Herbals Kajal Eye Definer Extra Smooth Cools",
        price: 140,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/i/rich_cocoa_butter.jpg",
        title:"Himalaya Herbals Rich Cocoa Butter Body Cream",
        price: 270,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/0/60eafc68904317300520.jpg",
        title:"Biotique Disney Princess Ariel Berry Smoothie Body",
        price: 175,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/d/5d4c26c8906009458977_b.jpg",
        title:"Biotique Bio Sea Kelp Protein Hair And Body Wash",
        price: 180,
    },

    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/f/ef9326cnykbndbio0035_a.jpg",
        title:"Biotique Complete Step By Step Skin Care Kit (Scrub,",
        price: 640,
    },
    
    {
        img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/8/58f76168904317300308_1.jpg",
        title:"Biotique Ocean Kelp Anti-Hair Fall Shampoo For Hair",
        price: 405,
    },
]

let container = document.querySelector(".products");

//making function to put data on the dom;

const dom = (data,box) =>{
    append(data,box);
}

dom(data1,container);


//making sort function 
let sort = document.getElementById("sort");
sort.addEventListener("change",()=>{
    my_sort();
})

const my_sort = () =>{
    let selected = document.getElementById("sort").value;
    if(current_page == 1){
        if(selected == "Name"){
            data1.sort((a,b)=>{
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return 0;
            });
        }
    
        if(selected == "low-high"){
            data1.sort((a,b)=>{
                if(a.price > b.price) return 1;
                if(a.price < b.price) return -1;
                return 0;
            });
        }
    
        if(selected == "high-low"){
            data1.sort((a,b)=>{
                if(a.price > b.price) return -1;
                if(a.price < b.price) return 1;
                return 0;
            });
        }
    
        dom(data1,container);
    }

    if(current_page == 2){
        if(selected == "Name"){
            data2.sort((a,b)=>{
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return 0;
            });
        }
    
        if(selected == "low-high"){
            data2.sort((a,b)=>{
                if(a.price > b.price) return 1;
                if(a.price < b.price) return -1;
                return 0;
            });
        }
    
        if(selected == "high-low"){
            data2.sort((a,b)=>{
                if(a.price > b.price) return -1;
                if(a.price < b.price) return 1;
                return 0;
            });
        }
    
        dom(data2,container);
    }

    if(current_page == 3){
        if(selected == "Name"){
            data3.sort((a,b)=>{
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return 0;
            });
        }
    
        if(selected == "low-high"){
            data3.sort((a,b)=>{
                if(a.price > b.price) return 1;
                if(a.price < b.price) return -1;
                return 0;
            });
        }
    
        if(selected == "high-low"){
            data3.sort((a,b)=>{
                if(a.price > b.price) return -1;
                if(a.price < b.price) return 1;
                return 0;
            });
        }
    
        dom(data3,container);
    }
}




//making pagination here;
let next = document.getElementById("next");
next.addEventListener("click",()=>{
    current_page++;
    console.log(current_page);

    if(current_page==1){
        dom(data1,container);
    }

    if(current_page==2){
        dom(data2,container);
    }

    if(current_page==3){
        dom(data3,container);
    }

//disabling and enabling the next and prev buttons;
    if(current_page >= 3){
        next.disabled = true;
    }
    if(current_page < 3){
        next.disabled = false;
    }

    if(current_page <=1){
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
prev.addEventListener("click",()=>{
    current_page--;
    console.log(current_page);

    if(current_page==1){
        dom(data1,container);
    }

    if(current_page==2){
        dom(data2,container);
    }

    if(current_page==3){
        dom(data3,container);
    }


    //disabling and enabling the next and prev buttons;
    if(current_page >= 3){
        next.disabled = true;
    }
    if(current_page < 3){
        next.disabled = false;
    }

    if(current_page <=1){
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



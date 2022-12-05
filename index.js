// slider animation
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




  // ********************************************

  // filtered products
  let makeup = [
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/5/85ee43en_3401575390447-01.jpg",
      title: "bioderma sensibio h2o makeup removing micellar cleansing",
      weight: "(250ml)",
      quantity: 1,
      id: "BBJ0003890",
      strikedOffPrice: "990.00",
      price: "910.00",
      discount: "8% Off",
      brand:'Bioderma',
    },
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/c/8c9c39226479_s1-8901030897429.jpg",
      title: "indulekha bringha hair strengthening lepam",
      weight: "(200ml)",
      quantity: 1,
      id: "BBJ0003875",
      strikedOffPrice: "648.00",
      price: "603.00",
      discount: "7% off",
      brand: 'Indulekha',
    },
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/c/3cabc5a8901030805080_2.jpg",
      title: "sunsilk almond & honey shampoo",
      weight: "(370ml)",
      quantity: 1,
      id: "BBJ0003876",
      strikedOffPrice: "345.00",
      price: "315.00",
      discount: "9% Off",
      brand: 'Sunsilk',
    },
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/e/8e0ca8ctrese00000040_1.jpg",
      title: "TRESemme Pro Pure Damage Recovery Shampoo",
      weight: "(390ml)",
      quantity: 1,
      id: "BBJ0003877",
      strikedOffPrice: "500.00",
      price: "465.00",
      discount: "7% Off",
      brand: 'Tresemme',
    },
  ];
  
  var arr = JSON.parse(localStorage.getItem("icon")) || [];
  append(makeup);
  
  function append(makeup) {
    makeup.map(function (elem) {
      // console.log(elem)
      var div = document.createElement("div");
  
      var image = document.createElement("img");
      image.src = elem.image;
      image.addEventListener("click",function(){
        aariftit(elem) 
      })
  
      var title = document.createElement("p");
      title.innerText = elem.title;
      title.addEventListener("click",function(){
        aariftit(elem) 
      })
  
      let rating = document.createElement("div");
      rating.setAttribute("id", "rating");
      rating.innerHTML = `
      <span>(1)</span>`;
  
      var div2 = document.createElement("div");
      div2.setAttribute("id", "price_tag");
  
      var sdprice = document.createElement("h4");
      sdprice.setAttribute("id", "cut_price_tag");
      sdprice.innerText = `₹${elem.strikedOffPrice}`;
  
      var price = document.createElement("h4");
      price.setAttribute("id", "price_color");
      price.innerText = `₹${elem.price}`;
  
      var dis = document.createElement("h4");
      dis.setAttribute("id", "dis_price");
      dis.innerText = elem.discount;
  
      var div3 = document.createElement("div");
      div3.setAttribute("id", "cart_div");
  
      var btn = document.createElement("button");
      btn.innerHTML = '<img src="https://delightful-duckanoo-17fff8.netlify.app/cart-38-24.png">';
      btn.addEventListener("click", function () {
        addel(elem);
      });
  
      let heart = document.createElement("span");
      heart.innerHTML = "🤍";
      heart.setAttribute("id", "whish_list");
  
      let spanBtn = document.createElement("span");
      spanBtn.innerText = "Add To Cart";
      btn.append(spanBtn);
  
      div2.append(sdprice, price, dis);
      div3.append(btn, heart);
      div.append(image, title, rating, div2, div3);
  
      document.getElementById("filter-products").append(div);
    });
  }

  // *****************************************

  // filtered products-1

  let popular = [
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/5/55c1d29plumx00000130_5_1.jpg",
      title: "Plum Bodylovin' Feelin' So Rose Body Mist",
      weight: "(250ml)",
      quantity: 1,
      id: "BBJ0003890",
      strikedOffPrice: "990.00",
      price: "910.00",
      discount: "8% Off",
      brand:'Bioderma',
    },
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/6/266b211plumx00000054_1.jpg",
      title: "Plum Bodylovin' Orchid You Not Body Mist",
      weight: "(150ml)",
      quantity: 1,
      id: "BBJ0003785",
      strikedOffPrice: "525.00",
      price: "483.00",
      discount: "8% off",
      brand: 'Plum',
    },
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/1/8123211plumx00000053_1.jpg",
      title: "Plum Bodylovin' Trippin' Mimosas Body Mist",
      weight: "(150ml)",
      quantity: 1,
      id: "BBJ0003781",
      strikedOffPrice: "525.00",
      price: "488.00",
      discount: "7% Off",
      brand: 'Plum',
    },
    {
      image:
        "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/f/9fd2fca8906087777243__1_.jpg",
      title: "Mamaearth Eau De Parfum For A Fragrance As Unique As You",
      weight: "(50ml)",
      quantity: 1,
      id: "BBJ0003737",
      strikedOffPrice: "699.00",
      price: "636.00",
      discount: "9% Off",
      brand: 'Mamaearth',
    },
  ];

  var arr2 = JSON.parse(localStorage.getItem("icons")) || [];
display(popular);

function display(makeup) {
  makeup.map(function (elem) {
    // console.log(elem)
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.src = elem.image;
    image.addEventListener("click",function(){
      aariftit(elem)
    })

    var title = document.createElement("p");
    title.innerText = elem.title;
    title.addEventListener("click",function(){
      aariftit(elem)
    })

    let rating = document.createElement("div");
    rating.setAttribute("id", "rating");
    rating.innerHTML = ` 
    <span>(1)</span>`;

    var div2 = document.createElement("div");
    div2.setAttribute("id", "price_tag");

    var sdprice = document.createElement("h4");
    sdprice.setAttribute("id", "cut_price_tag");
    sdprice.innerText = `₹${elem.strikedOffPrice}`;

    var price = document.createElement("h4");
    price.setAttribute("id", "price_color");
    price.innerText = `₹${elem.price}`;

    var dis = document.createElement("h4");
    dis.setAttribute("id", "dis_price");
    dis.innerText = elem.discount;

    var div3 = document.createElement("div");
    div3.setAttribute("id", "cart_div");

    var btn = document.createElement("button");
    btn.innerHTML = '<img src="https://delightful-duckanoo-17fff8.netlify.app/cart-38-24.png">';
    btn.addEventListener("click", function () {
      addel(elem);
    });

    let heart = document.createElement("span");
    heart.innerHTML = "🤍";
    heart.setAttribute("id", "whish_list");

    let spanBtn = document.createElement("span");
    spanBtn.innerText = "Add To Cart";
    btn.append(spanBtn);

    div2.append(sdprice, price, dis);
    div3.append(btn, heart);
    div.append(image, title, rating, div2, div3);

    document.getElementById("filter-products-1").append(div);
  });
}
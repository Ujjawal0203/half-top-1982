


let div = document.querySelector(".list_items");

//makeup section
document.getElementById("makeup").addEventListener("mousemove", displayMakeup);
document.getElementById("makeup").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});


// skins section
document.getElementById("skin").addEventListener("mousemove", displaySkins);
document.getElementById("skin").addEventListener("mouseout", () => {
  div.style.boxShadow = "none";
  div.innerHTML = null;
});


///////////////////////////////////////////


function displayMakeup() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.remove("column");

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "FACE";

  let p1 = document.createElement("p");
  p1.innerText = "BB Cream";

  let p2 = document.createElement("p");
  p2.innerText = "Blush";

  let p3 = document.createElement("p");
  p3.innerText = "Bronzer";

  let p4 = document.createElement("p");
  p4.innerText = "CC Cream";

  let p5 = document.createElement("p");
  p5.innerText = "Contour";

  let p6 = document.createElement("p");
  p6.innerText = "Concealer";

  let p7 = document.createElement("p");
  p7.innerText = "Compact & Powder";

  let p8 = document.createElement("p");
  p8.innerText = "Face Primer";

  let p9 = document.createElement("p");
  p9.innerText = "Foundation";

  let p10 = document.createElement("p");
  p10.innerText = "Highlighters";

  let p11 = document.createElement("p");
  p11.innerText = "Loose Powder";

  let p12 = document.createElement("p");
  p12.innerText = "Makeup Kits";

  let p13 = document.createElement("p");
  p13.innerText = "Makeup Remover";

  let p14 = document.createElement("p");
  p14.innerText = "Setting Spray";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14);

  // div 2 started
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "EYE";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Contact Lenses";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Eye Kit";

  let div2_p3 = document.createElement("p");
  div2_p3.innerText = "Eyeliner";

  let div2_p4 = document.createElement("p");
  div2_p4.innerText = "Eye Shadow";

  let div2_p5 = document.createElement("p");
  div2_p5.innerText = "Eye Primer";

  let div2_p6 = document.createElement("p");
  div2_p6.innerText = "Eye-Palettes";

  let div2_p7 = document.createElement("p");
  div2_p7.innerText = "Eye Makeup Remover";

  let div2_p8 = document.createElement("p");
  div2_p8.innerText = "Eye Brow Enhancers";

  let div2_p9 = document.createElement("p");
  div2_p9.innerText = "False Eyelashes";

  let div2_p10 = document.createElement("p");
  div2_p10.innerText = "Kajal";

  let div2_p11 = document.createElement("p");
  div2_p11.innerText = "Mascara";

  let div2_p12 = document.createElement("p");
  div2_p12.innerText = "Under Eye Concealer";

  div2.append(
    div2_h4,
    div2_p1,
    div2_p2,
    div2_p3,
    div2_p3,
    div2_p4,
    div2_p5,
    div2_p6,
    div2_p7,
    div2_p8,
    div2_p9,
    div2_p10,
    div2_p11,
    div2_p12
  );

  //  div 3 
  let div3 = document.createElement("div");

  let div3_h4 = document.createElement("h4");
  div3_h4.innerText = "LIPS";

  let div3_p1 = document.createElement("p");
  div3_p1.innerText = "Lipstick";

  let div3_p2 = document.createElement("p");
  div3_p2.innerText = "Liquid Lipstick";

  let div3_p3 = document.createElement("p");
  div3_p3.innerText = "Lip Liner";

  let div3_p4 = document.createElement("p");
  div3_p4.innerText = "Lip Gloss";

  let div3_p5 = document.createElement("p");
  div3_p5.innerText = "Lip Balm";

  let div3_p6 = document.createElement("p");
  div3_p6.innerText = "Lip Crayon";

  let div3_p7 = document.createElement("p");
  div3_p7.innerText = "Lip Stain";

  let div3_p8 = document.createElement("p");
  div3_p8.innerText = "Lip Plumper";

  div3.append(
    div3_h4,
    div3_p1,
    div3_p2,
    div3_p3,
    div3_p4,
    div3_p5,
    div3_p5,
    div3_p6,
    div3_p7,
    div3_p8
  );

  // div 4 
  let div4 = document.createElement("div");

  let div4_h4 = document.createElement("h4");
  div4_h4.innerText = "NAILS";

  let div4_p1 = document.createElement("p");
  div4_p1.innerText = "Manicure & Pedicure Kits";

  let div4_p2 = document.createElement("p");
  div4_p2.innerText = "Nail Polish";

  let div4_p3 = document.createElement("p");
  div4_p3.innerText = "Nail Care";

  let div4_p4 = document.createElement("p");
  div4_p4.innerText = "Nail Polish Sets";

  let div4_p5 = document.createElement("p");
  div4_p5.innerText = "Nail Art Kits";

  let div4_p6 = document.createElement("p");
  div4_p6.innerText = "Nail Polish Remover";

  div4.append(
    div4_h4,
    div4_p1,
    div4_p2,
    div4_p3,
    div4_p4,
    div4_p5,
    div4_p5,
    div4_p6
  );

  // div 5 
  let div5 = document.createElement("div");

  let div5_h4 = document.createElement("h4");
  div5_h4.innerText = "TOOLS BRUSHES";

  let div5_p1 = document.createElement("p");
  div5_p1.innerText = "Blush Brush";

  let div5_p2 = document.createElement("p");
  div5_p2.innerText = "Eyelash Curlers";

  let div5_p3 = document.createElement("p");
  div5_p3.innerText = "Eye Brush";

  let div5_p4 = document.createElement("p");
  div5_p4.innerText = "Face Brush";

  let div5_p5 = document.createElement("p");
  div5_p5.innerText = "Lip Brush";

  let div5_p6 = document.createElement("p");
  div5_p6.innerText = "Makeup Pouches";

  let div5_p7 = document.createElement("p");
  div5_p7.innerText = "Mirrors";

  let div5_p8 = document.createElement("p");
  div5_p8.innerText = "Sponges & Applicators";

  let div5_p9 = document.createElement("p");
  div5_p9.innerText = "Sharpeners";

  let div5_p10 = document.createElement("p");
  div5_p10.innerText = "Tweezers";

  div5.append(
    div5_h4,
    div5_p1,
    div5_p2,
    div5_p3,
    div5_p3,
    div5_p4,
    div5_p5,
    div5_p6,
    div5_p7,
    div5_p8,
    div5_p9,
    div5_p10
  );
  div.append(div1, div2, div3, div4, div5);
}



//////////////////////////////////////////////////



function displaySkins() {
  div.innerHTML = null;
  div.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  div.style.justifyContent = "space-between";
  div.style.width = "85%";
  div.classList.remove("column");

  let div1 = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = "EYE CARE";

  let p1 = document.createElement("p");
  p1.innerText = "Dark Circles";

  let p2 = document.createElement("p");
  p2.innerText = "Eye Contour Care";

  let p3 = document.createElement("p");
  p3.innerText = "Eye Cream";

  let p4 = document.createElement("p");
  p4.innerText = "Eye Masks";

  let p5 = document.createElement("p");
  p5.innerText = "Eye Serums";

  let p6 = document.createElement("p");
  p6.innerText = "Puffiness";

  let p7 = document.createElement("p");
  p7.innerText = "Under Eye Creams";

  let p8 = document.createElement("p");
  p8.innerText = "Under Eye Wrinkles";

  div1.append(h4, p1, p2, p3, p4, p5, p6, p7, p8);

  // div 2 
  let div2 = document.createElement("div");

  let div2_h4 = document.createElement("h4");
  div2_h4.innerText = "FACE CARE";

  let div2_p1 = document.createElement("p");
  div2_p1.innerText = "Anti- Ageing Creams";

  let div2_p2 = document.createElement("p");
  div2_p2.innerText = "Bleach Creams";

  let div2_p3 = document.createElement("p");
  div2_p3.innerText = "Brightening Cream";

  let div2_p4 = document.createElement("p");
  div2_p4.innerText = "Face Wash";

  let div2_p5 = document.createElement("p");
  div2_p5.innerText = "Facial Wipes";

  let div2_p6 = document.createElement("p");
  div2_p6.innerText = "Face Oil";

  let div2_p7 = document.createElement("p");
  div2_p7.innerText = "Face Cleansers";

  let div2_p8 = document.createElement("p");
  div2_p8.innerText = "Facial Kits";

  let div2_p9 = document.createElement("p");
  div2_p9.innerText = "Face Tools";

  let div2_p10 = document.createElement("p");
  div2_p10.innerText = "Moisturizer";

  let div2_p11 = document.createElement("p");
  div2_p11.innerText = "Mask & Peels";

  let div2_p12 = document.createElement("p");
  div2_p12.innerText = "Serum";

  let div2_p13 = document.createElement("p");
  div2_p13.innerText = "Toner & Astringents";

  div2.append(
    div2_h4,
    div2_p1,
    div2_p2,
    div2_p3,
    div2_p3,
    div2_p4,
    div2_p5,
    div2_p6,
    div2_p7,
    div2_p8,
    div2_p9,
    div2_p10,
    div2_p11,
    div2_p12,
    div2_p13
  );

  // div 3 
  let div3 = document.createElement("div");

  let div3_h4 = document.createElement("h4");
  div3_h4.innerText = "BODY CARE";

  let div3_p1 = document.createElement("p");
  div3_p1.innerText = "All Cream";

  let div3_p2 = document.createElement("p");
  div3_p2.innerText = "Body Moisturizers";

  let div3_p3 = document.createElement("p");
  div3_p3.innerText = "Body Toners";

  let div3_p4 = document.createElement("p");
  div3_p4.innerText = "Body Sun Care";

  let div3_p5 = document.createElement("p");
  div3_p5.innerText = "Brightening Lotion";

  let div3_p6 = document.createElement("p");
  div3_p6.innerText = "Dark Circles & Wrinkles";

  let div3_p7 = document.createElement("p");
  div3_p7.innerText = "Day Cream";

  let div3_p8 = document.createElement("p");
  div3_p8.innerText = "Foot Cream";

  let div3_p9 = document.createElement("p");
  div3_p9.innerText = "Hair Remover Cream";

  let div3_p10 = document.createElement("p");
  div3_p10.innerText = "Hand Creams";

  let div3_p11 = document.createElement("p");
  div3_p11.innerText = "Hands & Feet";

  let div3_p12 = document.createElement("p");
  div3_p12.innerText = "Kits & Combos";

  let div3_p13 = document.createElement("p");
  div3_p13.innerText = "Night Cream";

  let div3_p14 = document.createElement("p");
  div3_p14.innerText = "Neck Creams";

  let img1 = document.createElement("img");
  img1.src = "https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg";

  div3.append(
    div3_h4,
    div3_p1,
    div3_p2,
    div3_p3,
    div3_p3,
    div3_p4,
    div3_p5,
    div3_p6,
    div3_p7,
    div3_p8,
    div3_p9,
    div3_p10,
    div3_p11,
    div3_p12,
    div3_p13,
    div3_p14
  );

  div.append(div1, div2, div3, img1);
}








let query=document.getElementById("search").value;
console.log(query)


let search_btn=document.getElementById("search_btn")
search_btn.addEventListener("click",searchItems)




  async function searchItems(){

    try{
      let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`)
      
  
      let data=await res.json();
  
      console.log(data)
  
      apandData(data);
  
  
  
  
    }
    catch(err)
    {
      console.log(err)
    }
  
  }






let searchResult=document.getElementById("searchResult")
  
  function apandData(data){


  searchResult.innerHTML=null;
  
    data.forEach((el)=>{
   
      let div=document.createElement("div")
  
      let img=document.createElement("img")
      img.src=el.image_link;
  
      let price=document.createElement("p")
      price.innerText=el.price*70;
  
      let name=document.createElement("p")
      name.innerText=el.name;
  
      div.append(img,price,name);
  
      searchResult.append(div)
  
  
  
    })

  }


// let test=async()=>{
 
//   try{
//      let res=await fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
//      let data=await res.json()
//      console.log(data);
//      apandData(data);

//   }
//   catch(err)
//   {
//     console.log(err)
//   }

// }

// test();


// let container=document.getElementById("container")

// function apandData(data){


//   data.forEach((el)=>{
 
//     let div=document.createElement("div")

//     let img=document.createElement("img")
//     img.src=el.image_link;

//     let price=document.createElement("p")
//     price.innerText=el.price*70;

//     let name=document.createElement("p")
//     name.innerText=el.name;

//     div.append(img,price,name);

//     container.append(div)



//   })
 



// }













// const API_KEY = "AIzaSyDrlwxNh91Ug132x9wJN2EbzviXIKZUT_w";

// async function searchVideos(){
//     try {
    
//       const query = document.querySelector("#search").value;

//     const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`);
  
//     let data = await res.json();
//     // console.log("data", data)
  
//     const actual_data = data.items;
//     // console.log("actual_data",actual_data)
  
//     // appendmovies(actual_data);

    
    
//   }
//   catch (err) {
//     console.log("err", err)
//   }
  
//   };
//   searchVideos()
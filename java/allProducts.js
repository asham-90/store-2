const getAllProducts = async (page) => {

    const skip = (page - 1 ) * 4

    const data = await axios.get(`https://fakestoreapi.com/products?limit=4&skip=${skip}`);
    return data;
    
}







const displayAllProducts = async (page = 1) => {

    const data = await getAllProducts(page);


    const allproducts = data.data;

    const result = allproducts.map((allproducts) =>{

        return`

        <div class="products" >
        <div class='product'>
        <div class="product-img" >
        <img src="${allproducts.image}" class="img-m" />
        </div>

        <div class="product-contant" >
        <p>${allproducts.category}</p>
        <p>${allproducts.title}</p>
        <p>${allproducts.price}</p>
        <p>${allproducts.rating.rate}</p>
        <button class="addBtn" >add to cart </button>
        <a href="./productDetails.html?id=${allproducts.id}">more details</a>
        </div>
        


        </div>
        </div>


        `
    }).join(" ")

    document.querySelector(".allProducts .row").innerHTML=result

    custommodal()






}



displayAllProducts(page = 1);

const getAllProductspaginat = async () => {

 

    const data = await axios.get(`https://fakestoreapi.com/products`);
     
    const productpaginationLink = data.data

    const numOfPages = productpaginationLink.length / 4


    let  paginationLink =`<li><button  >&lt;</button></li>`
    
    for(let i = 1;i<=numOfPages;i++){

        paginationLink+=`<li><button  onclick="displayAllProducts(${i})">${i}</button></li>`
   
  
}

paginationLink+=`<li><button  >&gt;</button></li>`

document.querySelector(".paginatoin").innerHTML=paginationLink
    
}

getAllProductspaginat()



function custommodal(){


    const modal = document.querySelector(".my-modal");
    
    const larrow = document.querySelector(".arrow-l");
    
    const img =  Array.from( document.querySelectorAll(".img-m"));
    
    const Rarrow = document.querySelector(".arrow-r");
    
    const closeBtn = document.querySelector(".xmrk ");

    let currentIdex = 0


    img.forEach(function(image){



    
        image.addEventListener(`click`,image.onclick = (e) => {

            modal.classList.remove("d-none")
            modal.querySelector("img").setAttribute("src",e.target.src)
            const currentImg = e.target
            currentIdex=  img.indexOf(currentImg);
            console.log(currentIdex)
            

        } )

    })



    closeBtn.addEventListener(`click`,(e)=>{

        modal.classList.add("d-none")

    });


    Rarrow.addEventListener("click",(e)=>{

        currentIdex++;


        if(currentIdex >= img.length){

            currentIdex=0;
        }


        

        const src = img[currentIdex].getAttribute("src")

        modal.querySelector("img").setAttribute("src",src)

        })



        larrow.addEventListener("click",(e)=>{

            currentIdex--;


            if(currentIdex < 0){

    
                currentIdex = img.length -1
            }
    
    
        
    
            const src = img[currentIdex].getAttribute("src")
    
            modal.querySelector("img").setAttribute("src",src)
    
            })

        
        document.addEventListener("keydown",(e)=>{

            if(e.code == "ArrowRight"){

                currentIdex++;


                if(currentIdex >= img.length){

                    currentIdex=0;
                }
        
        
               
        
                const src = img[currentIdex].getAttribute("src")
        
                modal.querySelector("img").setAttribute("src",src)
        
                }

                console.log(e.key)


            })
           

        


            document.addEventListener("keydown",(e)=>{

                if(e.code == "ArrowLeft"){

                    currentIdex--;
    
    
                    if(currentIdex < 0){

    
                        currentIdex = img.length - 1;
                    }
            
            
                    const src = img[currentIdex].getAttribute("src")
            
                    modal.querySelector("img").setAttribute("src",src)
            
                    }
                 
    
    
                })



                document.addEventListener("keydown",(e)=>{

                    if(e.code == "Escape"){

                        modal.classList.add("d-none")
    
      
                
                        }
        
        
                    })





    };
    






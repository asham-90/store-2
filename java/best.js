const best = async  ()  =>{

    const {data} = await axios.get(`https://fakestoreapi.com/products/category/jewelery`);
    return data;
}

const addTobestselling = async () => {

    const details = await best();

    const result = details.map( (details) => {


        return `

        <div class="products" >
        <div class='product'>
        <div class="product-img  img-m" >
        <img src="${details.image}"/>
        </div>

        <div class="product-contant" >
        <p>${details.category}</p>
        <p>${details.title}</p>
        <p>${details.price}</p>
        <p>${details.rating.rate}</p>
        <button class="addBtn" >add to cart </button>
        <a href="./productDetails.html?id=${details.id}">more details</a>
        </div>
        


        </div>
        </div>
        
          
        
        `

    

    }).join(' ')


    document.querySelector(".bestSelling .row").innerHTML = result;

    custommodal()

}

addTobestselling();


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
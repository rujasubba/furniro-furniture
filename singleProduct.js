{/* <div class="image-container">
<img src="public/Assets/Asgaard sofa 3.png" alt="sofa">
</div>

<div class="product-details">
<H1>Asgaard Sofa</H1>
<p>price in AUD</p>
<p>product descriptions that need to be fetched from API</p>
</div> */}

/**
 * 1. call the Product API
 * 
 * Populate the data
 
 */


async function fetchData(){

    const productListContainer = document.getElementById('product-list')

    try{
        
        const data = await fetch('https://fakestoreapi.com/products/7') 
        
        
        const response = await data.json()

       
            const product = document.createElement('div')
            product.classList.add('product-container')

            const imgCont = document.createElement('div')
            imgCont.classList.add('image-container')

            const img = document.createElement('img')
            img.setAttribute('src', response.image)
            img.setAttribute('alt', response.title)

            imgCont.appendChild(img)
    
            const pDetails = document.createElement('div')
            pDetails.classList.add('product-details')
    
            const pH1 = document.createElement('h1')
            pH1.innerText = response.title
            
            const pH3 = document.createElement('h3')
            pH3.innerText = `AUD ${response.price}`
    
            const pPara = document.createElement('p')
            pPara.innerText = response.description

            pDetails.appendChild(pH1)
            pDetails.appendChild(pH3)
            pDetails.appendChild(pPara)

        
            product.appendChild(imgCont)
            product.appendChild(pDetails)
            productListContainer.appendChild(product)

            // const txt1 = document.createElement('p')
            // txt1.innerText = "size"

            // const buttonNames = ['L', 'XL', 'XS']

            // buttonNames.forEach(Name => {
            //     const newButton = document.createElement('button')
            //     newButton.innerText = Name
            // })

            // productListContainer.appendChild(txt1)
            // productListContainer.appendChild(newButton)


        }
     
     catch(e){
        console.error(e)
     }
    }
     fetchData();


            
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
        
        const data = await fetch('https://fakestoreapi.com/products/14') 
        
        
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


     const descriptionContainer = document.getElementById('pDesc')
     async function fetchDescription() {
        try{
            const response = await fetch('https://fakestoreapi.com/products/14');
            const data = await response.json();

            const desCont = document.createElement('div')
            desCont.classList.add('desc-container')


            const desHeading = document.createElement('h3')
            desHeading.innerText = 'Description'
            desCont.appendChild(desHeading)

            const descData = document.createElement('p')
            descData.innerText = data.description
            desCont.appendChild(descData)

            descriptionContainer.appendChild(desCont)

        }
        catch(e){
            console.error(e)
         }
     }
     fetchDescription();






    const containerSecond = document.getElementById('dataContainer');

    // Function to fetch data from the Fake Store API
    async function fetchLimitedData() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            // Select the first 4 items from the fetched data
            const itemsToDisplay = data.slice(0, 4);

            itemsToDisplay.forEach((item, index) => {
                // Create a container for each item
                const itemContainer = document.createElement('div');
                itemContainer.classList.add('item-containerSecond');

                const imgCont = document.createElement('div')
                imgCont.classList.add('image-containerSecond')

                itemContainer.appendChild(imgCont)

                

                const img = document.createElement("img")
                img.setAttribute('src', item.image)
                img.setAttribute('alt', item.title)
                imgCont.appendChild(img)



                
                // Create a text element for each item
                const titleElement = document.createElement('h2');
                titleElement.textContent = item.title
                itemContainer.appendChild(titleElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = item.category;
                itemContainer.appendChild(descriptionElement);

                const priceElement = document.createElement('h3');
                priceElement.textContent = `AUD ${item.price}`
                itemContainer.appendChild(priceElement);
   

                // Append the item container to the main container
                containerSecond.appendChild(itemContainer);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Fetch data when the page loads
    fetchLimitedData();




            
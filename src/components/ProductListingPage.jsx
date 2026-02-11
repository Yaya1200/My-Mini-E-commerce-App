import React from 'react'

function ProductListingPage() {
  const products =[ {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"}]

  return (
    <div>{
      products.map((element)=>(
        <div className='grid gap-3 grid-cols-5'>
          <div>
     <img src={products[0].thumbnail} alt="Phone product" />
     <h2>{products[0].title}</h2>
      <button>add</button>
          </div>
           <div>
     <img src={products[0].thumbnail} alt="Phone product" />
     <h2>{products[0].title}</h2>
      <button>add</button>
          </div>
           <div>
     <img src={products[0].thumbnail} alt="Phone product" />
     <h2>{products[0].title}</h2>
      <button>add</button>
          </div>
           <div>
     <img src={products[0].thumbnail} alt="Phone product" />
     <h2>{products[0].title}</h2>
      <button>add</button>
          </div>
           <div>
     <img src={products[0].thumbnail} alt="Phone product" />
     <h2>{products[0].title}</h2>
      <button>add</button>
          </div>
          <div>
     <img src={products[0].thumbnail} alt="Phone product" />
     <h2>{products[0].title}</h2>
      <button>add</button>
          </div>
          <div>
     <img src={products[0].thumbnail} alt="Phone product" />
     <h2>{products[0].title}</h2>
      <button>add</button>
          </div>
          </div>
      ))}
      </div>
  )
}

export default ProductListingPage
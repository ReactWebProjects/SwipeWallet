import React from 'react'

function ProductCart({name, price, img}) {

  return (
    <div class="flex flex-col items-center w-fit h-fit">
    <img alt="bg" src={img} class="w-[max(20vw, 250px)]"></img>
    <div class="z-20 text-center">
    <span class="font-rounded font-medium text-3xl">
     Swipe Wallet {name}
    </span>
    <div class="flex flex-col w-[max(20vw, 250px)] items-center my-2">
    <span class="font-extralight font-mon text-md">
      From ${price}
    </span>
    <span class="bg-blue-500 rounded-2xl py-1 my-2 px-4 text-white text-crimson text-lg mx-1">
        Buy
    </span>
    
     {/* <div id='product-component-1670713617669'></div> */}
    </div>

    </div>
    </div>
  )
}

export default ProductCart
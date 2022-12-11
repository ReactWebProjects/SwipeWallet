import React from 'react'
import BuyButton from './BuyButton'
function ProductCart({name, price, img, idNum, varId, compNum}) {
    
  return (
    <div class="flex flex-col items-center w-fit h-fit relative mt-10 justify-center">
    {/* <img alt="bg" src={img} class="w-[max(20vw, 260px)]"></img>
    <div class="z-20 text-center">
    <span class="font-rounded font-medium text-2xl">
     Swipe Wallet {name}
    </span>
    <div class="flex flex-col w-[max(20vw, 250px)] items-center my-2">
    <span class="font-extralight font-mon text-md">
      From ${price}
    </span> */}
    <div class="flex w-fit h-fit relative">
    <BuyButton id={`1234${compNum}`} idNum={idNum} varId={varId} compNum={compNum}/>
    {/* <div class="w-[100%] h-[50%] absolute bg-white bottom-0">

    </div> */}
    </div>
    </div>

    // </div>
    // </div>
  )
}

export default ProductCart
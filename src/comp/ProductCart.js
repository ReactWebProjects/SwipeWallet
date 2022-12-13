import React from 'react'
import BuyButton from './BuyButton'
function ProductCart({idNum, varId, compNum}) {
    
  return (
    <div class="flex flex-col items-center w-fit h-fit relative mt-10 justify-center bg-black">
    <div class="flex w-fit h-fit relative bg-black">
    <BuyButton id={`1234${compNum}`} idNum={idNum} varId={varId} compNum={compNum}/>
    </div>
    </div>
  )
}

export default ProductCart
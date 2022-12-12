import React from 'react'

function ImgLineShort() {
  return (
    
    <div class="max-sm:flex max-sm:flex-row hidden w-screen my-10 h-[45vw]"> 
    <div class="w-screen h-[22.5vw] bg-white z-10">
      
    </div>

    <img alt="bg" src={require("../assets/blackridgewallet.png") } class="z-20 absolute left-[-5vw] w-[45vw] rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="z-0 absolute left-[-2.5vw] w-[40vw]"></img>

    <img alt="bg" src={require("../assets/goldridgewallet.webp") } class="z-20 absolute left-[27.5vw]  w-[45vw] rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/goldwallet.png") } class="z-20 absolute left-[27.5vw]  w-[45vw] rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="z-0 absolute left-[30vw] w-[40vw]"></img>
    
    <img alt="bg" src={require("../assets/pinkridgewallet.webp") } class="z-20 absolute left-[60vw] w-[45vw]  rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/rosewallet.png") } class="z-20 absolute left-[60vw] w-[45vw]  rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="z-0 absolute left-[62.5vw] w-[40vw]"></img>


    </div>
  )
}

export default ImgLineShort
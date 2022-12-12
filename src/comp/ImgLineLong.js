import React from 'react'

function ImgLineLong() {
  return (
    <div class="flex flex-row w-screen my-10 h-[30vw] max-sm:hidden"> 
    <div class="w-screen h-[22.5vw] bg-white z-10">
    </div>
    <img alt="bg" src={require("../assets/blackridgewallet.png") } class="z-20 absolute left-[-15vw] w-[30vw] rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="z-0 absolute left-[-13vw] w-[26vw]"></img>

    <img alt="bg" src={require("../assets/goldwallet.png") } class="z-20 absolute left-[10vw]  w-[30vw] rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/goldridgewallet.webp") } class="z-10 absolute left-[10vw]  w-[30vw] rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="z-0 absolute left-[12vw] w-[26vw]"></img>

    <img alt="bg" src={require("../assets/pinkridgewallet.webp") } class="z-20 absolute left-[35vw] w-[30vw]  rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/rosewallet.png") } class="z-20 absolute left-[35vw] w-[30vw]  rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="z-0 absolute left-[37vw] w-[26vw]"></img>


    <img alt="bg" src={require("../assets/rainbowridgewallet.webp") } class="z-20 absolute left-[60vw] w-[30vw]  rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/rainbowwallet.png") } class="z-20 absolute left-[60vw] w-[30vw]  rotate-[90deg]"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="z-0 absolute left-[62vw] w-[26vw]"></img>

    <img alt="bg" src={require("../assets/ashridgewallet.webp") } class="clipimg1 z-20 absolute left-[85vw] w-[30vw] rotate-[90deg] overflow-hidden"></img>
    <img alt="bg" src={require("../assets/ridgewallet.webp") } class="clipimg2 z-0 absolute left-[87vw] w-[26vw] overflow-hidden"></img>
    </div>
  )
}

export default ImgLineLong
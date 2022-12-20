import React from 'react'

export default function Header({product, phrase}) {
  return (
    <div class="w-screen pt-[130px] text-center flex flex-col items-center z-10">
    <div class="flex flex-row relative h-16 text-center items-center">
    {/* <img src={require("../assets/SwipeS.png")} class="flex w-16 h-16 absolute left-0"></img> */}
    <span class="font-lato text-3xl max-sm:text-xl font-medium mx-5 text-black">
     Why {product}
    </span>
    </div>
    
    {phrase.map((words) => (
    <span class="font-lato text-8xl max-sm:text-7xl max-sm:font-semibold font-bold text-black">
        {words}
    </span>
  ))}
  </div>
  )
}

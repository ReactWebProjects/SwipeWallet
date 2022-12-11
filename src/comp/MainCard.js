import React from 'react'

function MainCard({title, text, img}) {
  return (
    
    <div class="rounded-3xl bg-opacity-10 bg-[#5e5d5d] w-[96vw] flex flex-row items-start h-fit overflow-hidden">
    <div class=" flex flex-col w-fit px-[4rem] pt-[4rem]">
    <span class="text-black font-rounded font-medium text-[3rem]  max-lg:text-[2rem] max-lg:leading-[2.3rem] leading-[3.3rem]">
     {title}
    </span>
    {/* <span class="text-black font-rounded font-medium text-[2rem] max-lg:text-[1.5rem] max-lg:leading-[1.7rem] leading-[2.2rem]">
      Track all the ways you’re&nbsp;active.
    </span> */}
    <span class="font-mon font-semibold text-gray-400 mt-2 text-[1.6rem] max-lg:text-[1.4rem] max-lg:leading-[1.8rem] leading-[2rem] mb-10">
    {text}
    </span>
    </div>
    <img alt="bg" src={img} class="w-[80vw] clipimg3 overflow-x-hidden"></img>
    </div>
  )
}

export default MainCard
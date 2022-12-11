import React from 'react'

function MainCardFit({title, text, img}) {
  return (
    
    <div class="rounded-3xl bg-opacity-10 bg-[#5e5d5d] w-[96vw] flex flex-row items-start overflow-hidden h-fit">
    <div class=" flex flex-col w-fit px-[4rem] pt-[4rem]">
    <span class="text-black font-rounded font-medium text-[2rem] max-[815px]:text[1.5rem] max-[815px]:leading-[1.7rem]  max-lg:text-[1.8rem] max-lg:leading-[2rem] leading-[2.2rem]">
     {title}
    </span>
    <span class="font-mon font-semibold text-gray-400 mt-2 text-[1.25rem] max-[815px]:text-[1.25rem] max-[815px]:leading-[1.6rem]  max-lg:text-[1.25rem] max-lg:leading-[1.7rem] leading-[1.9rem]  mb-10">
    {text}
    </span>
    </div>
    <img alt="bg" src={img} class="w-[80vw] overflow-x-hidden clipimg3"></img>
    </div>
  )
}

export default MainCardFit
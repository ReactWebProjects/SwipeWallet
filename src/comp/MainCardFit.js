import React from 'react'

function MainCardFit({title, text, img}) {
  return (
    
    <div class="rounded-3xl bg-opacity-10 bg-[#5e5d5d] relative w-[96vw] max-w-[90rem] flex flex-row items-start max-h-[30rem] h-[30rem]">
    <div class=" flex flex-col w-[50vw] px-[4rem] pt-[4rem] max-w-[40rem]">
    <span class="text-black font-rounded font-medium text-[2rem] max-[815px]:text[1.5rem] max-[815px]:leading-[1.7rem]  max-lg:text-[1.8rem] max-lg:leading-[2rem] leading-[2.2rem]">
     {title}
    </span>
    <span class="font-mon font-semibold text-gray-400 mt-2 text-[1.25rem] max-[815px]:text-[1.25rem] max-[815px]:leading-[1.6rem]  max-lg:text-[1.25rem] max-lg:leading-[1.7rem] leading-[1.9rem]  mb-10">
    {text}
    </span>
    </div>
    <img alt="bg" src={img} class="absolute right-0 top-0 w-[50vw] max-w-[35rem] clipimg3"></img>
    </div>
  )
}

export default MainCardFit
import React from 'react'

function MainCard({title, text, img}) {
  return (
    
    <div class="rounded-3xl bg-opacity-10 bg-[#5e5d5d] w-[96vw] max-w-[90rem] relative flex flex-row items-start justify-between max-h-[30rem] overflow-hidden h-fit min-h-[30rem] max-lg:min-h-[20rem]">
    <div class=" flex flex-col w-[50vw] px-[4rem] pt-[4rem] max-w-[40rem]">
    <span class="text-black font-rounded font-medium text-[2rem] max-[815px]:text[1.5rem] max-[815px]:leading-[1.7rem]  max-lg:text-[1.8rem] max-lg:leading-[2rem] leading-[2.2rem]">
     {title}
    </span>
    <span class="font-mon font-semibold text-gray-400 mt-2 text-[1.25rem] max-[815px]:text-[1.25rem] max-[815px]:leading-[1.6rem]  max-lg:text-[1.25rem] max-lg:leading-[1.7rem] leading-[1.9rem]  mb-10">
    {text}
    </span>
    </div>
    <img alt="bg" src={img} class="z-[0] w-[40rem] max-[900px]:w-[25rem] max-lg:w-[27rem] absolute max-w-[40rem] max-lg:right-[0] max-xl:right-[-5rem] xl:right-[-2rem] max-lg:top-[0] top-[-5%] overflow-visible"></img>
    </div>
  )
}

export default MainCard
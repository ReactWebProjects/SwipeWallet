import React from 'react'

function CardGrad({title, text, img}) {
  return (
    
    <div class="rounded-3xl bg-gradient-to-r from-[#ebecef] via-[#dddee0] to-white w-[96vw] max-w-[90rem] relative flex flex-row items-center justify-between max-h-[30rem] overflow-hidden h-fit min-h-[30rem] max-lg:min-h-[20rem]">
    <div class=" flex flex-col w-[50vw] px-[4rem] pt-[4rem] max-w-[40rem]">
    <span class="text-[rgb(34, 34, 34)] font-rob font-semibold text-[4rem] max-[815px]:text[3rem] max-[815px]:leading-[3.4rem]  max-lg:text-[3.6rem] max-lg:leading-[4rem] leading-[4.4rem] mb-4">
     {title}
    </span>
    <span class="font-nun font-semibold text-[rgb(34, 34, 34)] mt-2 text-[1.25rem] max-[815px]:text-[1.25rem] max-[815px]:leading-[1.6rem]  max-lg:text-[1.25rem] max-lg:leading-[1.7rem] leading-[1.9rem]  mb-10">
    {text}
    </span>
    </div>
    <img alt="bg" src={img} class="z-[0] w-[50vw] absolute right-[-5vw] top-[-10vw] overflow-visible"></img>
    </div>
  )
}

export default CardGrad
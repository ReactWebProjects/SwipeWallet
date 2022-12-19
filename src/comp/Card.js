import React from 'react'

export default function Card({img, phrases, text}) {
  return (
  
    <div class="rounded-3xl bg-[#5e5d5d]/[.15] max-w-[44rem] w-[47vw] max-[815px]:w-[80vw] max-sm:w-[90vw] max-sm:py-[2.2rem]  max-sm:px-[2.2rem] px-[4rem] py-[4rem] flex flex-col">
    {phrases.map((words) => (
        <span class="text-white font-nun font-medium text-[2rem] max-[815px]:text[1.5rem] max-[815px]:leading-[1.7rem]  max-lg:text-[1.8rem] max-lg:leading-[2rem] leading-[2.2rem]">
            {words}
        </span>
    ))}
    <span class="font-nun font-semibold text-gray-400  text-[1.25rem] max-[815px]:text-[1.25rem] max-[815px]:leading-[1.6rem]  max-lg:text-[1.25rem] max-lg:leading-[1.7rem] leading-[1.9rem] mt-2 mb-10">
        {text}
    </span>
    <img alt="bg" src={img} class="w-[150vw]"></img>
    </div>
  )
}

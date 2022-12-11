import React from 'react'

export default function Card({img, phrases, text}) {
  return (
  
    <div class="rounded-3xl bg-opacity-10 bg-[#5e5d5d] w-[47vw] max-[815px]:w-[70vw] max-sm:w-[90vw] px-[4rem] py-[4rem] flex flex-col">
    {phrases.map((words) => (
        <span class="text-black font-rounded font-medium text-[3rem] max-lg:text-[2rem] max-lg:leading-[2.2rem] leading-[3.3rem]">
            {words}
        </span>
    ))}
    {/* <span class="text-black font-rounded font-medium text-[2rem] max-lg:text-[1.5rem] max-lg:leading-[1.7rem] leading-[2.2rem]">
      Move. Exercise. Stand.
    </span>
    <span class="text-black font-rounded font-medium text-[2rem] max-lg:text-[1.5rem] max-lg:leading-[1.7rem] leading-[2.2rem]">
      Track all the ways you’re&nbsp;active.
    </span> */}
    <span class="font-mon font-semibold text-gray-400  text-[1.6rem] max-lg:text-[1.4rem] max-lg:leading-[1.8rem] leading-[2rem] mt-2 mb-10">
        {text}
    </span>
    <img alt="bg" src={img} class="w-[150vw]"></img>
    </div>
  )
}

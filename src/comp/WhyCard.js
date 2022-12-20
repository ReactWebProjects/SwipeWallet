import React from 'react'

function WhyCard({phrases, img, text, top}) {
  return (
    <div class={`rounded-3xl max-w-[44rem] bg-gray-200/[0.5] w-[47vw] max-[815px]:w-[80vw] max-sm:w-[90vw] flex flex-col`}>
        {top ? <img src={img} class="w-[100%] rounded-t-3xl"></img> : null}
    
    <div class="px-[4vw] py-[4vw] flex flex-col">
    {phrases.map((words) => (
        <span class="text-[rgb(34, 34, 34)] font-rob font-medium text-[4vw] max-[815px]:text[1.5rem] max-[815px]:leading-[1.7rem]  max-lg:text-[1.8rem] max-lg:leading-[2rem] leading-[2.2rem]">
            {words}
        </span>
    ))}
    <span class="font-nun font-semibold lg:mt-10 max-lg:mt-5 text-[rgb(34, 34, 34)]  text-[1.25rem] max-[815px]:text-[1.25rem] max-[815px]:leading-[1.6rem]  max-lg:text-[1.25rem] max-lg:leading-[1.7rem] leading-[1.9rem]">
        {text}
    </span>
    </div>
    {!top ? <img src={img} class="w-[100%] rounded-b-3xl"></img> : null}
    
    </div>
  )
}

export default WhyCard
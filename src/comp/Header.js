import React from 'react'

export default function Header({product, phrase}) {
  return (
    <div class="w-screen pt-[130px] text-center flex flex-col">
    <span class="font-lato text-4xl max-sm:text-2xl font-medium mx-5">
      Why {product}
    </span>
    {phrase.map((words) => (
    <span class="font-lato text-8xl max-sm:text-5xl max-sm:font-semibold font-bold">
        {words}
    </span>
  ))}
  </div>
  )
}

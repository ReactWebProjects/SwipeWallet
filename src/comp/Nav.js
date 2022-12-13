import React from 'react'

export default function Nav({productname}) {
  return (
    <div class="outline outline-1 outline-[grey] fixed z-30 h-12 w-screen backdrop-blur-md flex flex-row items-center">
    <div class="mx-[2.5%] w-[95%] flex-row justify-between flex items-center">
      <span class="font-rounded text-2xl text-white">
        {productname}
      </span>
      <div class="flex flex-row items-center">
      {/* <span class="material-icons-outlined text-3xl mx-1">
        expand_more
      </span> */}
      <a href="#bottom" class="bg-blue-500 hover:bg-blue-600 rounded-2xl py-1 px-5 text-white text-crimson text-md mx-1">
        Buy
      </a>
      </div>
    </div>
  </div>
  )
}

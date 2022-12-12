import React from 'react'

function Privacy() {
  return (
    <div class="flex items-center justify-center w-screen h-screen backdrop-blur-md z-50 fixed">
        <div class="w-[80vw] h-[80vh] max-w-[40rem] max-h-[40rem] bg-white px-2 py-2 flex items-center justify-center flex-col">
            <span class="text-3xl font-lato text-center w-fit my-5">
                Swipe Wallet Terms and Conditions
            </span>
            <span class="text-black font-lato w-[80%]">
            This site uses cookies to personalise your experience, analyse site traffic and keep track of items stored in your shopping basket. By Clicking ACCEPT or continuing to browse the site you are agreeing to our use of cookies. See our Privacy Policy here.
            </span>
        </div>
    </div>      
    
  )
}

export default Privacy
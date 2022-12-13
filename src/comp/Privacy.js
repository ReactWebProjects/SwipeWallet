import React from 'react'
import Nav from './Nav'
import Header from './Header'
import ImgLineLong from './ImgLineLong'
import ImgLineShort from './ImgLineShort'
import { NavLink } from 'react-router-dom'
function Privacy() {
  return (
    <div class="w-screen flex flex-col h-screen overflow-hidden">
    <Nav productname={"Swipe Wallet"}/>
    <Header product={"Swipe Wallet"} phrase={["Made for you", " Built to impress"]}/>
    <ImgLineLong/>
    <ImgLineShort/>
    <div id="privacy" class="flex items-center justify-center w-screen h-screen backdrop-blur-sm z-50 fixed">

        <div class="w-[80vw] h-[80vh] max-w-[40rem] rounded-2xl max-h-[40rem] bg-white px-2 py-2 flex items-center justify-center flex-col">
            <span class="text-3xl font-lato text-center w-fit my-5">
                Swipe Wallet Terms and Conditions
            </span>
            <span class="text-black font-lato w-[80%]">
            This site uses cookies to personalise your experience, analyse site traffic and keep track of items stored in your shopping basket. By Clicking ACCEPT or continuing to browse the site you are agreeing to our use of cookies. See our <NavLink to="/Terms" activeStyle>
            <span class="underline text-blue-500">Privacy Policy</span>
          </NavLink> here.
            </span>
            <span class="bg-blue-500 px-5 py-1 rounded-3xl text-white font-semibold font-lato my-10">
            <NavLink to="/home" activeStyle>
                Accept
            </NavLink>
            </span>
        </div>
    </div>     
    </div> 
    
  )
}

export default Privacy
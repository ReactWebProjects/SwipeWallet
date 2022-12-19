import {React, useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink, Route, useNavigate} from 'react-router-dom';
import MainPage from './MainPage';
export default function Nav({productname}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  window.addEventListener('resize', function(event){
    setOpen(false);
  });

  window.addEventListener('scroll', function(event){
    setOpen(false);
  });
  var r = document.querySelector(':root');
  useEffect(()=>{
    if (open){
      r.style.setProperty('--openBlock', 'block');
      r.style.setProperty('--openHeight', '9rem');
      r.style.setProperty('--openNavHeight', '9rem');
    } else {
      r.style.setProperty('--openBlock', 'none');
      r.style.setProperty('--openHeight', '3rem');
      r.style.setProperty('--openNavHeight', '0rem');
    }
  },[open, setOpen])
  const location = useLocation();
  return (
    <div class="navHeight w-screen flex flex-col top-0 left-0 outline outline-1 outline-white fixed backdrop-blur-md z-30">
    <div class="h-12 w-screen backdrop-blur-md flex flex-row items-center justify-center">
    <div class="mx-[2.5%] w-[90%] max-w-[90rem] flex-row justify-between flex items-center">
      <span class="font-nun text-2xl text-white lg:flex hidden">
        {productname}
      </span>
      <img src={require("../assets/SwipeS.png")} class="max-lg:flex hidden w-12 h-12"></img>
      <div class="flex flex-row items-center">
      {location.pathname != "/home" ? 
      <div class="flex flex-row">
      <span class="font-nun text-md mr-10 md:flex max-md:hidden text-gray-400 font-black">
        <NavLink to="/home" activeStyle>
                Overview
            </NavLink>
      </span> 
      <span class="font-nun text-md mr-10 md:flex max-md:hidden text-white">
      <NavLink to="/about" activeStyle>
              Why Swipe Wallet
          </NavLink>
    </span>
    </div>
      : 
      <div class="flex flex-row">
      <span class=" font-nun text-md mr-10 md:flex max-md:hidden text-white">
      <NavLink to="/home" activeStyle>
                Overview
            </NavLink>
    </span>
    <span class="font-nun text-md mr-10 md:flex max-md:hidden text-gray-400 font-black">
    <NavLink to="/about" activeStyle>
            Why Swipe Wallet
        </NavLink>
  </span>
  </div>}
      <div class="max-md:flex md:hidden max-md:flex-col items-center w-fit">
        <li class="dropdown dropdown-4 text-black">
          <span class="material-icons-outlined text-white text-3xl mx-1" onClick={()=>{setOpen(!open)}}>
            {open ? "keyboard_arrow_up" : "expand_more" }
          </span>
          <ul class="dropdown_menu dropdown_menu-4 h-24 z-30 flex flex-col w-screen pl-[7.5vw] justify-evenly">
          {location == "/home" ?
            <li class="dropdown_item-1 w-screen font-nun text-md h-max items-center flex flex-row justify-center text-gray-400 font-black"><NavLink to="/home" activeStyle>
                Overview
            </NavLink></li> : 
            <li class="dropdown_item-1 text-white w-screen font-nun text-md h-max items-center flex flex-row justify-center"><NavLink to="/home" activeStyle>
                Overview
            </NavLink></li>}
          {location != "/about" ? 
            <li class="dropdown_item-1 w-screen font-nun text-md h-max items-center flex flex-row justify-center text-gray-400 font-black"><NavLink to="/about" activeStyle>
                Why Swipe Wallet
            </NavLink></li> : 
            <li class="dropdown_item-1 text-white w-screen font-nun text-md h-max items-center flex flex-row justify-center"><NavLink to="/about" activeStyle>
                Why Swipe Wallet
            </NavLink></li>}
            <div class="navLine w-screen fixed border-b-[1px] border-white">

            </div>
          </ul>
        </li>
      </div>

      <a href="#bottom" class="bg-blue-500 hover:bg-blue-600 rounded-2xl py-1 px-5 text-white font-nun text-md mx-1" onClick={()=>{   
      navigate('/home')}}>
                Buy
      </a>
      </div>
    </div>
    <img src={require("../assets/SwipeS.png")} class="fixed right-[50%] w-12 h-12 lg:flex hidden"></img>
  </div>
  </div>

  )
}
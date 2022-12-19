import {React, useState} from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom';
function WhySwipe() {
    const [review, setReview] = useState("");
    const [pop, setPop] = useState(false);
    function onSumbit(){
        console.log(review)
        if (review.trim() != ""){
            setPop(true)
        }
        var i = document.getElementById("reviewInput").value
        i = ""
        setReview("")
        
    }
  return (
    <div class="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#020014] to-black">
      <div class="w-screen h-screen absolute z-0 bg-gradient-to-b from-[#060620] via-[#120042] to-[#020014]">


    </div>
    <Nav productname={"Swipe Wallet"}/>
    <span class="text-9xl w-fit h-fit z-30 text-white font-nun text-center items-center justify-center flex flex-row">
        Coming Soon...
    </span>
    <textarea value={review} size={10} rows="5" cols="60" onChange={(event)=>{setReview(event.target.value)}} type="text" class="z-30 flex flex-wrap w-[50vw] max-w-[60rem] p-2 text-white bg-transparent outline outline-2 outline-white mt-10" placeholder='Give us a review'>
    </textarea>
    <button id="reviewInput" class="bg-blue-500 rounded-3xl mt-5 py-1 px-5 font-nun z-30 text-white text-2xl" onClick={()=>{onSumbit()}}>Submit</button>
    {pop ? 
    <div class="flex items-center justify-center w-screen h-screen backdrop-blur-sm z-50 fixed">
        <div class="relative w-[80vw] h-[80vh] max-w-[40rem] rounded-2xl max-h-[40rem] bg-gradient-to-tl from-[#060620]/[0.95] via-[#120042]/[0.95] to-[#020014]/[0.95] px-2 py-2 flex items-center justify-center flex-col">
            <span class="text-3xl font-lato text-center text-white w-fit my-5">
                Thank you for reviewing us!
            </span>
            <button id="reviewInput" class="bg-blue-500 rounded-3xl mt-5 py-1 px-5 font-nun z-30 text-white text-2xl"><NavLink to="/home" activeStyle>
                Exit
            </NavLink></button>
        </div>
       
    </div>      
    : null}
    </div>

  )
}

export default WhySwipe
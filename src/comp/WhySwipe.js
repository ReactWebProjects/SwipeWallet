import {React, useState} from 'react'
import Nav from './Nav'
import WhyCard from './WhyCard';
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
    <div class="w-screen h-fit flex flex-col items-center justify-center">
    <div class="absolute z-[-10] top-0 left-0 w-screen bg-white h-[50vw]">

    </div>
    <Nav productname={"Swipe Wallet"}/>
    <div class="relative w-fit h-fit flex">
    <img src={require("../assets/sam.jpeg")} class="w-screen z-20"></img>
    <div class="absolute z-30 top-[40%] left-[5%] flex flex-col">
    <span class="text-6xl text-white font-lato font-semibold leading-[1.2]">
        Your Wallet. <br/> Your Way.
    </span>
    <span class="text-white font-nun font-thin text-xl mt-3 max-w-[25rem]">
    We build quality products that simplify and streamline your daily life. Our minimalist designs provide maximum utility, letting you do more with less.
    </span>
    </div>

    </div>
    {/* <span class="text-white text-6xl font-lato font-semibold my-10">
        Why Swipe?
    </span> */}
    <div class="flex flex-col h-fit w-screen">

    <div class="flex flex-row justify-evenly w-screen">
    <div class="w-fit h-fit mt-10">
    <WhyCard phrases={["Quality"]}  top={false} img={require("../assets/factory.jpg")} text={"Our wallets are made with the same high-quality materials and attention to detail as the Ridge Wallet, but at a fraction of the cost. We source our materials from the same supplier as the Ridge Wallet, so you can trust that you are getting the same level of quality at a much lower price."}/>
    </div>
    <div class="w-fit h-fit mt-32">
    <WhyCard phrases={["Options"]}  top={true} img={require("../assets/think.jpg")} text={"We offer a wide range of wallet styles and colors to choose from, so you can find the perfect one to suit your personal style and needs. Whether you prefer a minimalist design or something more rugged and durable, we have a wallet for you."}/>
    </div>
    </div>
    <div class="flex flex-row justify-evenly w-screen bg-white mt-10">
    <div class="w-[50vw] flex flex-col">
    <span class="text-black text-5xl font-lato font-semibold mt-10 ml-[4vw]">
    Customer Satisfaction
    </span>
    <span class="mx-[4vw] font-nun font-semibold mt-5 text-[rgb(34, 34, 34)]  text-[1.25rem] max-[815px]:text-[1.25rem] max-[815px]:leading-[1.6rem]  max-lg:text-[1.25rem] max-lg:leading-[1.7rem] leading-[1.9rem]">
    Our customers are consistently satisfied with their purchases from Swipe Wallet. We have a long track record of positive customer feedback and reviews, and we are confident that you will be just as happy with your Swipe Wallet.
    </span>
    </div>
    <div class="mt-10">
    <WhyCard phrases={["Support"]} img={require("../assets/support.jpg")} text={"At Swipe Wallet, customer satisfaction is our top priority. If you have any questions or concerns about your wallet, our team is here to help. We have a dedicated customer support team that is available to assist you with any issues you may have, and we always go the extra mile to ensure that our customers are happy with their purchase."}/>
    </div>
    </div>
    <img src={require("../assets/support.jpg")} class="fixed top-0 left-0 w-screen z-[-20]"></img>

    {/* <div class="flex flex-row justify-evenly w-screen">
    <div class="w-fit h-fit mt-10">
    <WhyCard phrases={["Support"]}  text={"At Swipe Wallet, customer satisfaction is our top priority. If you have any questions or concerns about your wallet, our team is here to help. We have a dedicated customer support team that is available to assist you with any issues you may have, and we always go the extra mile to ensure that our customers are happy with their purchase."}/>
    </div>
    <div class="w-fit h-fit mt-16">
    <WhyCard phrases={["Free Shipping"]}  text={"We offer free shipping on all of our products, so you don't have to worry about any additional costs when you order from us."}/>
    </div>
    </div>
    
    <div class="flex flex-row justify-evenly w-screen">
    <div class="w-fit h-fit mt-10">
    <WhyCard phrases={["Support"]}  text={"At Swipe Wallet, customer satisfaction is our top priority. If you have any questions or concerns about your wallet, our team is here to help. We have a dedicated customer support team that is available to assist you with any issues you may have, and we always go the extra mile to ensure that our customers are happy with their purchase."}/>
    </div>
    <div class="w-fit h-fit mt-16">
    <WhyCard phrases={["Free Shipping"]}  text={"We offer free shipping on all of our products, so you don't have to worry about any additional costs when you order from us."}/>
    </div>
    </div> */}

    </div>
    
   
    {/* <textarea value={review} size={10} rows="5" cols="60" onChange={(event)=>{setReview(event.target.value)}} type="text" class="z-30 flex flex-wrap w-[50vw] max-w-[60rem] p-2 text-white bg-transparent outline outline-2 outline-white mt-10" placeholder='Give us a review'>
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
    : null} */}
    </div>

  )
}

export default WhySwipe
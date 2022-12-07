function App() {
  return (
    <div class="w-screen flex items-center flex-col">
      <div class="fixed z-30 w-[95%] h-24 justify-between text-center flex-row flex ml-[3%] items-center mx-[2.5%]">
        <span class="bg-clip-text text-transparent bg-gradient-to-br from-[#c0c0c0] via-[#470000] to-[#c0c0c0] text-6xl">
        <span class="">BRANDNAME</span>
        </span>
        <div class="w-[20%] flex justify-evenly">
          <span class="text-black font-[Pathway Gothic One] text-3xl">
            Buy
          </span>
          <span class="text-black font-[Pathway Gothic One] text-3xl">
            Contact
          </span>
          <span class="text-black font-[Pathway Gothic One] text-3xl material-icons-outlined">
shopping_cart
</span>
        </div>
        
      </div>
      <div class="h-fit flex items-center justify-center">
      <img  class="z-0 h-fit w-screen my-24" src={require("../src/assets/ridgepiecebg.webp")}></img>
      <span class="flex absolute z-10  text-white text-[6vw] leading-[6vw] font-[Pathway Gothic One] text-center items-center flex-col justify-center" >
            MADE FOR YOU <br/> BUILT TO IMPRESS
      </span>
      </div>
       <div class="flex z-20 flex-col justify-start h-screen w-screen items-end" >
        <img src={require("../src/assets/ridgewallet.webp") } class=" max-lg:top-[50%] lg:top-[80%] left-0 absolute rotate-[45deg] h-fit w-fit z-[-10]"></img>
        <img src={require("../src/assets/goldridgewallet.webp") } class="max-lg:top-[70%] lg:top-[100%] left-0 absolute rotate-[20deg] w-[36rem] z-[-10]"></img>
        <span class="text-black text-9xl font-[Pathway Gothic One] text-center w-screen ">
        FLAWLESS DESIGN
        </span>
        <div class="flex max-lg:flex-col lg:flex-row w-screen lg:justify-end max-lg:items-center">
        <span class="text-black max-lg:leading-[9vw] max-lg:text-[9vw] lg:text-[4vw] lg:leading-[4vw]  font-[Alexandria] text-center max-lg:mt-[10%] lg:mt-[25%] lg:ml-[10%]">
        “Slim yet expandable,<br/>low profile, but<br/>fully featured.”
        </span>
        <span class="text-black max-lg:leading-[9vw] max-lg:text-[9vw] lg:text-[4vw] lg:leading-[4vw] font-[Alexandria] text-center max-lg:mt-[10%] lg:mt-[5%] ">
        “Slim yet expandable,<br/>low profile, but<br/>fully featured.”
        </span>
        </div>
        <div class="flex max-lg:flex-col lg:flex-row w-screen items-center ">
        <img src={require("../src/assets/ridgebackground.webp") } class="w-screen my-10"></img>
        <div class="absolute z-10 flex flex-col w-[50%] bg-transparent justify-center items-center">
        <span class="text-7xl text-[Pathway Gothic One] text-white w-fit text-center my-5">
          YOUR WALLET <br/> SMARTER
        </span>  
        <span class="text-3xl text-[Roboto Mono] text-black bg-white w-fit px-24 py-1 text-center">
          SHOP NOW
        </span>  
        </div>
       
        
{/*         
        <div class="flex-col flex justify-center items-center">
        <img src={require("../src/assets/blackridgewallet.webp") } class="bmax-lg:w-[90vw] lg:w-[30vw]"></img>
        <span class="text-4xl bg-black text-white rounded-2xl px-5 py-1">
        Buy Now
        </span>
        </div>
        <div class="flex-col flex justify-center items-center">
        <img src={require("../src/assets/goldridgewallet.webp") } class="bmax-lg:w-[90vw] lg:w-[30vw]"></img>
        <span class="text-4xl bg-black text-white rounded-2xl px-5 py-1">
        Buy Now
        </span>
        </div>
        <div class="flex-col flex justify-center items-center">
        <img src={require("../src/assets/pinkridgewallet.webp") } class="bmax-lg:w-[90vw] lg:w-[30vw]"></img>
        <span class="text-4xl bg-black text-white rounded-2xl px-5 py-1">
        Buy Now
        </span>
        </div> */}
        </div>

             
      </div>
      
    </div>
  );
}

export default App;

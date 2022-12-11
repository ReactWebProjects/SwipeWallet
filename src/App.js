import Nav from './comp/Nav';
import Header from './comp/Header';
import ImgLineLong from './comp/ImgLineLong';
import ImgLineShort from './comp/ImgLineShort';
import Card from './comp/Card';
import Text from './comp/Text';
import MainCard from './comp/MainCard';
import ProductCart from './comp/ProductCart';
import MainCardFit from './comp/MainCardFit'
function App() {
  // console.log("SDSD")
  return (
    
    <div class="w-screen h-fit flex flex-col items-center">
      <Nav productname={"Swipe Wallet"}/>
      <Header product={"Swipe Wallet"} phrase={["Made for you", " Built to impress"]}/>
      <ImgLineLong/>
      <ImgLineShort/>
      <Text/>
      <div class="flex flex-col my-5 max-[815px]:mb-[5vw] mb-[2vw] items-center">
      <span class="font-mon text-8xl max-sm:text-5xl max-sm font-bold text-center my-10">
        Your Wallet, <br/> Smarter
      </span>
      <div class="max-[815px]:hidden flex">
        <MainCard img={require("../src/assets/walletblack.png")} title={'Small Form Factor'} text={"The Swipe Wallet is made of premium metal or carbon fiber, with a small but rigid form factor that feels high-quality in your hands and will not scratch or break if dropped."}/>
        </div>
        <div class="max-[815px]:flex hidden">
        <Card 
          img={require("../src/assets/walletblack.png")}
          text={"The Swipe Wallet is made of premium metal or carbon fiber, with a small but rigid form factor that feels high-quality in your hands and will not scratch or break if dropped."} 
          phrases={['Small Form Factor']}/>
        </div>
      </div>
      <div class="max-sm:cardssm max-[815px]:cardsmd min-[815px]:cardslg">
      <Card 
           img={require("../src/assets/walletgreen.png")}
          text={'The Swipe Wallet has adjustable straps that can accomodate any number of cards from one to twelve while remaining in its ideal small form factor, staying flush in your pocket without taking up the whole space.'} 
          phrases={["Adjustable Strap"]}/>
      <Card 
          img={require("../src/assets/walletblue.png")} 
          text={'The Swipe Wallet has a unique feature that prevents RFID attacks, keeping your cards\' magnetic information safe in your wallet and safe from any attacks that attempt to remotely steal your card information.'} 
          phrases={["RFID Blocking:"]}/>

      </div>
      <div class="max-[815px]:hidden flex max-[815px]:mt-[5vw] mt-[2vw] ">
        <MainCardFit title={"Airtag Holder"} text={"On select models, Swipe Wallet offers an airtag holder to ensure that you will never lose your wallet again. These wallets come with different styling while maintaining all of the features that the standard Swipe Wallet comes with."} img={require("../src/assets/findwallet.webp")}/>
      </div>
      <div class="max-[815px]:flex hidden  max-[815px]:mt-[5vw] mt-[2vw] ">
        <Card 
          img={require("../src/assets/findwallet.webp")}
          text={"On select models, Swipe Wallet offers an airtag holder to ensure that you will never lose your wallet again. These wallets come with different styling while maintaining all of the features that the standard Swipe Wallet comes with."} 
          phrases={["Airtag Holder"]}/>
      </div>
    <div class="mt-72 justify-center w-[70vw] flex flex-col">
      <span class="font-lato text-5xl max-sm:text-3xl max-sm:font-semibold font-bold text-center">
      Which Swipe Wallet is right for you?
      </span>
      <div class="productcol">
        <ProductCart
         idNum={'8049433411884'} varId={'44101552931116'} compNum="1670776325070" 
         name={"Classic"} price={99.99} img={require("./assets/blackridgewallet.webp")}/>
        <ProductCart 
          idNum={'8049433510188'} varId={'44101552931116'} compNum="1670776325071" 
          name={"Titanium"} price={99.99} img={require("./assets/titaniumridgewallet.webp")}/>
        <ProductCart 
          idNum={'8049433542956'} varId={'44101552931116'} compNum="1670776325072" 
          name={"Carbon"} price={99.99} img={require("./assets/carbonridgewallet.webp")}/>
        {/* <ProductCart 
          idNum={'8049433411884'} varId={'44101552931116'} compNum="1670776325073" 
          name={"Ember"} price={99.99} img={require("./assets/ashridgewallet.webp")}/>
        <ProductCart 
          idNum={'8049433411884'} varId={'44101552931116'} compNum="1670776325074" 
          name={"Gold"} price={99.99} img={require("./assets/goldridgewallet.webp")}/>
        <ProductCart 
          idNum={'8049433411884'} varId={'44101552931116'} compNum="1670776325075" 
          name={"Rainbow"} price={99.99} img={require("./assets/rainbowridgewallet.webp")}/> */}
      </div>
    </div>
  </div>

    
  );
}

export default App;





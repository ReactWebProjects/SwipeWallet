import Nav from './comp/Nav';
import Header from './comp/Header';
import ImgLineLong from './comp/ImgLineLong';
import ImgLineShort from './comp/ImgLineShort';
import Card from './comp/Card';
import Text from './comp/Text';
import MainCard from './comp/MainCard';
import ProductCart from './comp/ProductCart';
import BuyButton from './comp/BuyButton';
function App() {
  return (
    
    <div class="w-screen h-fit flex flex-col items-center">
      <Nav productname={"Swipe Wallet"}/>
      <Header product={"Swipe Wallet"} phrase={["Made for you", " Built to impress"]}/>
      <BuyButton idNum={'7970174533932'}/>
      <ImgLineLong/>
      <ImgLineShort/>
      <Text/>
      <div class="flex flex-col my-5 mb-[2vw]">
      <span class="font-mon text-8xl max-sm:text-5xl max-sm font-bold text-center my-10">
        Your Wallet, <br/> Smarter
        </span>
        <div class="max-[815px]:hidden flex">
        <MainCard img={require("../src/assets/ridgewallet2.png")} title={'Small Form Factor'} text={" The Swipe Wallet is made of premium metal or carbon fiber, with a small but rigid form factor that feels high-quality in your hands and will not scratch or break if dropped."}/>
        </div>
        <div class="max-[815px]:flex hidden">
        <Card 
          img={require("../src/assets/ridgewallet2.png")}
          text={'The Swipe Wallet has adjustable straps that can accomodate any number of cards from one to twelve while remaining in its ideal small form factor, staying flush in your pocket without taking up the whole space.'} 
          phrases={["Adjustable Strap"]}/>
        </div>
      </div>
      <div class="max-sm:cardssm max-[815px]:cardsmd min-[815px]:cardslg">
      <Card 
           img={require("../src/assets/ridgewallet3.png")}
          text={'The Swipe Wallet has adjustable straps that can accomodate any number of cards from one to twelve while remaining in its ideal small form factor, staying flush in your pocket without taking up the whole space.'} 
          phrases={["Adjustable Strap"]}/>
      <Card 
          img={require("../src/assets/titaniumridgewallet.webp")} 
          text={'The Swipe Wallet has a unique feature that prevents RFID attacks, keeping your cards\' magnetic information safe in your wallet and safe from any attacks that attempt to remotely steal your card information.'} 
          phrases={["RFID Blocking:"]}/>

      <MainCard title={"Airtag Holder"} text={"On select models, Swipe Wallet offers an airtag holder to ensure that you will never lose your wallet again. These wallets come with different styling while maintaining all of the features that the standard Swipe Wallet comes with."} img={""}/>
      </div>
    <div class="mt-72 justify-center w-[70vw] flex flex-col">
      <span class="font-lato text-5xl max-sm:text-3xl max-sm:font-semibold font-bold text-center">
      Which Swipe Wallet is right for you?
      </span>
      <div class="productcol">
        <ProductCart name={"Classic"} price={99.99} img={require("./assets/blackridgewallet.webp")}/>
        <ProductCart name={"Titanium"} price={99.99} img={require("./assets/titaniumridgewallet.webp")}/>
        <ProductCart name={"Carbon"} price={99.99} img={require("./assets/carbonridgewallet.webp")}/>
        <ProductCart name={"Ember"} price={99.99} img={require("./assets/ashridgewallet.webp")}/>
        <ProductCart name={"Gold"} price={99.99} img={require("./assets/goldridgewallet.webp")}/>
        <ProductCart name={"Rainbow"} price={99.99} img={require("./assets/rainbowridgewallet.webp")}/>
      </div>
    </div>
  </div>

    
  );
}

export default App;




// options: {
//   "product": {
//     "contents": {
//       "img": false,
//       "title": false,
//       "price": false,
//       "options": false
//     },
//     "text": {
//       "button": "Buy"
//     },
//     "variantId": "43660243730732"
//   },
//   "cart": {
//     "styles": {
//       "button": {
//         "font-size": "13px",
//         "padding-top": "14.5px",
//         "padding-bottom": "14.5px",
//         ":hover": {
//           "background-color": "#3575dd"
//         },
//         "background-color": "#3b82f6",
//         ":focus": {
//           "background-color": "#3575dd"
//         },
//         "border-radius": "13px"
//       }
//     },
//     "text": {
//       "total": "Subtotal",
//       "button": "Checkout"
//     }
//   },
// },
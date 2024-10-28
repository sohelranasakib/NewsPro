import Banner from "./components/Banner"
import Covid19News from "./components/Covid19News"
import FesionLife from "./components/FesionLife"
import Header from "./components/Header"
import LimitOffer from "./components/LimitOffer"
import Menu from "./components/Menu"
import Navber from "./components/Navber"
import News from "./components/News"
import PopularNews from "./components/PopularNews"
import TreandingN from "./components/TreandingN"
import Videos from "./components/Videos"


function App() {
  

  return (
    <>
     <Header/>
     <Navber/>
     <Menu/>
     <Banner/>
     <News/> 
     <PopularNews/>
     <LimitOffer/>
     <FesionLife/>
     <TreandingN/>
     <Videos/>
     <Covid19News/>
    </>
  )
}

export default App

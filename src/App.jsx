import "./App.css"
import About from "./components/about/About"
import Effect from "./components/effect/Effect"

import LandingPage from "./components/landingPage/LandingPage"
import Loader from './components/loader/Loader'
import Work from "./components/work/Work"
function App() {

  return (
    <div className="portfolio">
   <Loader/>
   <LandingPage/>
   <About/>
   <Work/>
   <Effect/>

  
    </div>
  )
}

export default App

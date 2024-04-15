import { Header } from "./components/Header"
import Pratos from "./components/Pratos"
import Nav from './components/Nav'
import Footer from "./components/Footer"


function App() {

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Header/>

      <div style={{display:'flex', flexDirection:'row'}}>
        <Nav/>
        <Pratos/>
      </div>


      <Footer/>

   



    </div>   
  )
}

export default App


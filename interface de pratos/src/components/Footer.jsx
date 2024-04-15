import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import '../css/footer.css'

function Footer(){
  return (
    <footer>

    <div>
        <FaFacebook className='icon'/> <p> Barraca do Alibaba</p>
    </div>
    
   <div>
       <FaInstagram /> <p>Alibaba_barraca</p>
   </div>

    <div >
        <FaWhatsapp className='icon'/> <p>+244-451302</p>
    </div>



    </footer>
  )
}

export default Footer

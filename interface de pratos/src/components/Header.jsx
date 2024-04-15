import React from 'react'
import { FaUtensils} from 'react-icons/fa'

export const Header = () => {
  return (
    <div style={{backgroundColor:'black', width:'auto', height:'10vh', color:'white', display:'flex', alignItems:'center', justifyContent:'center', gap:'20px', fontFamily:'sans-serif',fontSize:'1.2rem' }}>
      <FaUtensils/>
      <p>BARRACA DO ALIBABA</p>
    </div>
  )
}

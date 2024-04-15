import {FaCircle} from "react-icons/fa"
import '../css/cardpratos.css'
import { useState} from "react"

function Card({name, image, price, tag, status, description}){
  
    const [estado, SetEstado] = useState('')
    

    const ToggleClick=()=>{
        if(estado === 'green'){
            SetEstado('red')  
        }else{
            SetEstado('green')
        }
    }
    
    return(
        <div className="Cardbody"> 
            <div className="Imagediv">
                <img src={image} alt={name}></img>
            </div>
            <div className="Body">
                <h2>{name}</h2>
                <p>{description}</p>
                <p> <b>Preço</b>:{price}</p>
                <hr></hr>

                <div className="States">
                    <p>{tag}</p>
                    <p >{status}</p>
                    <FaCircle
                        onClick={ToggleClick} 
                        color={estado}
                    />     
                </div>
            </div>
        </div>
    )
}

export default Card
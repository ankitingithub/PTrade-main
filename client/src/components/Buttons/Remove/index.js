import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri';
import {removeSymbl} from '../../../routes/watchList.routes';
import '../style.css'
import './style.css'

function Remove({illustration, remove}) {
    
    const onClick = () => {
        console.log("hatana part 1");
        remove();
    }
    
    return (
        <div className="RemoveButton" onclick={onClick} >
            <div className="RemoveIllustrationPart">
                {illustration}
            </div>
            
            <button className="RemoveButtonPart" onclick={onClick} >
                <RiDeleteBin6Line />
            </button>
        </div>
    )
}

export default Remove

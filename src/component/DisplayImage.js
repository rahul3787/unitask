import React from 'react'

function DispalyImage (props) {
    
    
    console.log(props.location.state )

    return(
        <div>
            {/* <img src={props.location.state[3].path} />   */}
            <h1 style={{fontFamily:"cursive"}}>Image Gallery</h1>
        </div>
    )
}

export default DispalyImage;
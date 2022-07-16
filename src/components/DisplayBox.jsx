import React from 'react';


const DisplayBox = (props) => {
    return (
        <div>
            {props.boxes.map((box, idx) => {
                return(
                    <div key = {idx} style={{backgroundColor: box.backgroundColor, width: box.width, height: box.height, border: box.border, display: 'inline-block'}}></div>
                )
            })}
        </div>
    )
}

export default DisplayBox;
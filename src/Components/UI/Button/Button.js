import React from 'react'

const button = (props) => {
    const btnStyle= `btn ${props.btnClr} ${props.cssM}`;
    return(
        <button className={btnStyle} onClick={props.clic}>
            {props.children}
        </button>
    )
}; 

export default button;
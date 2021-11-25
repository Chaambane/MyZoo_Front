import React from 'react'

    const title = (props) => {
        const titleCss = `${props.bgClr} fw-bold text-white text-center mt-1 p-2 rounded border border-secondary border-4`;
        return(
            <h1 className={titleCss} onClick={props.clic}>
                {props.children}
            </h1>
        )
    };

export default title;
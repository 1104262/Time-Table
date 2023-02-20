import React from "react";


const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h3>{props.event}</h3>
            <h4>{props.location}</h4>
        </td>
    );  
}

export default Event;
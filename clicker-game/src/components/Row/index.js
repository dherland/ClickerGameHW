import React from "react";

function Row(props) {
    return (
        <div className="row" heigth="1000px">
            {props.children}
        </div>
    )
}

export default Row;
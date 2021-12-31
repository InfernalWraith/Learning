import React from "react";

const LoadSpinner = props => {
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{props.loadText}</div>
        </div>
    )
}

export default LoadSpinner;

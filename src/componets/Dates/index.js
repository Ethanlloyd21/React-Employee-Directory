import React from 'react';

function Dates(props) {
    return (
        <input
            type="date"
            style={props.style}
            value={props.value}
            onChange={(event) => props.onChange(event, props.field)}
        />
    );
}

export default Dates;
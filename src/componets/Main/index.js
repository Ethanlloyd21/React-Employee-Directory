import React from 'react';
import './style.css';

function Main(props) {
    return <div className="main">{props.children}</div>;
}

export default Main;
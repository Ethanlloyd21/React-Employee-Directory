import React from 'react';
import './style.css';

function Navbar() {
    return (

        <div className="jumbotron jumbotron-fluid" id="top">
            <div class="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">A directory of employee's information in a single point of access</p>
                <hr className="my-4"></hr>
                <p className="lead" id="helper"><i>Click on carrots to filter by heading or use the search box to narrow your results.</i></p>

                <a className="btn btn-primary btn-lg" href="/" role="button">Refresh</a>

            </div>
        </div>

    );
}

export default Navbar;
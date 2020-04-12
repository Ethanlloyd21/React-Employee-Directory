import React from 'react';
import './style.css';

function Headers(props) {
    return (
        <div className="column-headers">
            <div className="image">
                <p>Image</p>
            </div>
            <div className="data">
                <p className="sortable" onClick={() => props.sortEmployees(`name`)}>
                    Name <i class="fa fa-angle-double-up"></i>
                </p>
            </div>
            <div className="data">
                <p>Phone</p>
            </div>
            <div className="email">
                <p>Email</p>
            </div>
            <div className="data">
                <p className="sortable" onClick={() => props.sortEmployees(`dob`)}>
                    DOB <i class="fa fa-angle-double-up"></i>
                </p>
            </div>
        </div>
    );
}

export default Headers;
import React, { useContext } from 'react';
import './file.css';
import Context from '../Context';

function File() {
    const { employees } = useContext(Context);
    return (
        <ul className="list-group">
            {employees.map((employee) => (
                <li key={employee.login.uuid} className="list-group-item">


                    <div className="image">
                        <img
                            src={employee.picture.thumbnail}
                            alt={`${employee.name.first} ${employee.name.last}`}
                            title={`${employee.name.first} ${employee.name.last}`}
                        />
                    </div>
                    <div className="info">
                        <p>{`${employee.name.first} ${employee.name.last}`}</p>
                    </div>
                    <div className="info">
                        <p>{employee.cell}</p>
                    </div>
                    <div className="email">
                        <p>{employee.email}</p>
                    </div>
                    <div className="info">
                        <p>{new Date(employee.dob.date).toLocaleDateString()}</p>
                    </div>

                </li>
            ))}
        </ul>
    );
}

export default File;
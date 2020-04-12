import React, { useContext } from 'react';
import './style.css';
import Dates from '../Dates';
import Dob from '../Dob';
import Context from '../Context';

function Directory(props) {
    const { search, dates, findByName } = useContext(Context);
    const css = {
        width: '20%',
        paddingLeft: '10px',
        borderRadius: '8px'
    };
    const buttonStyle = {
        borderRadius: '8px',
        marginLeft: '10px'

    }

    return (
        <div className="directory">
            <div className="dir">
                <Dob
                    style={buttonStyle}
                    whenClicked={props.filterEmployees}
                    args={[dates.startDate, dates.endDate]}
                    text={`DOB:`}
                />
                <Dates
                    style={css}
                    value={dates.startDate}
                    onChange={props.handleChange}
                    field={`startDate`}
                />
                <Dates
                    style={css}
                    value={dates.endDate}
                    onChange={props.handleChange}
                    field={`endDate`}
                />
                <Dob
                    style={buttonStyle}
                    whenClicked={findByName}
                    args={[search]}
                    text={`Search:`}
                />
                <input
                    id="name"
                    type="text"
                    style={css}
                    placeholder="Search"
                    value={search}
                    onChange={(event) => props.handleChange(event, `search`)}
                    onKeyUp={(event) => {
                        if (event.key === `Enter`) {
                            findByName(search);
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Directory;
import React from 'react';

const NamesList = (props) => {
    return (
        <ul>
            {props.names.map(name =>
                <li key={name}>{name}</li>
            )}
        </ul>
    );
}

export default NamesList;

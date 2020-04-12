import React from 'react';

const Context = React.createContext({
    employees: [],
    dates: {},
    search: ``,
    findByName: () => { },
});

export default Context;
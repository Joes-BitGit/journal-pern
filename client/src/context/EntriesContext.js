import React, { useState, createContext } from 'react';

export const EntriesContext = createContext();

export const EntriesContextProvider = (props) => {
  // list of entries that are fetched from the backend server
  // init: empty array
  const [entries, setEntries] = useState([]);

  const addEntries = (entry) => {
    setEntries([...entries, entry]);
  }

  return (
    // JS object in value, this is where all components have access
    <EntriesContext.Provider
      value={{
        entries,
        setEntries,
        addEntries
      }}
    >
      {props.children}
    </EntriesContext.Provider>
  )
}

import React, { useContext, useEffect } from 'react'
import { EntriesContext } from '../context/EntriesContext'
import Entries from '../apis/Entries'
import { useHistory } from 'react-router-dom'
const EntriesList = () => {
  const { entries, setEntries } = useContext(EntriesContext)
  let history = useHistory();

  // fetch from backend server
  // as soon as the components mounts onto screen
  useEffect(() => {
    // useEffect is synchronous to avoid race conditions async must be used inside the hook
    const fetchData = async () => {
      // You can await here
      try {
        // axios instance
        const response = await Entries.get('/');
        // set our state
        setEntries(response.data.entry);
        // console.log(response.data);

      } catch (err) {
        console.log('ERR, EntriesList.jsx: ', err);
      }
    }
    fetchData();
  }, []); // effect doesn't need props or state also to not rerender everytime component mounts

  const handleDelete = async (e, id) => {
    e.stopPropagation()
    try {
      const del = await Entries.delete(`/${id}`)
      setEntries(entries.filter((entry) => {
        return entry.id !== id
      }))
    } catch (err) {
      console.log('ERR, handleDelete: ', err);
    }
  }

  const handleEdit = (e, id) => {
    e.stopPropagation()
    history.push(`/entries/${id}/update`)
  }

  const handleAdd = () => {
    history.push('/')
  }

  const handleEntrySelect = (id) => {
    history.push(`entries/${id}`)
  }


  return (
    <>
      <table className="table table-dark table-hover mt-3" >
        <thead>
          <tr className="bg-info">
            <th scope='col'>Where</th>
            <th scope='col'>When</th>
            <th scope='col'>Feeling</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            entries && entries.map((entry) => {
              return (
                <tr key={entry.id} onClick={() => handleEntrySelect(entry.id)}>
                  <td>{entry.location}</td>
                  {/* HOW DO I TRUNCATE DATE FORMAT? */}
                  <td>{entry.time.split('T')[0]}</td>
                  <td>{"😁 ".repeat(entry.how)}</td>
                  <td>
                    <button className="btn btn-warning" onClick={(e) => handleEdit(e, entry.id)}>EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={(e) => handleDelete(e, entry.id)}>DELETE</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table >
      <button type="submit" className="btn btn-success btn-block" onClick={handleAdd}>Add New Entry</button>
    </>

  )
}

export default EntriesList

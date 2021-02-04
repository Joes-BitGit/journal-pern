import React, { useContext, useEffect, useState } from 'react'
// import { EntriesContext } from '../context/EntriesContext'
import Entries from '../apis/Entries'
import { useParams } from 'react-router-dom'

const UpdateEntry = (props) => {
  // context access
  // const { entries } = useContext(EntriesContext)

  // need to access args
  const { id } = useParams()
  const [when, setWhen] = useState("")
  const [where, setWhere] = useState("")
  const [feel, setFeel] = useState("Feeling")
  const [personal, setPersonal] = useState("")
  const [professional, setProfessional] = useState("")
  const [mindful, setMindful] = useState("")
  const [goal, setGoal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Entries.get(`/${id}`)
      // console.log(response.data);
      setWhen(response.data.entry[0].time)
      setWhere(response.data.entry[0].location)
      setFeel(response.data.entry[0].how)
      setPersonal(response.data.entry[0].personal)
      setProfessional(response.data.entry[0].professional)
      setMindful(response.data.entry[0].feel)
      setGoal(response.data.entry[0].goal_complete)

    }
    fetchData()
  }, [])

  return (

    <div>
      <form action="" method="post">
        <div className="form-row mb-3">
          {/* Location */}
          <div className="col">
            <input value={where} onChange={e => setWhere(e.target.value)} type="text" name="location" className="form-control" placeholder="Location" />
          </div>
          {/* Date */}
          <div className="col">
            <input value={when.split('T')[0]} onChange={e => setWhen(e.target.value)} type="date" name="date" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          {/* Feeling Level */}
          <label htmlFor="feeling">Feeling Level</label>
          <select name="feeling" className="custom-select" value={feel} onChange={e => setFeel(e.target.value)} >
            <option disabled >Feeling</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          {/* Personal */}
          <label htmlFor="personally-grateful">Personally Grateful</label>
          <textarea name="personally-grateful" cols="30" rows="5" className="form-control" placeholder="I am personally grateful for..." value={personal} onChange={e => setPersonal(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          {/* Professional */}
          <label htmlFor="professionally-grateful">Professionally Grateful</label>
          <textarea name="professionally-grateful" cols="30" rows="5" className="form-control" placeholder="I am professionally grateful for..."
            value={professional} onChange={e => setProfessional(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          {/* Mind */}
          <label htmlFor="mindfullness">Mindfullness</label>
          <textarea name="mindfullness" cols="30" rows="5" className="form-control" placeholder="What's on your mind today?" value={mindful}
            onChange={e => setMindful(e.target.value)}></textarea>
        </div>
        <label htmlFor="Goal">Goal</label>
        <div className="input-group mb-3">
          {/* Goal */}
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="checkbox" checked={goal} />
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Goal of the Day" />
        </div>
        {/* Buttons */}
        <div className="form-row">
          <div className="col">
            <button type="submit" className="btn btn-outline-dark" >View All Entries</button>
          </div>
          <div className="col-auto pb-1">
            <button type="submit" className="btn btn-primary" >Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateEntry

import React, { useEffect, useState } from 'react'
import Entries from '../apis/Entries'

import { useParams } from 'react-router-dom'

const DetailPage = () => {
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
      <h1 className="text-center display-3">{where}, {when.split('T')[0]}</h1>
      <h2>How did You feel? </h2>
      <p>{feel} / 5</p>
      <h2>Grateful</h2>
      <h3>Personally</h3>
      <p>{personal}</p>
      <h3>Professionally</h3>
      <p>{professional}</p>
      <h2>What was on your mind?</h2>
      <p>{mindful}</p>
      <h2>Goal Complete?</h2>
      <p>{goal ? "True" : "False"}</p>
    </div>
  )
}

export default DetailPage

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import MatchesList from '../../components/MatchesList/MatchesList';
import PlayersList from '../../components/PlayersList/PlayersList';
import './Style.css';

export default function Team(props) {
const [teamData, setTeamData] = useState(null)


const params=useParams()
useEffect(() => {
  fetch(`https://api.football-data.org/v2/teams/${params.id}`,{
    headers: {
      "X-Auth-Token": "f51730bb99764e75a62bf28d78002060"
    }
  })
  .then(result => result.json())
    .then(data => {
      return setTeamData(data)
    })
},[params])

if(!teamData){
  return null
}

  return (

    <div>
      <h1>{teamData.name}</h1>
      <ButtonGroup>
        <Button href="#/action-1" as={Link} to="./players">Players</Button>
        <Button href="#/action-2" as={Link} to="./matches">Matches</Button>
        {/* <Button href="#/action-3">Something else</Button> */}
      </ButtonGroup>
      <Routes>
      <Route path="players" element={<PlayersList players={teamData.squad} />} />
      <Route path="matches" element={<MatchesList />} />
      </Routes>
    </div>
  )
}

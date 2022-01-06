import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function MatchesList() {

  const [matchData, setMatchData] = useState(null)


  const params=useParams()
  useEffect(() => {
    fetch(`http://api.football-data.org/v2/teams/${params.id}/matches`,{
      headers: {
        "X-Auth-Token": "f51730bb99764e75a62bf28d78002060"
      }
    })
    .then(result => result.json())
      .then(data => setMatchData(data))
  },[params])
  
  if(!matchData){
    return null
  }

  return (
    <div>
      {matchData.matches.map((match) => (
        <div className="matchlist">
          <h4>{match.awayTeam.name} vs {match.homeTeam.name}</h4>
        </div>
      ))}
    </div>
  )
}

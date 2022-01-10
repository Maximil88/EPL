import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function MatchesList() {

  const [matchData, setMatchData] = useState(null)
  const [matchDetail, setMatchDetail] = useState(null)

  const handleClick = (e) => {
    const matchId = e.target.getAttribute('data-match-id');
    fetch(`http://api.football-data.org/v2/matches/${matchId}`, {
      headers: {
        "X-Auth-Token": "f51730bb99764e75a62bf28d78002060"
      }
    })
      .then(result => result.json())
      .then(data => {
        console.log(data)
        setMatchDetail(data)
      })
  }
    const params = useParams()
    useEffect(() => {
      fetch(`http://api.football-data.org/v2/teams/${params.id}/matches`, {
        headers: {
          "X-Auth-Token": "f51730bb99764e75a62bf28d78002060"
        }
      })
        .then(result => result.json())
        .then(data => {
          console.log(data)
          setMatchData(data)
        })
    }, [])

    if (!matchData) {
      return null
    }

    return (
      <>
        <ul className="results" onClick={handleClick}>
          {matchData.matches.map((match, index) => (
            <li key={index}>
              <h4 data-match-id={match.id}>{match.awayTeam.name} vs {match.homeTeam.name}</h4>
            </li>
          ))}
        </ul>
        <ul className="matchInfo">
          <li>score: {matchDetail && matchDetail.match.score.fullTime.homeTeam} - {matchDetail && matchDetail.match.score.fullTime.awayTeam}</li>
          {/* <li>Birth Date: {matchData.dateOfBirth}</li>
          <li>Nationality: {matchData.nationality}</li>
          <li>Position: {matchData.position} </li> */}
        </ul>
      </>
    )
}

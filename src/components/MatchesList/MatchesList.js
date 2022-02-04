import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Modal from '../../modal/modal';
import './Style.css';

export default function MatchesList() {

  const [matchList, setMatchList] = useState(null)
  const [matchDetail, setMatchDetail] = useState('')

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
          setMatchList(data)
        })
    }, [params.id])

    if (!matchList) {
      return null
    }

  //   const closeModal = () => {
  //     setMatchDetail(null);
  // }



    return (
      <>
        <ul className="results" onClick={handleClick}>
          {matchList.matches.map((match, index) => (
            <li key={index}>
              <h4 data-match-id={match.id}>{match.homeTeam.name} vs {match.awayTeam.name}</h4>
            </li>
          ))}
        </ul>
        <ul className="matchInfo">
          <li>score: {matchDetail && matchDetail.match.score.fullTime.homeTeam} - {matchDetail && matchDetail.match.score.fullTime.awayTeam}</li>
          <li>Venue: {matchDetail.match.venue}</li>
          <li>Date: {matchDetail.match.utcDate}</li>
        </ul>
      </>
    )
}

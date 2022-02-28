import React from 'react'
import { useState } from 'react';
import './Style.css';



export default function PlayersList(props) {

  const [playerData, setPlayerData] = useState('');

  const handleClick = (e) => {
    const playerId = e.target.getAttribute('data-playerid');
        fetch(`https://api.football-data.org/v2/players/${playerId}`,{
        headers: {
          "X-Auth-Token": "f51730bb99764e75a62bf28d78002060"
        }
      })
        .then(result => result.json())
        .then(data => {
          console.log(data)
          return setPlayerData(data)
        });
  }

  return (
    <>
    <ul className="results" onClick= {handleClick}>
      {props.players.map((player) => (
        <li >
          <h4 data-playerid={player.id}>{player.name}</h4>
        </li>
      ))}
    </ul>
<ul className="playerInfo">
<li>Name: {playerData.name}</li>
<li>Birth Date: {playerData.dateOfBirth}</li>
<li>Nationality: {playerData.nationality}</li>
<li>Position: {playerData.position} {playerData.shirtNumber}</li>
</ul>
</>
  )
}

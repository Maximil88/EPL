import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css';



export default function TeamCard(props) {
  return (
    <div>
      <Card border="dark" style={{ width: '18rem', marginBottom:'60px' }}>
        <div className='cardImgContainer'>
          <Card.Img variant="top" src={props.team.crestUrl} />
        </div>
        <Card.Body>
          <Card.Title>{props.team.name}</Card.Title>
          <Card.Text>
            {props.team.shortName} was founded in {props.team.founded}. The club colors
            are {props.team.clubColors} and it's venue is {props.team.venue}. To get more info on <thead>
            team's history visit {props.team.website}.
            </thead>
          </Card.Text>
          <Button variant="primary" as={Link} to={`./${props.team.id}`}>Team Page</Button>
        </Card.Body>
      </Card>
    </div>
  )
}


import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function TeamCard(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.team.crestUrl} />
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


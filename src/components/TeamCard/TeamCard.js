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
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" as={Link} to={`./${props.team.id}`}>Team Page</Button>
        </Card.Body>
      </Card>
    </div>
  )
}


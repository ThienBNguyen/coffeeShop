import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function AboutMenuSection() {
  return (
    <Card style={{ width: '35rem' }} className="text-right mt-5 bg-dark mb-5">
      <Card.Body>
        <Card.Title style={{ fontSize: '2em' }}>Discover</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '2em' }}>
          Our Menu
        </Card.Subtitle>
        <Card.Text>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </Card.Text>
        <Button
          variant="light"
          className="btn btn-primary btn-outline-primary px-4 py-3"
          placeholder="View Full Menu"
        >
          View Full Menu
        </Button>
      </Card.Body>
    </Card>
  );
}

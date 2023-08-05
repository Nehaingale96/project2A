import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MyForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to the server
    console.log('Submitted email:', email);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="name@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      {/* Add more Form.Group components for other input fields */}
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
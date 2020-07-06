import React from 'react';
import useForm from '../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const TodoForm = props => {

  const [_handleInputChange,_handleSubmit] = useForm(props.handleSubmit)


    return (
      <>
        <Card>
          <Form onSubmit={_handleSubmit}>
            <Form.Group><h3>Add To Do Item</h3></Form.Group>
            <Form.Label>To Do Item</Form.Label>
            <Form.Control name="text" placeholder="Item Details" onChange={_handleInputChange} />
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={_handleInputChange}/>
            <Form.Control className="range" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
            <Button type="submit" variant="primary">Add Item</Button>
          </Form>
        </Card>
      </>
    );
}

export default TodoForm;

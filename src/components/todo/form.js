import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoForm = props => {

  const [item,setItem] = useState({});

  const _handleInputChange = e => {
    setItem({...item,[e.target.name]: e.target.value });
    console.log(item)
  };
  

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

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

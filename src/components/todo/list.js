import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = props => {


  return (
    <ListGroup as="ul">
      {props.list.map(item => (
        <Card style={{width:'300px',margin:'0 0 10px 0'}} key={item._id}>
            <ListGroup.Item className={`complete-${item.complete.toString()}`} as="li">
            {item.complete ?  (<span onClick={() => props.handleComplete(item)} className="strike">Complete</span>): (<span onClick={() => props.handleComplete(item)} className="strike">Pending</span>)} <span>{item.assignee}</span> <span onClick={() => props.handleDelete(item._id)}  className="deleteItem">X</span>
            </ListGroup.Item>
            <Card.Body>
            <Card.Title>{item.text} </Card.Title>
              <small className="text-muted">Difficulty: {item.difficulty}</small>
          </Card.Body>
        </Card>
      ))}
    </ListGroup>


  );

}

export default TodoList;




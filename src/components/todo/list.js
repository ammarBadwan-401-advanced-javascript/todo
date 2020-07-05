import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = props => {


  return (
    <ListGroup as="ul">
      {props.list.map(item => (
          <ListGroup.Item variant="success" className={`complete-${item.complete.toString()}`}key={item._id} onClick={() => props.handleComplete(item._id)} as="li">{item.text}</ListGroup.Item>
      ))}
    </ListGroup>
  );

}

export default TodoList;

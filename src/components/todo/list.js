import React,{useContext} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import {PaginationContext} from '../todo/todo';
import Pagination from 'react-bootstrap/Pagination'

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = props => {
  const pageContext = useContext(PaginationContext);
  let pageNumbers = [];
  for (let i = 1; i<=pageContext.pages;i++){
    pageNumbers.push(i);
  }

  console.log(pageContext)
  return (
      
      <ListGroup as="ul">
        {pageContext.currentPosts.map(item => (
          <Card style={{width:'300px',margin:'0 0 10px 0'}} key={item._id}>
            <ListGroup.Item className={`complete-${item.complete.toString()}`} as="li">
              {item.complete ?  (<span onClick={() => pageContext.handleComplete(item)} className="strike">Complete</span>): (<span onClick={() => pageContext.handleComplete(item)} className="strike">Pending</span>)} <span>{item.assignee}</span> <span onClick={() => pageContext.handleDelete(item._id)}  className="deleteItem">X</span>
              </ListGroup.Item>
              <Card.Body>
              <Card.Title>{item.text} </Card.Title>
                <small className="text-muted">Difficulty: {item.difficulty}</small>
            </Card.Body>
          </Card>
        ))}
        <Pagination >{pageNumbers.map(val=>{
          return <Pagination.Item onClick={() =>pageContext.setPage(val) } style={{width:'40px'}} key={val}>{val}</Pagination.Item>
        })}</Pagination>
      </ListGroup>
  );

}

export default TodoList;




import React, {useState,useEffect} from 'react';
import useAjax from '../hooks/useAjax';
import TodoForm from './form.js';
import TodoList from './list.js';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import './todo.scss';

export const PaginationContext = React.createContext();

const ToDo = props => {

  const [list,setList] = useState([]);
  const [_addItem,_toggleComplete,_deleteList] = useAjax(addToList, list,toggle);
  const [currentPage, setCurrentPage] = useState(1);
  const [shownTasks, setShownTasks] = useState(3);
  const [reload,setReload] = useState(true);

  function addToList(item){
    setList([...list,item]);
  }
  function toggle(item){
    setList(item);
  }

  function setPage(page){
    setCurrentPage(page);
  }
  function sortDifficulty(){
    console.log('HI')
    
    let sortedList = list.sort((a,b)=>a.difficulty < b.difficulty ? 1 : -1);
    setList(sortedList);
    setReload(!reload);
  }



  const indexOfLastPost = currentPage * shownTasks;
  const indexOfFirstPost = indexOfLastPost - shownTasks;
  const currentPosts = list.slice(indexOfFirstPost,indexOfLastPost)
  const pages = Math.ceil((list.length/shownTasks));
  const theState = {
      currentPage,
      shownTasks,
      list,
      handleComplete: _toggleComplete,
      handleDelete:_deleteList,
      currentPosts,
      pages,
      setPage:setPage,
      setList,
      sortDifficulty,

  };


  useEffect(()=>{
    document.title = `TODO: ${list.filter(item => !item.complete).length} ITEMS`;
  },[list]);

  useEffect(()=>{
    axios.get('https://lab32-401.herokuapp.com/todo')
    .then(result =>{
      console.log(result.data)
      setList([...result.data])
    })
  },[]);


  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>
            <h1>Home</h1>
          </Navbar.Brand>
        </Navbar>
      </header>

      <section className="todo">
        <h2>To Do List Manager ({list.filter(item => !item.complete).length}) </h2>
        
        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <PaginationContext.Provider value={theState}>
          <TodoList/>
          </PaginationContext.Provider>
        </div>
      </section>
    </>
  );
}

export default ToDo;

/*
import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    this.setState({ list: [...this.state.list, item]});
  };

  toggleComplete = id => {

    let item = this.state.list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
      this.setState({list});
    }

  };

  componentDidMount() {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    this.setState({list});
  }

  render() {
    return (
      <>
        <header>
          <h2>
          There are {this.state.list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={this.addItem} />
          </div>

          <div>
            <TodoList
              list={this.state.list}
              handleComplete={this.toggleComplete}
            />
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;

*/
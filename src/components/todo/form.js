import React, {useState} from 'react';

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
        <h3>Add Item</h3>
        <form onSubmit={_handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={_handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={_handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
}

export default TodoForm;

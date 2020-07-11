import axios from 'axios';

const useAjax = (callback,callback2,toggleComplete) => {

  const _addItem = item =>{
    item.complete = false;
    axios.post('https://lab32-401.herokuapp.com/todo' , item)
    .then(res =>{
      callback(res.data);
    })
    .catch(e => console.log('ERROR: ' + e))
  }


  const _toggleComplete = item =>{
    item.complete = !item.complete;

    axios.put(`https://lab32-401.herokuapp.com/todo/${item._id}`, item)
    .then(result =>{
      console.log('Axios update result is');
      console.log(result.data)
      let theList = callback2.map(listItem => listItem._id === item._id ? item : listItem);
      toggleComplete(theList)
    })
    .catch(e=> console.log(e))
  }

  const _deleteList = id =>{
    axios.delete(`https://lab32-401.herokuapp.com/todo/${id}`)
    .then(result=>{
      let theList = callback2.filter(val => val._id !== id);
      toggleComplete(theList)
    })
  }
  return [_addItem,_toggleComplete,_deleteList];
}

export default useAjax;
import React, {useState} from 'react';
import axios from 'axios';

const useAjax = callback => {
  const [list,setList] = useState([]);

  const _addItem = item =>{
      console.log('HELLO FROM USEAJAX')
      console.log(item);
      console.log('BYE!');


    item.complete = false;
    axios.post('https://lab32-401.herokuapp.com/todo' , item)
    .then(res =>{
      callback(item);
      console.log(res)
    })
    .catch(e => console.log('ERROR: ' + e))
  }

  return [_addItem];
}

export default useAjax;
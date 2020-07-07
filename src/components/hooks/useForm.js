import {useState} from 'react';

const useForm = callback =>{

    const [item,setItem] = useState({});

    const _handleInputChange = e => {
      setItem({...item,[e.target.name]: e.target.value });
      console.log(item)
    };
    
  
    const _handleSubmit = (e) => {
      e.preventDefault();
      e.persist();
      e.target.reset();
      callback(item);
      setItem({});
    };

    return [_handleInputChange,_handleSubmit]
}

export default useForm;
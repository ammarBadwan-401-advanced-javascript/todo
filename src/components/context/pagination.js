import React, {useState} from 'react';

export const PaginationContext = React.createContext();

function ThePagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [shownTasks, setShownTasks] = useState(5);

  const indexOfLastPost = currentPage * shownTasks;
  const indexOfFirstPost = indexOfLastPost - shownTasks;

  const theState = {
      currentPage,
      shownTasks
  };


  return (
      <PaginationContext.Provider value={theState}>
        {props.children}
      </PaginationContext.Provider>
  )
}

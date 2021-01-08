import React from 'react';

import styles from './DisplayList.module.css';

const display = (props) => {

  let renderedList;

  if(props.lists.length){
    renderedList = props.lists.map((list) => {
      return (
        <div key={list.id} className={styles.list}>
          {console.log(list.id)}
          <p>{list.task}</p>
          <button className={styles.delete} onClick={()=>props.deleteList(list.id)}>Delete</button>
        </div>
      );
    })
  }else{
    renderedList = (<p className={styles.todo}>You don't have any todo's</p>)
  }


  return (
    <div className={styles.Display}>
      {renderedList}
    </div>
  );
}

export default display;
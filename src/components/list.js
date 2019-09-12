import React from "react";

function List(props) {
  console.log(props.list);
  return (
    <>
      <ul>
        {// everything needs a unique key of idx, val is person
        Object.entries(props.list).map((task, idx) => (
          <li key={idx}>
            {task}
            <button onClick={props.button}>delete </button>
          </li>
        ))
        // @747 on 9/10 setstate rerenders so virtual dom knows when to rerender. if no set state yu wouldnt rerender the one you would get an error
        }
      </ul>
      {/* <button onClick={props.button}>delete rando</button> */}
    </>
  );
}

export default List;

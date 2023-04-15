// import { Fragment } from "react"; This helps to return multiple element to the DOM and no having errors
// <Fragment>    </Fragment>
// ALSO by doing empy <> we can have the same results

import { useState } from "react";

// import { MouseEvent } from "react";
function Listgroup() {
  let items = ["Pizza", "Pasta", "Gelatto"];
  let selectedIndex = -1;

//   hook
useState(-1)

  //   items = [];
  //   const message = items.length === 0 ? <p>No item found!</p> : null ---> this one works the same as the function down here
  //   const getMessage = () => {
  //     items.length === 0 && <p>No item found!</p>;
  //   };
  // {getMessage()} this will be inside teh return method

  //   onClick={(event) => console.log(event + " Clicked")}

  //   Event handlers for clicks
//   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li> //normally the key uses the id of items to keep track of them
        ))}
      </ul>
    </>
  );
}

export default Listgroup;

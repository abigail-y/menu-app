import React from "react"

const MenuItem = ({itemId, itemPrice, itemName, itemDescription}) => {
return(
       <div className="menu-item" id={'menu-item-${itemId}'}>
        <span>${itemPrice}</span>
          <h1>{itemName}</h1>
          <p>{itemDescription}</p>
          <button>Add to Cart</button>
       </div>
);
}


export default MenuItem;
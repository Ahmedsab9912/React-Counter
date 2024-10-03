import React, { useState } from "react";

function ArrayComponent() {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
    const [item2, setItesm2] = useState(['Asad', 'Usman', 'Saif']);
    return (
        <>
      <div>
        <h2>Item List</h2>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
      <div>
        {item2.forEach((itemw) =>{
           <li>{itemw}</li>
        })}
      </div>
      </>
    );
  }

export default ArrayComponent;
 

/////////////////////////////////////////////////////////////
//////////////////////////////// *** What is a Component? ***
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//////////////////////// *** What is a Component's State? ***
/////////////////////////////////////////////////////////////

// A Component's state represents data it stores about itself.

/////////////////////////////////////////////////////////////
////////////////////////////// *** What does useState do? ***
/////////////////////////////////////////////////////////////

// useState stores data locally within the component
// If state changes, then the component is re-rendered

/////////////////////////////////////////////////////////////
////////////////////////////// *** How do I update state? ***
/////////////////////////////////////////////////////////////

// You only update state with a special "setState" method
// See examples below

///////////////////// *** What is an example of useState? *** ///////////////////

// Example 1
import React, { useState } from "react";
const [count, setCount] = useState(0);

function add() {
  setCount(count + 1);
}

return <div>{count}</div>;

// Example 2
import React, { useState } from "react";
const [name, setName] = useState("");

function rename(newName) {
  setName(newName);
}

return <div>{name}</div>;
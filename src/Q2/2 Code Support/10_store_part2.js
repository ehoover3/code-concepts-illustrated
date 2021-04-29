import React from "react";
import { useStore, COUNT, MY_BOOLEAN } from "./10_store_part2";

function About() {
  const count = useStore((state) => state.count);
  const myBoolean = useStore((state) => state.myBoolean);
  const about = useStore((state) => state.about);

  function addOne() {
    dispatch({
      type: COUNT,
      payload: count + 1,
    });
  }

  function toggleBoolean() {
    dispatch({
      type: MY_BOOLEAN,
      payload: !myBoolean,
    });
  }

  return (
    <div>
      <button onClick={addOne}>Add 1</button>

      <button onClick={toggleBoolean}>Toggle Boolean</button>
      {myBoolean ? <div>True</div> : <div>{about}</div>}
    </div>
  );
}
export default About;

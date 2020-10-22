/*
 *c
 * HomePage
 *
 */

import React, { memo, useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

import { TestComponentHeader } from "../components/TestComponentHeader";

const HomePage = () => {
  const handlerTest = (e) => {};

  const [state, setState] = useState("");
  return (
    <div>
      <h1>{pluginId}&apos;s 1 HomePage Mario</h1>
      <TestComponentHeader title={state} />
      {/* <p>Happy coding 12dd111 {state}</p> */}
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={handlerTest}>ddd</button>
    </div>
  );
};

export default memo(HomePage);

import React from "react";
import initialState from "./initial_state";

const GlobalDispatchContext = React.createContext(initialState);

export default GlobalDispatchContext;
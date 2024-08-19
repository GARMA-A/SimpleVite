

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState,useReducer } from "react";

type State = { "count": number };
type Action = { "type": "increment"|"decrement" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { "count": state.count + 1 };
    case "decrement":
      return { "count": state.count - 1 };
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { "count": 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ "type": "increment" })}>+</button>
      <button onClick={() => dispatch({ "type": "decrement" })}>-</button>
    </div>
  );
  
  
}


type TextExpanderProps = {
  children: string;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
}; 



function TextExpander({
  children,
  collapsedNumWords=10,
  expanded=false,
  collapseButtonText = "Read More",
  expandButtonText = "Read Less",
  buttonColor = "#0000ff",
  className=""
}: TextExpanderProps): JSX.Element {

  const [activeExpanded, setActiveExpanded] = useState<boolean>(expanded);
  const content = children.split(" ").slice(0, collapsedNumWords).join(" ");


  return (
    <div className={`box ${className}`}>
      <p>{activeExpanded ? content : children}</p>
      <button  style={{ color: buttonColor }}
        onClick={() => setActiveExpanded((prev) => !prev)}
      >
        {activeExpanded && expandButtonText}
        {!activeExpanded && collapseButtonText}
      </button>
    </div>
  );
}


export default App;
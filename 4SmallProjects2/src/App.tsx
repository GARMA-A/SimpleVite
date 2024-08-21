import { useReducer } from "react";

type Action = { type: string };
type State = {count: number};

function reducer(state: State, action: Action):State {
  switch (action.type) {
    case "inc":
      return {count:state.count + 1};
    case "dec":
      return { count: state.count - 1 };
    default:
      throw new Error("Unexpected action");
  }
}

const App = () => {

  const [{count} , dispatch] = useReducer(reducer, {count: 0});


  return (
    <div className="bg-zinc-800 min-w-screen min-h-screen text-white">
      <div className="flex min-w-screen justify-center pt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "dec" })}
        >
          -
        </button>
        {/**************** */}
        <h1 className="text-3xl ">counter</h1>
        {/**************** */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "inc" })}
        >
          +
        </button>
      </div>
      {/**************** */}
      <h1 className="text-3xl flex min-w-screen justify-center mt-8">
        {count}
      </h1>
    </div>
  );
};

export default App; 
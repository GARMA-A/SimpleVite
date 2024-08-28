import { create } from "domain";
import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
function reducer(state = initialState, action:{ type: string, payload: number }) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance };
    case "account/withdraw":
      return { ...state, balance: state.balance };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload };
    case "account/payLoan":
      return { ...state, loanPurpose: "", balance: state.balance - state.loan };
    default:
      throw new Error("Invalid action type");
  }
}



function App() {
  const store = createStore(reducer);
  console.log(store.getState());
  
  return <h1 className="text-4xl">welcome</h1>;
}

export default App;

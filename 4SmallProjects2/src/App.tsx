

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";



function App() {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [result, setResult] = useState<number>(0);
  

  useEffect(() => {
    async function fetchCurrency() {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      setResult(data.rates[toCurrency]);

    }
    fetchCurrency();
    return () => { setResult(0) }; 


   }, [amount, fromCurrency, toCurrency]);

 
  return (
    <div>
      <input
        type="text"
        className="bg-slate-600 outline-none bottom-0 rounded-xl text-center"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result||"OUTPUT"}</p>
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
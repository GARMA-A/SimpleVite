import { useState } from "react";


function App() {
  const [active, setActive] = useState({project1:false , project2:false , project3:true});

  return (
    <div className="bg-slate-900 min-w-screen min-h-screen flex justify-between items-center flex-col">
      <div className="bg-slate-400 w-screen h-10 flex justify-center items-center space-x-2">
        <button
          className="navBtn"
          onClick={() =>
            setActive({
              project2: false,
              project1: !active.project1,
              project3: false,
            })
          }
        >
          Project1
        </button>
        <button
          className="navBtn"
          onClick={() =>
            setActive({
              project2: !active.project2,
              project1: false,
              project3: false,
            })
          }
        >
          project2
        </button>
        <button
          className="navBtn"
          onClick={() =>
            setActive({
              project2: false,
              project1: false,
              project3: !active.project3,
            })
          }
        >
          project3
        </button>
      </div>
      {active.project1 && <CardContainer />}
      {active.project2 && <CounterContainer />}
      {active.project3 && <TipCalculator />}
    </div>
  );
}






type Skills = {
  skill: string;
  level: "advanced" | "noop" | "normal";
  color: string;
};

const skills: Skills[] = [
  { skill: "TailWind", level: "normal", color: "CCEFFF" },
  { skill: "REACT", level: "noop", color: "B3E0FF" },
  { skill: "FLASK", level: "advanced", color: "81C9F9" },
  { skill: "Django", level: "normal", color: "4BAEE5" },
  { skill: "Git", level: "advanced", color: "6699CC" },
];

function CardContainer()
{
  return(
  <div className="bg-slate-700 w-80 h-[30rem] rounded-lg flex  flex-col items-center justify-between mb-8">
    <h1 className="w-11/12 h-1/3 text-2xl text-center p-8 rounded-md bg-zinc-400 ">
      imagine my img here 😄
    </h1>
    <h1 className="w-11/12 h-1/6 text-2xl text-center p-8 rounded-md ">
      Girgis Emad GARMA{" "}
    </h1>
    <p className="m-1 font-semibold">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quibusdam
      tenetur ea vel quasi, ratione reprehenderit explicabo impedit culpa dolor!
    </p>
    <div className="flex gap-2 flex-wrap justify-center m-4">
      {skills.map((sk) => (
        <Card myskill={sk} />
      ))}
    </div>
  </div>);
}

type CardProp = { myskill: Skills };

function Card({myskill}:CardProp) {
  
  return (
    <p
      className={" font-sans text-center text-xl rounded-md w-32 h-8"}
      style={{ backgroundColor: `#${myskill.color}` }}
    >
      {myskill.skill + " "}
      {myskill.level == "advanced" && "🔥"}
      {myskill.level == "normal" && "⭐"}
      {myskill.level == "noop" && "👶"}
    </p>
  );
};



function CounterContainer()
{
  const [counter , setCounter] = useState(0);
  const [inputValue , setInputValue] = useState("");
  

  return (
    <div className="relative bottom-80 flex flex-col items-center">
      <h1 className="mb-4 text-4xl text-slate-500">
        {counter > 9 ? counter : "0" + counter}
      </h1>
      <input
        type="range"
        className="mb-8"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
        min={1}
        max={20}
        step={1}
      />
      <div className="flex">
        <button
          className="bg-slate-400 w-8 text-2xl font-bold"
          onClick={() => setInputValue(String(Number(inputValue) - counter))}
        >
          -
        </button>
        <input
          type="text"
          className="border-none outline-none font-semibold text-lg text-center"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          className="bg-slate-400 w-8  text-2xl font-bold"
          onClick={() => setInputValue(String(Number(inputValue) + counter))}
        >
          +
        </button>
      </div>
      <h1 className="mt-4 text-2xl text-slate-500">
        {inputValue ? inputValue : "Final Value"}
      </h1>
    </div>
  );

}



function TipCalculator()
{
  const [billPrice, setBillPrice] = useState("");
  const [yourRating, setYourRating] = useState("");
  const [friendRating, setFriendRating] = useState("");
  const [totalBill, setTotalBill] = useState(0);



  return (
    <div className="flex flex-col relative bottom-72 space-y-2 items-center">
      <div className="flex space-x-3">
        <h1 className="text-2xl font-bold text-slate-600">
          How much Was The Bill?
        </h1>
        <input
          type="text"
          className="border-none outline-none text-2xl w-52"
          value={billPrice}
          onChange={(e) => setBillPrice(e.target.value)}
        />
      </div>
      <div className="flex space-x-3">
        <h1 className="text-2xl font-bold text-slate-600">
          How did you like the service?
        </h1>
        <input
          type="text"
          className="border-none outline-none text-2xl w-52"
          value={yourRating}
          onChange={(e) => setYourRating(e.target.value)}
        />
      </div>
      <div className="flex space-x-3">
        <h1 className="text-2xl font-bold text-slate-600">
          How did your friend like the service?
        </h1>
        <input
          type="text"
          className="border-none outline-none text-2xl w-52"
          value={friendRating}
          onChange={(e) => setFriendRating(e.target.value)}
        />
      </div>
      <button className="navBtn relative top-5" onClick={()=>setTotalBill(((Number(friendRating)+Number(yourRating))/2)+Number(billPrice))}>Submit</button>
      <h1 className="relative top-10 text-4xl text-slate-600">{totalBill}</h1>
    </div>
  );

}



export default App

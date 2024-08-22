import { memo, useCallback, useMemo, useReducer, useState } from "react";






function reducer(state: { compMemo: boolean; objMemo: boolean }, action: { type: string , payload?:boolean })
{

  switch (action.type)
  {
    case "compMemo/clicked":
      return { objMemo: false, compMemo: true };
    case "objMemo/clicked":
      return { compMemo: false, objMemo: true };
    default:
      throw new Error("Invalid action type");

  }

}


function App() {
  const initialState = {compMemo:false , objMemo:true };

  const [{compMemo,objMemo} , dispatch] = useReducer(reducer , initialState);
  const [tempstate, setTempState] = useState(0);
  const [variable,setVariable] = useState(0);
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-slate-950 text-slate-50">
      <nav className="bg-slate-800 w-full p-4 text-xl text-center">
        <button
          className="btn"
          onClick={() =>
            dispatch({ type: "compMemo/clicked" })
          }
        >
          Memo on component
        </button>
        <button
          className="btn"
          onClick={() =>
            dispatch({ type: "objMemo/clicked" })
          }
        >
          useMemo on objects
        </button>
      </nav>
      {/**********************/}
      {/**********************/}
      {compMemo && (
        <FullReactMemoExample
          state={tempstate}
          setState={setTempState}
          variable={variable}
          setVariable={setVariable}
        />
      )}
      {/**********************/}
      {/**********************/}
      {objMemo && <FullReactObjMemoExample />}
    </div>
  );
}


function FullReactMemoExample({state , setState , variable , setVariable}:{state:number, setState:React.Dispatch<React.SetStateAction<number>>, variable:number, setVariable:React.Dispatch<React.SetStateAction<number>>})
{
  return (
    <>
      {" "}
      <h1 className="textContainer">
        Both the Parnet and Nochange are on the app component but the Parent is
        just a simple component that will rerender again and again if the App()
        rerender{" "}
      </h1>
      <h1 className="textContainer">
        On the other hand Nochange() component render With Memo so That it will
        only rerender if the props passed changed
      </h1>
      <button onClick={() => setState((prev) => prev + 1)} className="btn">
        Effect Parent : {state}
      </button>
      <button onClick={() => setVariable((prev) => prev + 1)} className="btn">
        Sffect Nochange&Parent:{variable}
      </button>
      <Parent />
      <Nochange vr={variable} />
    </>
  );
}


const Nochange = memo(function Nochange({ vr }: { vr: number })
{ console.log("Nochange rerender!" + vr); return (<></>); })

function Parent(){console.log("Parent rerender!");return (<></>);}



/****************************************/
/****************************************/
/****************************************/
/****************************************/
/****************************************/

 
function FullReactObjMemoExample()
{
  const [state, setState] = useState(0);

 

  const useLessObj = { useless: "object" };
  const useLessObj2 = useMemo(() => { return{ curState: "state" }},[]);
  // const useLessObj2 = useMemo(() => {
  //   return { curState: state };
  // }, [state]);


  const handleState = useCallback(function handleState(): void {
    setState((prev) => prev + 1);
  }, []);

  return (
    <>
      <h1 className="textContainer">
        The Problem here is that we use already here Memo on all the components
        but still rerender on each change on the state
      </h1>
      <button className="btn" onClick={() => setState((prev) => prev + 1)}>
        Click to rerender all : {state}
      </button>
      {/**************/}
      <ParentObjMemo1 obj={useLessObj} />
      {/**************/}
      <ParentObjMemo2 />
      {/**************/}
      <h1 className="textContainer">
        So if you click many times on this button👆 you should notice how it
        cause rerender even we use the memo and the props not changed so the
        reason for that is on each rerender the (objs or functions) we have is
        recreated again from scratch as new functions or objs with same value so
        memo think it is absolute new obj and memo to solve this problem we use
        useMemo() for objs useCallback() for functions
      </h1>
      {/**************/}
      <button className="btn" onClick={() => setState((prev) => prev + 1)}>
        Click to rerender all : {state}
      </button>
      {/**************/}
      <ParentObjMemo3 obj={useLessObj2} />
      {/**************/}
      <h1 className="textContainer">
        as you can see now we use and learn how to use the obj with dependancy
        array to rerender only and create new obj anly if the dependency array
        changed and if it not changed will not create new obj and not cause
        rerender
      </h1>
      {/**************/}
      <ParentObjMemo4 onState={handleState} />
    </>
  );
}


const ParentObjMemo1= memo(function ParentObjMemo1({obj}:{obj:{useless:string}})
{

  console.log("ParentObjMemo1 rerender!");
  
  return (<></>);
})

const ParentObjMemo2 = memo(function ParentObjMemo2() {
  console.log("ParentObjMemo2 rerender!");
  return <></>;
});

const ParentObjMemo3 = memo(function ParentObjMemo3({
  obj,
}: {
  obj: { curState: number | string };
}) {
  console.log("ParentObjMemo3 rerender!");
  console.log("cur State :" + obj.curState);
  return <></>;
});



const ParentObjMemo4 = memo(function ParentObjMemo4({onState}: {onState: () => void}) {
  console.log("ParentObjMemo4 rerender!");
  return <></>;
});






export default App

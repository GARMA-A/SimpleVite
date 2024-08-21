import { useState } from "react";
import { useSearchParams } from "react-router-dom"

function Address() {

       const [searshParams, setSearshParams] = useSearchParams("city=cairo&college=FCI");
       const [active, setActive] = useState(false);
       const [newCity, setNewCity] = useState("");
       const [newCollege, setNewCollege] = useState("");
       console.log(searshParams);
       const city = searshParams.get("city");
       const college = searshParams.get("college");
       return (
         <div>
           <h1>City={city}</h1>
           <h1>College={college}</h1>
           <button className="btn" onClick={() => setActive((prev) => !prev)}>
             Change Address
           </button>
           {active && (
             <>
               <input
                 className="text-slate-950 text-xl"
                 placeholder="Set new City"
                 value={newCity}
                 onChange={(e) => setNewCity(e.target.value)}
               />

               <input
                 className="text-slate-950 text-xl"
                 placeholder="Set new College"
                 value={newCollege}
                 onChange={(e) => setNewCollege(e.target.value)}
               />
               <button
                 className="btn"
                 onClick={() =>
                   setSearshParams(`city=${newCity}&college=${newCollege}`)
                 }
               >
                 Submit
               </button>
             </>
           )}
         </div>
       );
}

export default Address

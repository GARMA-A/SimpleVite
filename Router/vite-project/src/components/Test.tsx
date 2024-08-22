import { useParams } from "react-router-dom";

function Test() {
       const curId = useParams();
       console.log(curId);
       return (
              <div>
                     {curId.id==="Girgis" && <h1>Girgis Page</h1> }
                     {curId.id === "LOLO" && <h1>LOLO Page</h1>}
                     {curId.id === "GARMA" && <h1>GARMA Page</h1>}
                     
              </div>
       )
}

export default Test;


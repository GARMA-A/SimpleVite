import { Link } from 'react-router-dom'
import styles from '../Style/Sidebar.module.css'

import Navbar from './NavBar'

function Sidebar() {
       return (
         <div className={styles.Sidebar}>
           <Navbar />
           <p className="text-xl ml-8">
             List Of cities
             <Link to="Girgis">
               <button className="btn">Girgis Page</button>{" "}
             </Link>
             <Link to="GARMA">
               <button className="btn">GARMA PAGE</button>{" "}
             </Link>
             <Link to="LOLO">
               <button className="btn">LOLO PAGE</button>{" "}
             </Link>
             <Link to="address/?city=Aswan&college=aast">
               <button className="btn">Address</button>{" "}
             </Link>
           </p>
         </div>
       );
}

export default Sidebar

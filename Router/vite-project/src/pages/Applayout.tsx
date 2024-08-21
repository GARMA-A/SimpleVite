
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar"

import styles from "../Style/Homepage.module.css";

function Applayout() {
       const pageId = useParams();
       console.log(pageId);
       return (
              <div className={styles.homepage}>
                     <Sidebar />
                     <Outlet />
                     
              </div>
       )
}

export default Applayout

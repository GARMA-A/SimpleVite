import Sidebar from "../components/Sidebar"
import styles from '../Style/AppLayout.module.css'

function Applayout() {
       return (
              <div className={styles.app}>
                     <Sidebar/>
              </div>
       )
}

export default Applayout

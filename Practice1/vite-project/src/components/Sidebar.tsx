import styles from '../Style/Sidebar.module.css'

import Navbar from './NavBar'

function Sidebar() {
       return (
              <div className={styles.Sidebar}>
                     <Navbar />
                     <p>List Of cities</p>

                     <footer className={styles.footer}>
                            <p className={styles.copyright}>© { Date.now().toLocaleString()}All rights reserved</p>
                     </footer>


              </div>
       )
}

export default Sidebar

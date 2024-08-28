import { Outlet } from "react-router-dom"
import CartOverview from "../feature/cart/CartOverview"
import Header from "./Header"

function AppLayout() {
       return (
              <div>
                     <Header />
                     <main>
                            <Outlet/>
                     </main>
                     <CartOverview/>
              </div>
       )
}

export default AppLayout

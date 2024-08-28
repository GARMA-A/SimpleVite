import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./feature/menue/Menu"
import Home from "./ui/Home"
import Cart from "./feature/cart/Cart";
import CreateOrder from "./feature/order/CreateOrder";
import Order from "./feature/order/Order";
import AppLayout from "./ui/AppLayout";




const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  }
]);


function App() {

  return <RouterProvider router={router}/>;
}




export default App;   
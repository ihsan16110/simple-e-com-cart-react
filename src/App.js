import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      loader:()=> fetch('products.json'),
      children:[

        {
          path:'/',
          loader:()=> fetch('products.json'),
          element:<Shop></Shop>
        },
        {
            path:'/orders', // ' / or without slash  works here '
            // loader:() => fetch('products.json'),
            loader:productsAndCartLoader,
            // loader:() =>{
            //   return fetch('products.json')
            // },
            element:<Orders></Orders>
        },
        {
           path:'/inventory',
           element: <Inventory></Inventory>
        },
        {
          path:'/about',
          element:<About></About>
        }

      ]
    },
    // {
    //   path:'/about',
    //   element:<About></About>
    // }
  ])
  return (
    <div>
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

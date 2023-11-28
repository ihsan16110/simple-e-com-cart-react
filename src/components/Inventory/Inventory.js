import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Inventory = () => {
    // const {products, initialCart} = useLoaderData(); //  {products:products,initialCart: initialCart};
    // const [cart,setCart] = useState(initialCart)
    // return (
    //     <div className='shop-container'>
    //         <div className='products-container'>

    //         </div>
    //         <div className='cart-container'>
    //             <Cart cart={cart}></Cart>
    //         </div>
    //         {/* <h2>This is Orders : {products.length}</h2>
    //         <p>Initial Cart: {initialCart.length}</p> */}
    //     </div>
    // );
    return (
        <div>
            <h2>This is Inventory Page.</h2>
        </div>
    );
};

export default Inventory;
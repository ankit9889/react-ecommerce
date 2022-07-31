import React from 'react';
import '../assets/css/cart-items.css';

export default function ShowCartItems(props) {
    
  const {  getCurrentUserCartItems } = props;
//   console.log(getCurrentUserCartItems);
  let count =1;

  return (
        <div className='row justify-content-md-center cartItems-row'>
            <div className='col-md-6 mr-auto ml-auto'>
                <h2>Cart Items</h2>
                <table className='table table-responsive'>
                    <thead>
                        <tr>
                            <td>Sr No.</td>
                            <td>Name</td>
                            <td>QTY</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                    {getCurrentUserCartItems.map((item) => (
                        <tr>
                            <td>{count++}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
  );

}
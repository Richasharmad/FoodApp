import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';
import { clearCart } from '../../utils/cartSlice';
import EmptyCart from './EmptyCart';


const Cart = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const dispatch = useDispatch();

  // Use useSelector to access the length of cart items
  const cartItems = useSelector((store) => store.cart.items);
  const price = cartItems
    .reduce((total, cartItem) => total + (cartItem ? cartItem.price : 0), 0)
    .toString()
    .slice(0, -2);
  const discount = Math.floor(price * 0.1);
  const delivery = 99;
  const totalPrice = price - discount + delivery;

  console.log('cartItems', cartItems);
  console.log('discount', discount);
  console.log('totalPrice', totalPrice);

  const amount = 500;
  const currency = 'INR';
  const receiptId = 'qwsaq1';

  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    debugger
    if (!res) {
      alert('RazorPay SDK failed to load. Are you online?')
      return
    }

    const response = await fetch('http://localhost:1377/razorpay', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const order = await response.json();
    console.log("order", order)

    const options = {
      key: 'rzp_test_WQ5utinHn9gQDY',
      amount: '500',
      currency: 'INR',
      name: 'FoodieeHub',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: order.id,
      handler: async function (response) {
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: 'Test Web', //your customer's name
        email: 'test@example.com',
        contact: '1234563847', //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()

  }


  function loadScript(src) {
    return new Promise((resolve => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    }))
  }



  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className='text-center'>
        <button
          onClick={() => dispatch(clearCart())}
          className='bg-red-500 text-sm font-bold hover:shadow-lg text-white py-1 px-3 rounded-lg mt-5 '
        >
          Clear Cart
        </button>
      </div>

      <div className='lg:flex items-start justify-between mx-2 md:mx-16 lg:mx-5 xl:mx-52'>
        <div className='sm:w-full lg:w-7/12 '>
          {cartItems.length !== 0 && (
            <>
              {cartItems.map((cartItem) => (
                <div key={cartItem.id} className=''>
                  <CartItemCard {...cartItem} cartItem={cartItem} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className='border p-5 rounded-lg sm:w-full lg:w-5/12 mt-10 lg:m-5'>
          <h3 className='font-bold text-gray-600'>PRICE DETAILS</h3>
          <div className='flex'>
            <div className='mr-5'>
              <h3>Price ({cartItems.length} item)</h3>
              <h3>Discount (10%)</h3>
              <h3>Delivery Charges</h3>
              <h3 className='font-bold'>Total Amount</h3>
            </div>
            <div>
              <h3>₹ {price}</h3>
              <h3>₹ {discount}</h3>
              <h3>₹ {delivery}</h3>
              <h3 className='font-bold'>₹ {totalPrice}</h3>
            </div>
          </div>
          <button
            onClick={displayRazorpay}
            disabled={buttonClicked}
            className='bg-green-700 text-white rounded-lg mt-5 px-3 py-2'
          >
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

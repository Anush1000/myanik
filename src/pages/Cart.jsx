import React, { useState } from 'react';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Cart = () => {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [upiId, setUpiId] = useState('');

  const isCartEmpty = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
    } else {
      navigate('/thank-you');
    }
  };

  const handleCashOnDelivery = () => {
    if (!cashOnDelivery && upiId === '') {
      toast.error('Please select cash on delivery or enter UPI ID');
    } else if (cashOnDelivery) {
      toast.success('Your order is confirmed. Please pay cash on delivery.');
      navigate('/thank-you');
    } else {
      toast.success(`Your order is confirmed. Please pay using UPI ID: ${upiId}`);
      navigate('/thank-you');
    }
  };

  return (
    <>
      <SectionTitle title="Cart" path="Home | Cart" />
      <div className='mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {loginState && (
            <div className='mt-8'>
              {/* Payment method selection */}
              <h3 className='text-lg font-semibold mb-4'>Payment</h3>
              <div className='flex items-center mb-4'>
                <input
                  type='checkbox'
                  id='cashOnDelivery'
                  checked={cashOnDelivery}
                  onChange={(e) => {
                    setCashOnDelivery(e.target.checked);
                    if (e.target.checked) {
                      setUpiId(''); // Clear UPI ID if cash on delivery is selected
                    }
                  }}
                  className='mr-2'
                />
                <label htmlFor='cashOnDelivery' className='text-sm'>Cash on Delivery</label>
              </div>
              {/* UPI ID input */}
              <label htmlFor='upiId' className='text-sm block mb-2'>UPI ID</label>
              <input
                type='text'
                id='upiId'
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  setCashOnDelivery(false); // Uncheck cash on delivery if UPI ID is entered
                }}
                className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full'
              />
            </div>
          )}
          {loginState ? (
            <button onClick={handleCashOnDelivery} className='btn bg-blue-600 hover:bg-blue-500 text-white btn-block mt-8'>
              Order Now
            </button>
          ) : (
            <Link to='/login' className='btn bg-blue-600 hover:bg-blue-500 btn-block text-white mt-8'>
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

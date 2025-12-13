import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const Payment = () => {
    const {orderId} = useParams();
    const axiosSecure  = useAxiosSecure();
    const {isLoading, data: order} = useQuery({
        queryKey: ['orders', orderId],
        queryFn: async ()=>{
              const res = await axiosSecure.get(`/orders/${orderId}`)
              return res.data;
        }
    })

    const handlePayment = async()=>{
      const paymentInfo = {
        price: order.price,
        orderId: order._id,
        userEmail: order.userEmail,
        bookTitle: order.bookTitle

      }
      const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
      console.log(res.data)
      window.location.href = res.data.url;
       
    }

    


    if(isLoading){
      return <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    }
    

    return (
        <div>
            <h2>Please Pay ${order.price} for : {order.bookTitle}</h2>
            <button onClick={handlePayment} className='btn btn-secondary text-primary'>Pay</button>
        </div>
    );
};

export default Payment;
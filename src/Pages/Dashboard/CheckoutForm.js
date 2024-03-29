import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({appoinment}) => {
  const [clientSecret, setClientSecret] = useState("");
  const {price} = appoinment;
  useEffect(() => {
   
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' ,
      'authorization': `Bearer ${localStorage.getItem("accessToken")}`    
             
    },
      body: JSON.stringify(price),
    })
      .then((res) => res.json())
      .then(data => {
        if(data?.clientSecret){
          setClientSecret(data.clientSecret)
        }
        
      })
  }, [price]);

  
    const [cardError, setCardError] = useState('') 
    const stripe = useStripe();
    const elements = useElements();
     const handleSubmit = async (event) => {
     
        event.preventDefault()
        
    if (!stripe || !elements) {
       
        return
      }
      const card = elements.getElement(CardElement);

      if (card === null) {
        return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      
    
        setCardError(error?.message || '')
    
     }
    return (
       <> 
       
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
      {/* <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe }> */}
        Pay
      </button>
    </form>  

    {
      cardError && <p className='text-red-500'>{cardError} </p>
    }
       
       </>
    );
};

export default CheckoutForm;
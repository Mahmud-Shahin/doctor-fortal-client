import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Loading from './../Shared/Loading';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51GwqWnA7iZimIYLsUYjejvw7mYtrOflpB1veZuacYZZK0HULUDN98K5rjVX5kUtEIQpr8H59rRmDB3A95fIdZRCB00FC7UtUvd');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  // const { data: appoinment , isLoading } = useQuery(["booking", id], () =>
  const { data: appoinment } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`
      },
    }).then((res) => res.json())
  )

  // if(isLoading){
  //   return <Loading></Loading>
  // }

  return (
    <div>
   
 
  <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
  <div className="card-body">
    <p className="text-success">Hello , appoinment.patientName </p>
    {/* <h2 className="card-title"> Please Pay for {appoinment.treatment} </h2> */}
    <h2 className="card-title"> Please Pay for appoinment.treatment </h2>
    {/* <p>Your Appoinment : <span className="text-orange-500">{appoinment.date} at {appoinment.slot}</span> </p> */}
    <p>Your Appoinment :  appoinment.date at appoinment.slot </p>
    {/* <p>please pay: ${appoinment.price}</p> */}
    <p>please pay: $appoinment.price</p>
    
  </div>
</div>
    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
      <Elements stripe={stripePromise}>
     <CheckoutForm appoinment={appoinment} />
     </Elements>
       </div>
    </div>
  </div>

  );
};

export default Payment;


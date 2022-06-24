// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm';


// const stripePromise = loadStripe('pk_test_51Jvku3LFkUIOzBA4yIGcfmynynHNeJ0OmTdg6kF0NfgZPH7VPY9pKZOTmEmGfJnq6zeFvmGCzO1WuXuPdUWPPpof00hsFnFUGM');

// const Payment = () => {
//     const { appointmentId } = useParams();
//     const [appointment, setAppointment] = useState();
//     useEffect(() => {
//         fetch(`https://shielded-sea-24899.herokuapp.com/appointment/${appointmentId}`)
//             .then(res => res.json())
//             .then(data => setAppointment(data))
//     }, [appointmentId]);
//     return (
//         <div>
//             <h2>Payment for: {appointment?.patientName} for {appointment?.serviceName} </h2>
//             <h4>Pay: ${appointment?.price}</h4>
//             {appointment?.price && <Elements stripe={stripePromise}>
//                 <CheckoutForm
//                     appointment={appointment}
//                 />
//             </Elements>}
//         </div>
//     );
// };

// export default Payment;
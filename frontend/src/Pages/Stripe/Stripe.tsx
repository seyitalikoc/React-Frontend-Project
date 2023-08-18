import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import HomePage from './HomePage';

const stripePromise = loadStripe('pk_test_51Nfdb7CdnACsum6gSCSuUwSZSw3e8EMUufywJKtxLy98eg822NWy3PiSGBxiR4jVpcXYrphvyJ8zSnvGKnjkpei200PFQrLVUT');

function StripeMain() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
}

export default StripeMain;
import React, {useState} from 'react';
import axios from 'axios';
// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// Custom Components
import CardInput from './CardInput';
import './stripe.css';
import { Button, Card, CardContent, TextField } from '@mui/material';

function HomePage() {
  const [email, setEmail] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  /*const handleSubmitPay = async (event:any) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post('http://localhost:3001/pay', {email: email});

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Money is in the bank!');
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };*/
  const userData = JSON.parse(localStorage.getItem('userData')!);
  const handleSubmitSub = async (event:any) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const result = await stripe
    .createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!,
      billing_details: {
        email: email,
      },
    })

    if (result.error) {
      console.log(result.error.message);
    } else {
      const res = await axios.post('http://localhost:3001/sub', {'payment_method': result.paymentMethod.id, 'email': email});
      // eslint-disable-next-line camelcase
      const {client_secret, status} = res.data;

      if (status === 'requires_action') {
        stripe.confirmCardPayment(client_secret).then(function(result) {
          if (result.error) {
            console.log('There was an issue!');
            console.log(result.error);
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc)
          } else {
            console.log('You got the money!');
            axios.post("http://localhost:4000/users/create",userData ).then((response) => {
              alert(response.status);
            });
          }
        });
      } else {
        console.log('You got the money!');
        axios.post("http://localhost:4000/users/create", userData).then((response) => {
          alert(response.status);
          window.location.assign('/');
        });
      }
    }
  };

  return (
    <Card className='root'>
      <CardContent className='content'>
        <TextField
          label='Email'
          id='outlined-email-input'
          helperText={`Email you'll recive updates and receipts on`}
          margin='normal'
          variant='outlined'
          type='email'
          required
          value={email}
          onChange={(e:any) => setEmail(e.target.value)}
          fullWidth
        />
        <CardInput />
        <div className='div'>
          <br/>
          <br/>
          <Button variant="contained" color="primary" className='button' onClick={handleSubmitSub}>
            Subscription
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default HomePage;
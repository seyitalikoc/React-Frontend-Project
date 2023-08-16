import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {

    /*onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
    }*/

  render() {
    return (
      // ...
      <StripeCheckout
        token={(token) =>{
            console.log(token);
            if(token.email != null){
                localStorage.setItem('email',token.email);
                window.location.assign('signup')
            }
        }}
        
        stripeKey='pk_test_51Nfdb7CdnACsum6gSCSuUwSZSw3e8EMUufywJKtxLy98eg822NWy3PiSGBxiR4jVpcXYrphvyJ8zSnvGKnjkpei200PFQrLVUT'
      />
    )
  }
}
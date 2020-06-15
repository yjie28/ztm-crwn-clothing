import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // Stripe's price in cents, to get dollars, we'll multiply the price by 100
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Gu5BXEWbZdLBvw8AdXJMojvE5IISTBw3uW6yv5cL46gdjP09JbdNnVFw9INNMpepUmX1pCWdXnujX1yBtbAJ4uS00OKlIA1rq';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful! ');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

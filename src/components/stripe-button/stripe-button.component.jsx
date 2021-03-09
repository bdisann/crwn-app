import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey =
    "pk_test_51ISyP3IQ5RXScvQ7eX9e1WhwBixMQQ9bbOhpce3s7pa4Kv88n2WF42HEWz0agY7djvueRiPjO6JoHx5NCtJc8kMu00AMQoT1qE";

  const onToken = (token) => alert("Payment Succesfull");

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Cloting Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeButton;

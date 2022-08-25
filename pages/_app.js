import "../styles/globals.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.]
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

function MyApp({ Component, pageProps }) {
  const options = {
    // passing the client secret obtained in step 2
    clientSecret:
      "seti_1Laf2KLcLvxMXzdFVcSi0fuO_secret_MJHbxRk1WfaTkcrlZ3xaOi3IfeUi0mM",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Component {...pageProps} />
    </Elements>
  );
}

export default MyApp;

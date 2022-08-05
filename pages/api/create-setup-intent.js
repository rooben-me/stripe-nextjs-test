// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const customer = await stripe.customers.create();

console.log(customer);

const setupIntent = await stripe.setupIntents.create({
  customer: "{{CUSTOMER_ID}}",
  payment_method_types: ["bancontact", "card", "ideal"],
});

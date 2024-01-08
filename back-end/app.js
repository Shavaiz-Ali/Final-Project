// app.js
import express from "express";
const app = express();
const PORT = process.env.PORT || 9000;
import adminRoute from "./routes/index.route.js";
import connectDb from "./config/connectDb.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "uploads")));
dotenv.config();
connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors("*"));

app.use("/", adminRoute);


// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
import stripe from 'stripe'
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173/';
const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
app.post('/create-checkout-session', async (req, res) => {
  console.log('Request received:', req.body);
  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: 'payment',
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name, // Fix the typo here, change 'iten' to 'item'
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        };
      }),
      success_url: `${YOUR_DOMAIN}success`,
      cancel_url: `${YOUR_DOMAIN}canceled`,
    });
    console.log('Session created:', session),
    res.json({ url: session.url });
  } catch (error) {
    res.status(501).json({ success: false, message: "internal server error", error });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const Razorpay = require('razorpay');
const shortid = require('shortid');
const cors = require("cors");
const app = express();
app.use(cors());

const razorpay = new Razorpay({ key_id: 'rzp_test_WQ5utinHn9gQDY', key_secret: 'f3oIS3cvmmudlDhBKUYeyWwV' })

app.post('/razorpay', async (req,res)=>{

    const payment_capture = 1
    const amount = 5
    const currency = 'INR';

    const options = {
        amount: (amount * 100).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture
    }
    try {
        const response = await razorpay.orders.create(options)
        if (!response) {
            return res.status(500).send("Error");
        }
        res.json(response);
    }
    catch(error) {
        console.log(error)
    }

})

app.listen(1377, () => {
    console.log('Listening on 1377')
})
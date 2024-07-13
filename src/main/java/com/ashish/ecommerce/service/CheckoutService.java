package com.ashish.ecommerce.service;

import com.ashish.ecommerce.dto.PaymentInfo;
import com.ashish.ecommerce.dto.Purchase;
import com.ashish.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}

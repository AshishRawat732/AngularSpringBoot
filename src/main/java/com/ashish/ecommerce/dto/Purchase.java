package com.ashish.ecommerce.dto;

import com.ashish.ecommerce.entity.Address;
import com.ashish.ecommerce.entity.Customer;
import com.ashish.ecommerce.entity.Order;
import com.ashish.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;
}

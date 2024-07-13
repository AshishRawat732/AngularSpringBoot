package com.ashish.ecommerce.dto;

import lombok.Data;

//Lombok @Data will generate constructor for final fields or
// we can use @NonNull Annotation instead of final
@Data
public class PurchaseResponse {

    private final String orderTrackingNumber;

}

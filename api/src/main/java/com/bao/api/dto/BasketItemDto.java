package com.bao.api.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BasketItemDto {
    Long productId;

    String name;

    BigDecimal unitPrice;

    String imageUrl;

    String brand;

    String category;

    int quantity;

    public BasketItemDto(Long productId, String name, BigDecimal unitPrice, String imageUrl, String brand, String category, int quantity) {
        this.productId = productId;
        this.name = name;
        this.unitPrice = unitPrice;
        this.imageUrl = imageUrl;
        this.brand = brand;
        this.category = category;
        this.quantity = quantity;
    }
}

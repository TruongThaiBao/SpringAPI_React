package com.bao.api.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductDto {
    long id;

    String name;

    String description;

    double unitPrice;

    String imageUrl;

    int unitsInStock;

    String brand;

    String categoryName;

}

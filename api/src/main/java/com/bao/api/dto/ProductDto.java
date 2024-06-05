package com.bao.api.dto;

import com.bao.api.entity.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.web.multipart.MultipartFile;


import java.math.BigDecimal;

@Getter
@Setter
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductDto {
    long id;

    String name;

    String description;

    BigDecimal unitPrice;

    String imageUrl;

    int unitsInStock;

    String brand;

    String categoryName;

    @JsonIgnore
    MultipartFile image;




//    private Long id;
//    private String name;
//    private String description;
//    private BigDecimal unitPrice;
//    private String imageUrl;
//    private String brand;
//    private int unitsInStock;
//    private String category;
//
//    public ProductDto() {
//    }
//
//    public ProductDto(Product product) {
//        this.id = product.getId();
//        this.name = product.getName();
//        this.description = product.getDescription();
//        this.unitPrice = product.getUnitPrice();
//        this.imageUrl = product.getImageUrl();
//        this.brand = product.getBrand();
//        this.unitsInStock = product.getUnitsInStock();
//        this.category = product.getCategory().getCategoryName();
//    }

}

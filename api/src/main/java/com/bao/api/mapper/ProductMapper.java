package com.bao.api.mapper;

import com.bao.api.dto.ProductDto;
import com.bao.api.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    @Mapping(target = "categoryName", source = "category.categoryName")
    ProductDto convertToProductDto(Product product);

    Product convertToProduct(ProductDto productDto);
}

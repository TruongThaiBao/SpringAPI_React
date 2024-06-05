package com.bao.api.service;

import com.bao.api.dto.ProductDto;

import java.util.List;


public interface ProductService {
    List<ProductDto> findAll();

    ProductDto findById(Long id);

    void deleteById(Long id);

    void save(ProductDto productDto);
}

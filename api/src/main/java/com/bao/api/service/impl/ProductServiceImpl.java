package com.bao.api.service.impl;

import com.bao.api.dao.ProductCategoryRepository;
import com.bao.api.dao.ProductRepository;
import com.bao.api.dto.ProductDto;
import com.bao.api.entity.Product;
import com.bao.api.entity.ProductCategory;
import com.bao.api.mapper.ProductMapper;
import com.bao.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;
    private final ProductCategoryRepository productCategoryRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository,
                              ProductMapper productMapper,
                              ProductCategoryRepository productCategoryRepository) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
        this.productCategoryRepository = productCategoryRepository;
    }

    @Override
    public List<ProductDto> findAll() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::convertToProductDto)
                .toList();
    }

    @Override
    public ProductDto findById(Long id) {
        return productRepository.findById(id)
                .map(productMapper::convertToProductDto)
                .orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public void save(ProductDto productDto) {
        Product product = productMapper.convertToProduct(productDto);
        ProductCategory category = productCategoryRepository.findByCategoryName(productDto.getCategoryName());
        if (category == null) {
            throw new RuntimeException("Category not found");
        }
        product.setCategory(category);
        productRepository.save(product);
    }
}

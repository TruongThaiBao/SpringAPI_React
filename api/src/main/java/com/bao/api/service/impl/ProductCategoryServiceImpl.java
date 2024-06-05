package com.bao.api.service.impl;

import com.bao.api.dao.ProductCategoryRepository;
import com.bao.api.entity.ProductCategory;
import com.bao.api.service.ProductCategoryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService {
    private final ProductCategoryRepository productCategoryRepository;

    public ProductCategoryServiceImpl(ProductCategoryRepository productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }

    @Override
    public ProductCategory findByCategoryName(String categoryName) {
        return productCategoryRepository.findByCategoryName(categoryName);
    }

    @Override
    public List<ProductCategory> findAll() {
        return productCategoryRepository.findAll();
    }
}

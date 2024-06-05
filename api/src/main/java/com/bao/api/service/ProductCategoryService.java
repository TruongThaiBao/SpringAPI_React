package com.bao.api.service;


import com.bao.api.entity.ProductCategory;

import java.util.List;

public interface ProductCategoryService {
    ProductCategory findByCategoryName(String name);
    List<ProductCategory> findAll();

}

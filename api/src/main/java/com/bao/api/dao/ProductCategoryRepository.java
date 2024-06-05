package com.bao.api.dao;

import com.bao.api.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
    ProductCategory findByCategoryName(String categoryName);
}

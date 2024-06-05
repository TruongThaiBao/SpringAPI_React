package com.bao.api.controller;

import com.bao.api.dto.ProductDto;
import com.bao.api.entity.ProductCategory;
import com.bao.api.service.ProductCategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final ProductCategoryService categoryService;

    public CategoryController(ProductCategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping({"","/"})
    public ResponseEntity<List<ProductCategory>> getAllProducts() {
        return ResponseEntity.ok(categoryService.findAll());
    }


}

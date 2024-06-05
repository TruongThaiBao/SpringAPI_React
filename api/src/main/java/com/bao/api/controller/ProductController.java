package com.bao.api.controller;

import com.bao.api.dao.ProductCategoryRepository;
import com.bao.api.dto.ProductDto;
import com.bao.api.entity.Product;
import com.bao.api.mapper.ProductMapper;
import com.bao.api.service.ProductService;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;
    private final ProductCategoryRepository productCategoryRepository;
    private final ProductMapper productMapper;

    @Autowired
    public ProductController(ProductService productService, ProductCategoryRepository productCategoryRepository, ProductMapper productMapper) {
        this.productService = productService;
        this.productCategoryRepository = productCategoryRepository;
        this.productMapper = productMapper;
    }

    @GetMapping({"","/"})
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        return ResponseEntity.ok(productService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable long id) {
        ProductDto productDto = productService.findById(id);

        if (productDto == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(productDto);
    }

    @PostMapping({"","/"})
    public ResponseEntity<ProductDto> addNewProduct(@ModelAttribute ProductDto productDto) throws IOException {
        String imageFileName = "";
        MultipartFile productImage = productDto.getImage();
        if (productImage != null && !productImage.isEmpty()) {
            String imageFileExt = FilenameUtils.getExtension(productImage.getOriginalFilename());
            if (!Arrays.asList(MimeTypeUtils.IMAGE_JPEG_VALUE,
                    MimeTypeUtils.IMAGE_PNG_VALUE,
                    MimeTypeUtils.IMAGE_GIF_VALUE).contains(productImage.getContentType())) {
                throw new RuntimeException(productImage.getContentType() + " is not an image file");
            }

            Path fileFolder = Paths.get("upload", "image");
            if (!Files.exists(fileFolder)) {
                Files.createDirectories(fileFolder);
            }

            imageFileName = UUID.randomUUID().toString() + "." + imageFileExt;
            Path filePath = fileFolder.resolve(imageFileName);
            Files.copy(productImage.getInputStream(), filePath);

            productDto.setImageUrl(imageFileName);
        }

        productService.save(productDto);
        return ResponseEntity.ok(productDto);
    }
}

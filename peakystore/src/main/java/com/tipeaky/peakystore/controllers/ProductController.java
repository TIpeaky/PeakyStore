package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.model.dtos.ProductDTO;
import com.tipeaky.peakystore.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable UUID id) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.getProduct(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable UUID id) {
        return productService.deleteProduct(id);
    }
}

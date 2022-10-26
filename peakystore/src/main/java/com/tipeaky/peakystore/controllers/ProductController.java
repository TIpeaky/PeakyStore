package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.model.dtos.ProductDTO;
import com.tipeaky.peakystore.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.UUID;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/{Id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable UUID Id) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.getProduct(Id));
    }
}

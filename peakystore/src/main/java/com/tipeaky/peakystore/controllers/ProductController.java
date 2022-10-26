package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.model.forms.ProductRegisterForm;
import com.tipeaky.peakystore.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody @Valid ProductRegisterForm productRegisterForm) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.save(productRegisterForm));
    }





}

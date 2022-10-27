package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.model.dtos.CartItemDTO;
import com.tipeaky.peakystore.services.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/carts-items")
public class CartItemController {

    @Autowired
    private CartItemService service;

    @PostMapping
    public ResponseEntity<CartItemDTO> insert(@RequestBody @Valid CartItemDTO dto){
        CartItemDTO newDto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(newDto.getProductId(),newDto.getPurchaseId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }
}

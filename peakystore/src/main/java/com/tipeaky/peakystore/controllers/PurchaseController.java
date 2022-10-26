package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.model.dtos.PurchaseDTO;
import com.tipeaky.peakystore.services.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/purchase")
public class PurchaseController {

    @Autowired
    PurchaseService purchaseService;

    @GetMapping("/{id}")
    public ResponseEntity<PurchaseDTO> getPurchase(@PathVariable UUID id) {
        return ResponseEntity.ok().body(purchaseService.getPurchase(id));
    }
}

package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.model.dtos.PurchaseDTO;
import com.tipeaky.peakystore.services.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @PostMapping
    public ResponseEntity<PurchaseDTO> save(@RequestBody PurchaseDTO dto){
        PurchaseDTO newDto = purchaseService.save(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }
}

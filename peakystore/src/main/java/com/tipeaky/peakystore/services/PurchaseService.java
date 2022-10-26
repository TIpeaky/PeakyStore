package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.exceptions.EntityNotFoundException;
import com.tipeaky.peakystore.model.dtos.PurchaseDTO;
import com.tipeaky.peakystore.model.entities.Purchase;
import com.tipeaky.peakystore.repositories.PurchaseRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.UUID;

@Service
public class PurchaseService {

    @Autowired
    PurchaseRepository purchaseRepository;

    @Autowired
    ModelMapper mapper;

    public PurchaseDTO getPurchase(UUID id) {
        Optional<Purchase> purchase = purchaseRepository.findById(id);
        if(purchase.isEmpty()){
            throw new EntityNotFoundException("Pedido não encontrado");
        }

        return mapper.map(purchase.get(), PurchaseDTO.class);
    }
}

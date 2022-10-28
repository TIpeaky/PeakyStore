package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.exceptions.EntityNotFoundException;
import com.tipeaky.peakystore.model.dtos.PurchaseDTO;
import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.entities.CartItem;
import com.tipeaky.peakystore.model.entities.Purchase;
import com.tipeaky.peakystore.repositories.CartItemRepository;
import com.tipeaky.peakystore.repositories.PurchaseRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PurchaseService {

    @Autowired
    PurchaseRepository purchaseRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    ModelMapper mapper;

    public PurchaseDTO getPurchase(UUID id) {
        Optional<Purchase> purchase = purchaseRepository.findById(id);
        if(purchase.isEmpty()){
            throw new EntityNotFoundException("Pedido não encontrado");
        }
        PurchaseDTO purchaseDTO = mapper.map(purchase.get(), PurchaseDTO.class);
        purchaseDTO.setUser(new UserDTO());
        purchaseDTO.getUser().setName(purchase.get().getUser().getName());
        purchaseDTO.getUser().setCpf(purchase.get().getUser().getCpf());

        return purchaseDTO;
    }

    public PurchaseDTO save(PurchaseDTO dto) {
        List<CartItem> cartItem = dto.getCartItemList();
        dto.setCartItemList(null);
        Purchase purchase = purchaseRepository.save(mapper.map(dto,Purchase.class));
        cartItem.forEach(x -> x.setPurchase(purchaseRepository.getReferenceById(purchase.getId())));
        cartItemRepository.saveAll(cartItem);
        return mapper.map(purchase,PurchaseDTO.class);
    }
}

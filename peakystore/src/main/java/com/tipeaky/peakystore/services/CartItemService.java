package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.model.dtos.CartItemDTO;
import com.tipeaky.peakystore.model.entities.CartItem;
import com.tipeaky.peakystore.model.entities.Product;
import com.tipeaky.peakystore.model.entities.Purchase;
import com.tipeaky.peakystore.model.entities.pk.CartItemPK;
import com.tipeaky.peakystore.repositories.CartItemRepository;
import com.tipeaky.peakystore.repositories.ProductRepository;
import com.tipeaky.peakystore.repositories.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository repository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private ProductService productService;

    @Transactional
    public CartItemDTO insert(CartItemDTO dto) {
        Product product = productRepository.getReferenceById(dto.getProductId());
        Purchase purchase = purchaseRepository.getReferenceById(dto.getPurchaseId());
        CartItemPK cartItemPK = new CartItemPK(product,purchase);
        CartItem cartItem = new CartItem();
        cartItem.setId(cartItemPK);
        cartItem.setQuantity(dto.getQuantity());
        cartItem.setTotalPrice(dto.getTotalPrice());

        productService.reduceStock(product.getId(), dto.getQuantity());

        return new CartItemDTO(repository.save(cartItem));
    }

}

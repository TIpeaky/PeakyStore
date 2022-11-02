package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.exceptions.EntityNotFoundException;
import com.tipeaky.peakystore.model.dtos.PurchaseDTO;
import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.entities.CartItem;
import com.tipeaky.peakystore.model.entities.Product;
import com.tipeaky.peakystore.model.entities.Purchase;
import com.tipeaky.peakystore.model.entities.User;
import com.tipeaky.peakystore.model.enums.StatusEnum;
import com.tipeaky.peakystore.model.forms.CartItemForm;
import com.tipeaky.peakystore.model.forms.PurchaseForm;
import com.tipeaky.peakystore.repositories.CartItemRepository;
import com.tipeaky.peakystore.repositories.ProductRepository;
import com.tipeaky.peakystore.repositories.PurchaseRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    ProductRepository productRepository;
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

    public PurchaseDTO save(PurchaseForm purchaseForm) {
//        List<CartItem> cartItem = dto.getCartItemList();
//        dto.setCartItemList(null);
//        Purchase purchase = purchaseRepository.save(mapper.map(dto,Purchase.class));
//        cartItem.forEach(x -> x.setPurchase(purchaseRepository.getReferenceById(purchase.getId())));
//        cartItemRepository.saveAll(cartItem);
//        return mapper.map(purchase,PurchaseDTO.class);

        List<CartItemForm> CartItemForm = purchaseForm.getCartItemList();
        purchaseForm.setCartItemList(null);
        Purchase purchase = purchaseRepository.save(mapper.map(purchaseForm,Purchase.class));

        //
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        purchase.setUser(((User)principal));
        //
        purchase.setOrderMadeDateTime(LocalDateTime.now());
        //
        purchase.setStatus(StatusEnum.ORDER_MADE);
        //
        BigDecimal totalValue = BigDecimal.ZERO;
        List<CartItem> cartItems = new ArrayList<>();

        for (CartItemForm cartItemForm : CartItemForm ) {
            Product produto = mapper.map(
                    productRepository.findById(cartItemForm.getProductIdForm().getId()), Product.class);
            produto.updateStockQuantity(cartItemForm.getQuantity());
            productRepository.save(produto);
            CartItem cartItem = mapper.map(cartItemForm, CartItem.class);
            cartItem.setProduct(produto);

            cartItem.setTotalPrice(
                    cartItem.getProduct().getSalePrice().multiply( BigDecimal.valueOf(cartItem.getQuantity())));
            cartItem.setPurchase(purchase);
            totalValue.add(cartItem.getTotalPrice());
            cartItems.add(cartItem);

        }

        // Ainda tem que diminuir no estoque

        cartItemRepository.saveAll(cartItems);
        purchase.setTotalValue(totalValue);

        Purchase purchaseSaved = purchaseRepository.save(purchase);
        return mapper.map(purchaseSaved,PurchaseDTO.class);

    }
}

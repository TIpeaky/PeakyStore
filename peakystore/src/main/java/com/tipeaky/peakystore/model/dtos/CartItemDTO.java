package com.tipeaky.peakystore.model.dtos;

import com.tipeaky.peakystore.model.entities.CartItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartItemDTO {

    private UUID purchaseId;
    private UUID productId;
    private Integer quantity;
    private BigDecimal totalPrice;

    public CartItemDTO(CartItem entity) {
        purchaseId = entity.getId().getPurchase().getId();
        productId = entity.getId().getProduct().getId();
        quantity = entity.getQuantity();
        totalPrice = entity.getTotalPrice();
    }
}

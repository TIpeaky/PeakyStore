package com.tipeaky.peakystore.model.entities.pk;

import com.tipeaky.peakystore.model.entities.Product;
import com.tipeaky.peakystore.model.entities.Purchase;
import lombok.*;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serial;
import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class CartItemPK implements Serializable {
    @Serial
    private static final long serialVersionUID = -3745953889664464433L;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "purchase_id")
    private Purchase purchase;

}

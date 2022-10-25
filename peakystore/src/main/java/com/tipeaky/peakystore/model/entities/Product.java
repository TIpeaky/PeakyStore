package com.tipeaky.peakystore.model.entities;

import com.tipeaky.peakystore.model.enums.CategoryEnum;
import com.tipeaky.peakystore.model.enums.ColorEnum;
import com.tipeaky.peakystore.model.enums.SectionEnum;
import com.tipeaky.peakystore.model.enums.SizeEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", columnDefinition = "char(36)")
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID id;

    @Column(unique = true, nullable = false)
    private String sku;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private BigDecimal purchasePrice;
    @Column(nullable = false)
    private BigDecimal salePrice;
    @Column(nullable = false)
    private Integer stockQuantity;
    @Column(nullable = false)
    private String productBrand;
    @Column(nullable = false)
    private LocalDateTime lastUpdateDate;
    @Column(nullable = false)
    private ColorEnum color;
    @Column(nullable = false)
    private SizeEnum size;
    @Column(nullable = false)
    private CategoryEnum category;
    @Column(nullable = false)
    private SectionEnum section;
}

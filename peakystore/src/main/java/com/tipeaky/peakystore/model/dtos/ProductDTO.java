package com.tipeaky.peakystore.model.dtos;

import com.tipeaky.peakystore.model.enums.CategoryEnum;
import com.tipeaky.peakystore.model.enums.ColorEnum;
import com.tipeaky.peakystore.model.enums.SectionEnum;
import com.tipeaky.peakystore.model.enums.SizeEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
public class ProductDTO {

    private UUID id;
    private String sku;
    private String name;
    private String description;
    private BigDecimal purchasePrice;
    private BigDecimal salePrice;
    private Integer stockQuantity;
    private String productBrand;
    private LocalDateTime lastUpdateDate;
    private ColorEnum color;
    private SizeEnum size;
    private CategoryEnum category;
    private SectionEnum section;
}

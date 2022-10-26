package com.tipeaky.peakystore.model.forms;

import com.tipeaky.peakystore.model.enums.CategoryEnum;
import com.tipeaky.peakystore.model.enums.ColorEnum;
import com.tipeaky.peakystore.model.enums.SectionEnum;
import com.tipeaky.peakystore.model.enums.SizeEnum;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
public class ProductRegisterForm {

    @NotBlank
    private String sku;
    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @DecimalMin("1")
    private BigDecimal purchasePrice;
    @DecimalMin("1")
    private BigDecimal salePrice;
    @Min(1)
    private Integer stockQuantity;
    @NotBlank
    private String productBrand;
    private LocalDateTime lastUpdateDate;
    private ColorEnum color;
    private SizeEnum size;
    private CategoryEnum category;
    private SectionEnum section;

}

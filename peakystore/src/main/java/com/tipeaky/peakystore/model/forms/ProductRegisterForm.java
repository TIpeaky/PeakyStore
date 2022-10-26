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
import java.math.BigDecimal;

@Getter
@Setter
public class ProductRegisterForm {

    @NotBlank
    private String sku;
    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @DecimalMin("0")
    private BigDecimal purchasePrice;
    @DecimalMin("0")
    private BigDecimal salePrice;
    @Min(0)
    private Integer stockQuantity;
    @NotBlank
    private String productBrand;
    private ColorEnum color;
    private SizeEnum size;
    private CategoryEnum category;
    private SectionEnum section;

}

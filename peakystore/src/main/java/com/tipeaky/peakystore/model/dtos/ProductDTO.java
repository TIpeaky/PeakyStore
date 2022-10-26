package com.tipeaky.peakystore.model.dtos;

import com.tipeaky.peakystore.model.enums.CategoryEnum;
import com.tipeaky.peakystore.model.enums.ColorEnum;
import com.tipeaky.peakystore.model.enums.SectionEnum;
import com.tipeaky.peakystore.model.enums.SizeEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductDTO {

    private UUID id;
    @Size(min = 5, max = 60, message = "Deve ter entre 5 e 60 caracteres")
    @NotBlank(message = "Campo requerido")
    private String sku;
    @Size(min = 5, max = 60, message = "Deve ter entre 5 e 60 caracteres")
    @NotBlank(message = "Campo requerido")
    private String name;
    @NotBlank(message = "Campo requerido")
    private String description;
    @Positive(message = "Preço deve ser um valor positivo")
    private BigDecimal purchasePrice;
    @Positive(message = "Preço deve ser um valor positivo")
    private BigDecimal salePrice;
    @Positive(message = "Preço deve ser um valor positivo")
    private Integer stockQuantity;
    @NotBlank(message = "Campo requerido")
    private String productBrand;
    private LocalDateTime lastUpdateDate;
    private ColorEnum color;
    private SizeEnum size;
    private CategoryEnum category;
    private SectionEnum section;
}

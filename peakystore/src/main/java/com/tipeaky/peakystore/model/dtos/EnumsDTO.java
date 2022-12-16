package com.tipeaky.peakystore.model.dtos;

import com.fasterxml.jackson.annotation.JsonInclude;import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class EnumsDTO {

    private List<EnumsDTOs> productBrand;
    private List<EnumsDTOs> color;
    private List<EnumsDTOs> size;
    private List<EnumsDTOs> category;
    private List<EnumsDTOs> section;
}

package com.tipeaky.peakystore.model.dtos;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.tipeaky.peakystore.model.entities.Role;
import com.tipeaky.peakystore.model.enums.GenderEnum;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_EMPTY) //Não mostrará atributos nulos e nem vazios
public class UserDTO {
    private UUID id;
    private String cpf;
    private String name;
    private String email;
    private String password;
    private GenderEnum gender;
    //private Longblob avatar; imagem do usuário
    private LocalDate birthDate;
    private Boolean notification;

}

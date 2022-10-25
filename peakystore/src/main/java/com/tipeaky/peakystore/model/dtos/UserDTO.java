package com.tipeaky.peakystore.model.dtos;

import com.tipeaky.peakystore.model.entities.Address;
import com.tipeaky.peakystore.model.entities.Card;
import com.tipeaky.peakystore.model.entities.Role;
import com.tipeaky.peakystore.model.enums.GenderEnum;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

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
    private Role role;

}

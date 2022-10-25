package com.tipeaky.peakystore.model.forms;

import com.tipeaky.peakystore.model.entities.Address;
import com.tipeaky.peakystore.model.entities.Card;
import com.tipeaky.peakystore.model.entities.Role;
import com.tipeaky.peakystore.model.enums.GenderEnum;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Getter @Setter
public class UserForm {
    @CPF @NotBlank @UniqueElements
    private String cpf;
    @NotBlank
    private String name;
    @Email @NotBlank
    private String email;
    @NotBlank @Length(min = 6)
    private String password;
    private GenderEnum gender;
    @NotBlank @Past @Pattern(regexp = "(^(((0[1-9]|1[0-9]|2[0-8])[\\/](0[1-9]|1[012]))|((29|30|31)[\\/](0[13578]|1[02]))|((29|30)[\\/](0" +
            "[4,6,9]|11)))[\\/](19|[2-9][0-9])\\d\\d$)|(^29[\\/]02[\\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32" +
            "|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)")
    private LocalDate birthDate;
    private Boolean notification;
}

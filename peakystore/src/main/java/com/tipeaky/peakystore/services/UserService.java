package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.exceptions.DuplicatedEntityException;
import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.entities.Role;
import com.tipeaky.peakystore.model.entities.User;
import com.tipeaky.peakystore.model.forms.UserForm;
import com.tipeaky.peakystore.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ModelMapper mapper;

    @Transactional
    public UserDTO saveClient(UserForm userForm) {
        if(userRepository.findByCpf(userForm.getCpf()).isPresent())
            throw new DuplicatedEntityException("user already registered in the system");


        User user = mapper.map(userForm, User.class);
        user.setRoles(new Role(null, "Client"));
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return mapper.map(savedUser, UserDTO.class);
    }

    public UserDTO findUserById(UUID userID) {
        return null;
    }
}

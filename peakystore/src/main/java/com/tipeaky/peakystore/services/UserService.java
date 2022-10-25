package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.entities.Role;
import com.tipeaky.peakystore.model.entities.User;
import com.tipeaky.peakystore.model.forms.UserForm;
import com.tipeaky.peakystore.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ModelMapper mapper;

    public UserDTO save(UserForm userForm) {
        User user = mapper.map(userForm, User.class);
        user.setRole(new Role(null, "Client"));
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return mapper.map(savedUser, UserDTO.class);
    }
}

package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.config.security.TokenService;
import com.tipeaky.peakystore.exceptions.DuplicatedEntityException;
import com.tipeaky.peakystore.exceptions.EntityNotFoundException;
import com.tipeaky.peakystore.exceptions.UnauthorizedException;
import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.entities.Role;
import com.tipeaky.peakystore.model.entities.User;
import com.tipeaky.peakystore.model.forms.LoginForm;
import com.tipeaky.peakystore.model.forms.NewPasswordForm;
import com.tipeaky.peakystore.model.forms.UserForm;
import com.tipeaky.peakystore.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    ModelMapper mapper;

    @Transactional
    public UserDTO saveClient(UserForm userForm) {
        if(userRepository.findByCpf(userForm.getCpf()).isPresent())
            throw new DuplicatedEntityException("Usuário com esse CPF já existe no sistema");

        User user = mapper.map(userForm, User.class);

        user.setRoles(new Role(null, "Client"));
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));
        if(user.getNotification() == null)
            user.setNotification(false);

        User savedUser = userRepository.save(user);
        return mapper.map(savedUser, UserDTO.class);
    }

    public UserDTO findUserById(UUID userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) throw new EntityNotFoundException("Usuário não encontrado");
        return mapper.map(optionalUser.get(), UserDTO.class);
    }

    public String newPassword(UUID id, NewPasswordForm form) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = mapper.map(optionalUser, User.class);

        LoginForm loginForm = new LoginForm(user.getEmail(), form.getPassword());
        UsernamePasswordAuthenticationToken dadosLogin = loginForm.converter();

        try {
            authManager.authenticate(dadosLogin);
        } catch (AuthenticationException e) {
            throw new UnauthorizedException("Senha Incorreta");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(form.getNewPassword()));
        userRepository.save(user);

        return "Senha Alterada com sucesso";
    }
}

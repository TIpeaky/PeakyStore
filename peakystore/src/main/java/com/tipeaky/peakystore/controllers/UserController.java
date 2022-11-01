package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.config.security.TokenService;
import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.entities.User;
import com.tipeaky.peakystore.model.forms.NewPasswordForm;
import com.tipeaky.peakystore.model.forms.UserForm;
import com.tipeaky.peakystore.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/client")
    public ResponseEntity<UserDTO> saveClient(@RequestBody @Valid UserForm userForm) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveClient(userForm));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDTO> findUserById(@PathVariable UUID userId) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.findUserById(userId));
    }

    @PostMapping("/newPassword")
    public ResponseEntity<String> newPassword(HttpServletRequest request, @RequestBody @Valid NewPasswordForm form) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UUID id = ((User)principal).getId();
        return ResponseEntity.status(HttpStatus.OK).body(userService.newPassword(id, form));
    }
}

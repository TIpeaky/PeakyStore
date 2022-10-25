package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.forms.UserForm;
import com.tipeaky.peakystore.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping
    @Transactional
    public ResponseEntity<UserDTO> save(@RequestBody @Valid UserForm userForm) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.save(userForm));
    }
}

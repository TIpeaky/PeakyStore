package com.tipeaky.peakystore.controllers;

import com.tipeaky.peakystore.exceptions.NullObjectException;
import com.tipeaky.peakystore.model.dtos.AddressDTO;
import com.tipeaky.peakystore.model.dtos.NotificationDTO;
import com.tipeaky.peakystore.model.dtos.UserDTO;
import com.tipeaky.peakystore.model.forms.AddressRegisterForm;
import com.tipeaky.peakystore.model.forms.NotificationForm;
import com.tipeaky.peakystore.model.forms.UserForm;
import com.tipeaky.peakystore.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/client")
    public ResponseEntity<UserDTO> saveClient(@RequestBody @Valid UserForm userForm) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveClient(userForm));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDTO> findUserById(@PathVariable UUID userId) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.findUserById(userId));
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers());
    }

    @PostMapping("/address/{userId}")
    public ResponseEntity<AddressDTO> saveAddress(@RequestBody @Valid AddressRegisterForm addressForm, @PathVariable UUID userId) {
        if(addressForm.checkNull()) throw new NullObjectException("Todos os atributos são nulos");
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveAddress(addressForm, userId));
    }

    @PutMapping("/notification/{userId}")
    public ResponseEntity <NotificationDTO> updateNotification(@RequestBody @Valid NotificationForm notificationForm, @PathVariable UUID userId){
        return ResponseEntity.status(HttpStatus.OK).body(userService.updateNotification(notificationForm, userId));

    }
}

package com.tipeaky.peakystore.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptions {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<StandardError> entityNotFoundHandlerMethod(EntityNotFoundException e, HttpServletRequest request) {
        StandardError se = new StandardError(LocalDateTime.now(), 404, "Not Found", e.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(se);
    }

    @ExceptionHandler(DuplicatedEntityException.class)
    public ResponseEntity<StandardError> entityNotFoundHandlerMethod(DuplicatedEntityException e, HttpServletRequest request) {
        StandardError se = new StandardError(LocalDateTime.now(), 409, "Conflict", e.getMessage(), request.getRequestURI());
        return  ResponseEntity.status(HttpStatus.CONFLICT).body(se);
    }

    @ExceptionHandler(CustomAuthenticationException.class)
    public ResponseEntity<StandardError> entityNotFoundHandlerMethod(CustomAuthenticationException e, HttpServletRequest request) {
        StandardError se = new StandardError(LocalDateTime.now(), 401, "Unauthorized", e.getMessage(), request.getRequestURI());
        return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(se);
    }
}

package com.tipeaky.peakystore.exceptions;

public class OutOfStockException extends RuntimeException{
    public OutOfStockException(String msg) {
        super(msg);
    }
}

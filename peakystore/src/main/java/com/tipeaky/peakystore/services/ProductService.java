package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.config.mapper.ModelMapperConfig;
import com.tipeaky.peakystore.model.dtos.ProductDTO;
import com.tipeaky.peakystore.model.entities.Product;
import com.tipeaky.peakystore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;
    @Autowired
    private ModelMapperConfig mapper;

    @Transactional(readOnly = true)
    public ProductDTO findyById(UUID id) {
        Product product = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Produto não encontrado"));
        return mapper.modelMapper().map(product, ProductDTO.class);
    }


}

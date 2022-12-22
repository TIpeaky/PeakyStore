package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.exceptions.MethodNotAllowedException;
import com.tipeaky.peakystore.filter.GenericSpecificationsBuilder;
import com.tipeaky.peakystore.filter.SpecificationFactory;
import com.tipeaky.peakystore.model.dtos.ProductDTO;
import com.tipeaky.peakystore.model.entities.Product;
import com.tipeaky.peakystore.model.enums.*;
import com.tipeaky.peakystore.model.forms.ProductUpdateForm;
import com.tipeaky.peakystore.model.forms.ProductRegisterForm;
import com.tipeaky.peakystore.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    private SpecificationFactory<Product> productSpecificationFactory;

    @Autowired
    ModelMapper mapper;

    public ProductDTO getProduct (UUID id) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty()) {
            throw new EntityNotFoundException("Produto não encontrado");
        }

        return mapper.map(product.get(), ProductDTO.class);
    }

    public ResponseEntity<String> deleteProduct(UUID id) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty()) {
            throw new EntityNotFoundException("Produto não encontrado");
        }
        productRepository.deleteById(id);
        Optional<Product> productDelete = productRepository.findById(id);
        if(productDelete.isPresent()) {
            throw new MethodNotAllowedException("Produto não pode ser excluído");
        }
        return ResponseEntity.ok().body("Produto excluído com sucesso");
    }
    @Transactional
    public ProductDTO update(ProductUpdateForm productUpdateForm) {
        ProductDTO recoveryProductDTO = getProduct(productUpdateForm.getId());
        mapper.map(productUpdateForm, recoveryProductDTO);
        Product product = mapper.map(recoveryProductDTO, Product.class);
        product.setLastUpdateDate(LocalDateTime.now());
        product.setSku(product.generateSku());

        return mapper.map(productRepository.save(product), ProductDTO.class);
    }

    public ProductDTO save(ProductRegisterForm productRegisterForm) {
        Product product = mapper.map(productRegisterForm, Product.class);
        product.setLastUpdateDate(LocalDateTime.now());
        product.setSku(product.generateSku());
        productRepository.save(product);

        return mapper.map(product, ProductDTO.class);
    }

    public Page<ProductDTO> getAllProducts(Pageable pageable, ColorEnum color, BrandEnum productBrand, SizeEnum size, CategoryEnum category, SectionEnum section) {

        GenericSpecificationsBuilder<Product> builder = new GenericSpecificationsBuilder<>();

        if(Objects.nonNull(color)) {
            builder.with(productSpecificationFactory.isEqual("color", color));
        }

        if(Objects.nonNull(productBrand)) {
            builder.with(productSpecificationFactory.isEqual("productBrand", productBrand));
        }

        if(Objects.nonNull(size)) {
            builder.with(productSpecificationFactory.isEqual("size", size));
        }

        if(Objects.nonNull(category)) {
            builder.with(productSpecificationFactory.isEqual("category", category));
        }

        if(Objects.nonNull(section)) {
            builder.with(productSpecificationFactory.isEqual("section", section));
        }

        Page<Product> productList = productRepository.findAll(builder.build(), pageable);
        if(productList.isEmpty()) throw new EntityNotFoundException("Não há produtos cadastrados");
        return productList.map(product -> mapper.map(product, ProductDTO.class));
    }


}

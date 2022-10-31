package com.tipeaky.peakystore.services;

import com.tipeaky.peakystore.exceptions.MethodNotAllowedException;
import com.tipeaky.peakystore.model.dtos.ProductDTO;
import com.tipeaky.peakystore.model.entities.Product;
import com.tipeaky.peakystore.model.forms.ProductUpdateForm;
import com.tipeaky.peakystore.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ModelMapper mapper;

    public ProductDTO getProduct(UUID id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isEmpty()) {
            throw new EntityNotFoundException("Produto não encontrado");
        }

        return mapper.map(product.get(), ProductDTO.class);
    }

    public ResponseEntity<String> deleteProduct(UUID id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isEmpty()) {
            throw new EntityNotFoundException("Produto não encontrado");
        }
        productRepository.deleteById(id);
        Optional<Product> productDelete = productRepository.findById(id);
        if (productDelete.isPresent()) {
            throw new MethodNotAllowedException("Produto não pode ser excluído");
        }
        return ResponseEntity.ok().body("Produto excluído com sucesso");
    }

    @Transactional
    public ProductDTO update(ProductUpdateForm form) {
        getProduct(form.getId());
        //TODO
        //aqui deve ser chamado o método save em productService, para gerar o novo sku do produto.
        return mapper.map(productRepository.save(mapper.map(form, Product.class)), ProductDTO.class);
    }
}

package com.springbootchallenge.backend.controller;

import com.springbootchallenge.backend.model.Prices;
import com.springbootchallenge.backend.repository.PricesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PricesController {

    @Autowired
    private PricesRepository pricesRepository;

    @PostMapping("/price")
    Prices newPrice(@RequestBody Prices newPrice) {
        return pricesRepository.save(newPrice);
    }

    @GetMapping("/allPrices")
    List<Prices> getAllPrices() {
        return pricesRepository.findAll();
    }

}
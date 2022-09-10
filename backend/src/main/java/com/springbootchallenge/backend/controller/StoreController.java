package com.springbootchallenge.backend.controller;

import com.springbootchallenge.backend.model.Store;
import com.springbootchallenge.backend.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StoreController {

    @Autowired
    private StoreRepository storeRepository;

    @PostMapping("/store")
    Store newStore(@RequestBody Store newStore){
        return storeRepository.save(newStore);
    }
}

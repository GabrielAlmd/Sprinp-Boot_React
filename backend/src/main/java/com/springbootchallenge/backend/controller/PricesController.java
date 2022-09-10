package com.springbootchallenge.backend.controller;

import com.springbootchallenge.backend.model.Prices;
import com.springbootchallenge.backend.repository.PricesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@RestController
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

    @GetMapping("/prices")
    public ResponseEntity<List<Prices>> getAllPrices(
            @RequestParam(required = false) Timestamp start_date,
            @RequestParam(required = false) Timestamp end_date,
            @RequestParam(required = false) Integer brand_id,
            @RequestParam(required = false) Integer product_id) {
        try {
            //Auxiliary array list for returning result
            List<Prices> prices = new ArrayList<Prices>();

            //Find all possible cases where we have content
            if (start_date == null && end_date == null && brand_id == null && product_id == null)
                pricesRepository.findAll().forEach(prices::add);
            else if (start_date != null ) {
                pricesRepository.findByStart_dateEquals(start_date).forEach(prices::add);
            }

            //Find if my array is empty
            if (prices.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            //Build array with final answer
            return new ResponseEntity<>(prices, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
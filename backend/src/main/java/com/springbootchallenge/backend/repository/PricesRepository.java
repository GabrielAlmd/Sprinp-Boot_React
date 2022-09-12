package com.springbootchallenge.backend.repository;

import com.springbootchallenge.backend.model.Prices;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;
import java.util.List;

public interface PricesRepository extends JpaRepository <Prices, Integer> {

}

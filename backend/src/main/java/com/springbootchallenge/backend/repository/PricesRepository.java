package com.springbootchallenge.backend.repository;

import com.springbootchallenge.backend.model.Prices;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;
import java.util.List;

public interface PricesRepository extends JpaRepository <Prices, Integer> {
    List<Prices> findByEnd_dateEquals(Timestamp date);
    List<Prices> findByStart_dateEquals(Timestamp date);
    List<Prices> findByBrand_idEquals(int brand_id);
    List<Prices> findByProduct_idEquals (int product_id);
}

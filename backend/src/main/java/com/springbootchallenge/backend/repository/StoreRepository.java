package com.springbootchallenge.backend.repository;

import com.springbootchallenge.backend.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends JpaRepository<Store, Integer> {
}

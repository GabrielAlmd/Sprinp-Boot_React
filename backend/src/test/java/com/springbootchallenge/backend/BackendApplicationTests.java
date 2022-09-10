package com.springbootchallenge.backend;

import com.springbootchallenge.backend.model.Prices;
import com.springbootchallenge.backend.repository.PricesRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Timestamp;

@SpringBootTest
class BackendApplicationTests {

	@Autowired
	private PricesRepository pricesRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void createData (){
		Prices price1 = new Prices (1, Timestamp.valueOf("2020-06-14 00:00:00"), Timestamp.valueOf("2020-12-31 23:59:59"), 1, 35455, 0, 35.50F, "EUR");
		pricesRepository.save(price1);
	}

}

package com.bao.api.dao;

import com.bao.api.entity.Basket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BasketRepository extends JpaRepository<Basket, Long> {
    List<Basket> findByBuyerId(String buyerId);
}

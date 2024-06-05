package com.bao.api.dao;

import com.bao.api.entity.BasketItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BasketItemRepository extends JpaRepository<BasketItem, Long> {
}

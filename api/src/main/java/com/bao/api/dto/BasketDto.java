package com.bao.api.dto;

import com.bao.api.entity.Basket;
import com.bao.api.entity.BasketItem;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BasketDto {
    Long id;

    String buyer_id;

    List<BasketItemDto> basketItemDto;
}

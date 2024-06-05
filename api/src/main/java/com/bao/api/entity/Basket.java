package com.bao.api.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "basket")
@Getter
@Setter
@NoArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Basket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "buyer_id")
    String buyerId;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "basket")
    Set<BasketItem> basketItems;

    public void addItem(Product product, int quantity) {
        if (product != null) {
            if (basketItems == null) {
                basketItems = new HashSet<>();
            }

            basketItems.stream()
                    .filter(i -> i.getProduct().getId().equals(product.getId()))
                    .findFirst()
                    .ifPresentOrElse(
                            item -> item.setQuantity(item.getQuantity() + quantity),
                            () -> basketItems.add(new BasketItem(product,quantity, this))
                    );
        }
    }

    public Basket(String buyerId) {
        this.buyerId = buyerId;
    }
}

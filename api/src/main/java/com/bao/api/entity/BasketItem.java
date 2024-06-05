package com.bao.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "basket_item")
@Getter
@Setter
@ToString
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BasketItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "quantity")
    int quantity;

    @ManyToOne
    @JoinColumn(name = "basket_id")
    @JsonIgnore
    Basket basket;

    @OneToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    @JsonIgnore
    Product product;

    public BasketItem(Product product,  int quantity, Basket basket) {
        this.quantity = quantity;
        this.basket = basket;
        this.product = product;
    }
}

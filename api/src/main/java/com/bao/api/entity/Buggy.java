package com.bao.api.entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data

@FieldDefaults(level = AccessLevel.PRIVATE)
public class Buggy {
    @NotEmpty
    @Size(min = 2, message = "User name should have at least 2 characters")
    String name;

    @NotEmpty
    @Email
    String email;
}

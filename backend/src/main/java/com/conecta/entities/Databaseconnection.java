package com.conecta.entities;

import io.micronaut.serde.annotation.Serdeable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Serdeable
@Entity
@Table(name = "User_data")
@Getter
@Setter
@NoArgsConstructor
public class Databaseconnection {

    @Id
    private String name;
    private String familyname;
    private String email;
    private String pictureurl;
    private String locale;
    private String rtoken;
    private String SUB;
    private String CPF;
    private String password;
}

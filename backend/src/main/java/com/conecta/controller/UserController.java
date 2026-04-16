package com.conecta.controller;

import java.util.List;

import com.conecta.entities.Databaseconnection;
import com.conecta.repositories.UserRepository;
import com.conecta.util.AesEncryptor;

import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.annotation.Put;
import io.micronaut.http.annotation.Delete;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.annotation.Status;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import org.mindrot.jbcrypt.BCrypt;

@Controller("/auth")
@Secured(SecurityRule.IS_ANONYMOUS)
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repo) {
        this.repository = repo;
    }

    @Get("/")
    public List<Databaseconnection> getAll() {
        return repository.findAll();
    }

    @Post(value = "/", consumes = "application/json")
    public Databaseconnection register(@Body Databaseconnection user) {
        String secret = System.getenv("AES_SECRET");
        if (user.getPassword() != null) {
            user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        }
        if (user.getName() != null) {
            user.setName(AesEncryptor.encrypt(user.getName(), secret));
        }
        if (user.getEmail() != null) {
            user.setEmail(AesEncryptor.encrypt(user.getEmail(), secret));
        }
        if (user.getSUB() != null) {
            user.setSUB(AesEncryptor.encrypt(user.getSUB(), secret));
        }
        if (user.getFamilyname() != null) {
            user.setFamilyname(AesEncryptor.encrypt(user.getFamilyname(), secret));
        }
        if(user.getCPF()!= null){
            user.setCPF(AesEncryptor.encrypt(user.getCPF(), secret));
        }
        return repository.save(user);
    }

    @Put(value = "/", consumes = "application/json")
    public Databaseconnection update(@Body Databaseconnection user) {
        String secret = System.getenv("AES_SECRET");
        if (user.getName() != null) {
            user.setName(AesEncryptor.encrypt(user.getName(), secret));
        }
        if (user.getEmail() != null) {
            user.setEmail(AesEncryptor.encrypt(user.getEmail(), secret));
        }
        if (user.getSUB() != null) {
            user.setSUB(AesEncryptor.encrypt(user.getSUB(), secret));
        }
        if (user.getFamilyname() != null) {
            user.setFamilyname(AesEncryptor.encrypt(user.getFamilyname(), secret));
        }
        return repository.update(user);
    }

    @Delete(value = "/", consumes = "application/json")
    @Status(HttpStatus.NO_CONTENT)
    public void delete(@Body Databaseconnection user) {
        repository.delete(user);
    }
}

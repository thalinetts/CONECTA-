package com.conecta.repositories;

import com.conecta.entities.Databaseconnection;

import io.micronaut.data.annotation.Repository;
import io.micronaut.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<Databaseconnection, String> {

}

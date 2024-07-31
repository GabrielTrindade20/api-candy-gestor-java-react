package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entities.IngredienteEntity;

public interface IngredienteRepository extends JpaRepository<IngredienteEntity, Long>{

}

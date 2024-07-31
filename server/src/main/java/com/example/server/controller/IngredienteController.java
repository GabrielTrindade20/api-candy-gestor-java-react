package com.example.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.IngredienteRequestDTO;
import com.example.server.dto.IngredienteResponseDTO;
import com.example.server.entities.IngredienteEntity;
import com.example.server.repository.IngredienteRepository;

@RestController
@Controller
@RequestMapping("/api/ingredientes")
public class IngredienteController {

	@Autowired
	private IngredienteRepository repository;

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/buscarTodosIngredientes")
	public List<IngredienteResponseDTO> getAll() {
		List<IngredienteResponseDTO> ingredientesList = repository.findAll().stream().map(IngredienteResponseDTO::new)
				.toList();
		return ingredientesList;
	}
	

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/cadastrarIngrediente")
	public void salvarIngrediente(@RequestBody IngredienteRequestDTO data) {
		IngredienteEntity ingrediente = new IngredienteEntity(data);
		repository.save(ingrediente);
		return;
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/deletarIngrediente/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarIngrediente(@PathVariable Long id) {
        repository.deleteById(id);
    }
}

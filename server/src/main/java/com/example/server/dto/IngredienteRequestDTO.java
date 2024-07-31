package com.example.server.dto;

public record IngredienteRequestDTO(Long idIngrediente,String nome, String descricao, Integer quantidade, String unidade, double preco ) {

}

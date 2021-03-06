package br.com.ronie;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.ronie.domain.Categoria;
import br.com.ronie.repositories.CategoriaRepository;

@SpringBootApplication
public class Cursomc1Application implements CommandLineRunner {

	@Autowired
	CategoriaRepository categoriaRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Cursomc1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Categoria cat1 = new Categoria(null, "Informática");
		Categoria cat2 = new Categoria(null, "Escritório");
		
		//categoriaRepository.save(cat1);
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2));
		
	}
}

package br.com.saturno.posjavamavenhibernate;

import java.util.List;

import org.junit.Test;

import br.com.saturno.posjavamavenhibernate.dao.DaoGeneric;
import br.com.saturno.posjavamavenhibernate.model.UsuarioPessoa;

public class TesteHibernate {

	@Test
	public void testeHibernateUtil() {
		HibernateUtil.getEntityManager();
	}

	public void testeDaoGenericSalvar() {
		DaoGeneric<UsuarioPessoa> dao = new DaoGeneric<UsuarioPessoa>();

		UsuarioPessoa up = new UsuarioPessoa();
		up.setEmail("teste@gmail.com");
		up.setLogin("teste");
		up.setNome("Teste");
		up.setSenha("123");
		up.setSobrenome(" da Silva");
		dao.salvar(up);
	}

	@Test
	public void testeBuscar() {
		DaoGeneric<UsuarioPessoa> dao = new DaoGeneric<UsuarioPessoa>();

		UsuarioPessoa up = new UsuarioPessoa();
		up.setId(1L);
		up = dao.pesquisar(up);
		System.out.println(up);
	}

	@Test
	public void testeUpdate() {
		DaoGeneric<UsuarioPessoa> dao = new DaoGeneric<UsuarioPessoa>();

		UsuarioPessoa up = new UsuarioPessoa();
		up.setId(2L);
		up = dao.pesquisar(up);

		up.setEmail("teste2@yahoo.com");
		up.setNome("teste2");
		up.setSobrenome("novo nome");
		up = dao.updateMerge(up);
		System.out.println(up);

	}
	
	
	public void testeDelete() {
		DaoGeneric<UsuarioPessoa> dao = new DaoGeneric<UsuarioPessoa>();

		UsuarioPessoa up = new UsuarioPessoa();
		up.setId(4L);
		up = dao.pesquisar(up);

		dao.deletePorId(up);
	}
	
	@Test
	public void testeListar() {
		DaoGeneric<UsuarioPessoa> dao = new DaoGeneric<UsuarioPessoa>();

		List<UsuarioPessoa> up = dao.listar(UsuarioPessoa.class);
		for (UsuarioPessoa usuarioPessoa : up) {
			System.out.println(usuarioPessoa);
			System.out.println("-----------------------------------------------------------");
		}
	}
}

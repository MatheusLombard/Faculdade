package dc.unifacef.ExemploMemoria.service;

import dc.unifacef.ExemploMemoria.model.Produto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProdutoService {
    ArrayList<Produto> produtos = new ArrayList<>();

    //contador
    private long contador = 1;


    public ArrayList<Produto> listar(){
        return this.produtos;
    }

    public Produto criar(Produto produto){
        produto.setId(contador);
        this.produtos.add(produto);
        contador++;
        return produto;
    }
}

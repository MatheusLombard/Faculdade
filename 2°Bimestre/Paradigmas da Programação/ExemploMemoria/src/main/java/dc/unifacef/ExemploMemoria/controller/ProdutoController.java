package dc.unifacef.ExemploMemoria.controller;

import dc.unifacef.ExemploMemoria.model.Produto;
import dc.unifacef.ExemploMemoria.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;

@RestController // classe responsavém por controlar requisições rest
@RequestMapping("/produto")//responde apenas solicitações do /produto
public class ProdutoController {

    //injeção de dependência
    //permite chamar metodos com objetos não instanciados;
    @Autowired
    ProdutoService service;

    //requisição pelo verbo GET
    @GetMapping
    public ResponseEntity<ArrayList<Produto>> listar(){
       return  ResponseEntity.ok(service.listar());
    }
    @PostMapping
    public ResponseEntity criar(@RequestBody Produto produto){
       Produto novo = service.criar(produto);
       URI uri = URI.create("/produto/" + novo.getId());
       return ResponseEntity.created(uri).body(novo);
    }
}

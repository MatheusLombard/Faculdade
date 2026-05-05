package dc.unifacef.ExemploMemoria.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // classe responsavém por controlar requisições rest
@RequestMapping("/produto")//responde apenas solicitações do /produto
public class ProdutoController {
    //requisição pelo verbo GET
    @GetMapping
    public String mensagem(){
        return "Hello Word";
    }
}

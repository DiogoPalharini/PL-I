import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";

export default class EditarProduto {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public editarProduto(): void {
        console.log(`\nInício da edição de produto`);
        let nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto a ser editado: `);
        let produtoEncontrado = this.empresa.getProdutos.find(produto => produto.getNome === nomeProduto);

        if (produtoEncontrado) {
            console.log(`Produto encontrado. Informe os novos dados:`);
            let novoNome = this.entrada.receberTexto(`Novo nome do produto: `);
            let novoPreco = this.entrada.receberNumero(`Novo preço do produto: `);
            
            produtoEncontrado.setNome = novoNome;
            produtoEncontrado.setPreco = novoPreco;

            console.log(`Produto editado com sucesso.`);
        } else {
            console.log(`Produto não encontrado.`);
        }
    }
}

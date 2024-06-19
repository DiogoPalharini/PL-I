import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";

export default class CadastroProduto {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public cadastrarProduto(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Por favor, informe o preço do produto: `);
        let produto = new Produto(nome, preco);
        this.empresa.getProdutos.push(produto);
        console.log(`\nCadastro de produto concluído :)\n`);
    }
}

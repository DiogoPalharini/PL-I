import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";

export default class DeletarProduto {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public deletarProduto(): void {
        console.log(`\nInício da deleção de produto`);
        let nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto a ser deletado: `);
        let index = this.empresa.getProdutos.findIndex(produto => produto.getNome === nomeProduto);

        if (index !== -1) {
            this.empresa.getProdutos.splice(index, 1);
            console.log(`Produto deletado com sucesso.`);
        } else {
            console.log(`Produto não encontrado.`);
        }
    }
}

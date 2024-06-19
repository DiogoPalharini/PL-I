import Empresa from "../../modelo/empresa";

export default class ListagemProdutos {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarProdutos(): void {
        console.log(`\nListagem de todos os produtos:`);
        this.empresa.getProdutos.forEach(produto => {
            console.log(`Nome: ${produto.getNome}, Preço: R$${produto.getPreco.toFixed(2)}`);
        });
        console.log(`\n`);
    }
}

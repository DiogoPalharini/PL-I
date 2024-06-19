import Empresa from "../../modelo/empresa";

export default class ListarComprasProdutos {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarComprasProdutos(): void {
        console.log(`\nLista de todas as compras de produtos:`);
        const comprasProdutos = this.empresa.getComprasProdutos();
        comprasProdutos.forEach(compra => {
            console.log(`--------------------------------------`);
            console.log(`Nome do Produto: ${compra.getProduto()}`); 
            console.log(`CPF do Cliente: ${compra.getCpfCliente()}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}

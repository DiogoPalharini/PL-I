import Empresa from "../../modelo/empresa";

export default class ListarComprasServicos {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarComprasServicos(): void {
        console.log(`\nLista de todas as compras de serviços:`);
        const comprasServicos = this.empresa.getComprasServicos();
        comprasServicos.forEach(compra => {
            console.log(`--------------------------------------`);
            console.log(`Nome do Serviço: ${compra.getServico()}`);
            console.log(`CPF do Cliente: ${compra.getCpfCliente()}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}

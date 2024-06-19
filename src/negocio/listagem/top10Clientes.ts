import Empresa from "../../modelo/empresa";

export default class ListarTopClientes {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarTopClientes(): void {
        console.log(`\nTop 10 clientes que mais consumiram produtos ou serviços em quantidade:`);

        // Mapear as compras e contar a quantidade total de produtos ou serviços para cada cliente
        const quantidadePorCliente = new Map<string, number>();

        // Loop através de todas as compras de produtos
        this.empresa.getComprasProdutos().forEach(compraProduto => {
            const cpfCliente = compraProduto.getCpfCliente();
            quantidadePorCliente.set(cpfCliente, (quantidadePorCliente.get(cpfCliente) || 0) + 1);
        });

        // Loop através de todas as compras de serviços
        this.empresa.getComprasServicos().forEach(compraServico => {
            const cpfCliente = compraServico.getCpfCliente();
            quantidadePorCliente.set(cpfCliente, (quantidadePorCliente.get(cpfCliente) || 0) + 1);
        });

        // Converter o mapa para uma matriz de pares chave-valor e classificar os clientes com base na quantidade
        const topClientes = Array.from(quantidadePorCliente.entries())
            .sort(([, quantidadeA], [, quantidadeB]) => quantidadeB - quantidadeA)
            .slice(0, 10);

        // Exibir os top 10 clientes
        topClientes.forEach(([cpfCliente, quantidade], index) => {
            const cliente = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);
            console.log(`${index + 1}. Cliente: ${cliente?.getNome} (CPF: ${cpfCliente}) - Quantidade: ${quantidade}`);
        });

        console.log(`\n`);
    }
}

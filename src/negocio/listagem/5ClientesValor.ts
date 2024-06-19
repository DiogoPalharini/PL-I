import Empresa from "../../modelo/empresa";
import CompraProduto from "../../modelo/compraProduto";
import CompraServico from "../../modelo/compraServico";

export default class ListarTopClientesPorValor {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarTopClientesPorValor(): void {
        console.log(`\nLista dos 5 clientes que mais consumiram em valor:`);

        // Mapa para armazenar o valor total gasto por cada cliente
        const valorTotalPorCliente = new Map<string, number>();

        // Processar compras de produtos
        this.empresa.getComprasProdutos().forEach((compraProduto: CompraProduto) => {
            const cpfCliente = compraProduto.getCpfCliente();
            const nomeProduto = compraProduto.getProduto();
            const produtoEncontrado = this.empresa.getProdutos.find(produto => produto.getNome === nomeProduto);

            if (produtoEncontrado) {
                const valorCompra = produtoEncontrado.getPreco;
                const valorAtual = valorTotalPorCliente.get(cpfCliente) || 0;
                valorTotalPorCliente.set(cpfCliente, valorAtual + valorCompra);
            }
        });

        // Processar compras de serviços
        this.empresa.getComprasServicos().forEach((compraServico: CompraServico) => {
            const cpfCliente = compraServico.getCpfCliente();
            const nomeServico = compraServico.getServico();
            const servicoEncontrado = this.empresa.getServicos.find(servico => servico.getNome === nomeServico);

            if (servicoEncontrado) {
                const valorCompra = servicoEncontrado.getPreco;
                const valorAtual = valorTotalPorCliente.get(cpfCliente) || 0;
                valorTotalPorCliente.set(cpfCliente, valorAtual + valorCompra);
            }
        });

        // Transformar o mapa em uma lista e ordenar por valor gasto
        const clientesOrdenados = Array.from(valorTotalPorCliente.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        // Exibir os resultados
        clientesOrdenados.forEach(([cpfCliente, valorGasto], index) => {
            const cliente = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);
            if (cliente) {
                console.log(`${index + 1}. Cliente: ${cliente.getNome} - CPF: ${cpfCliente} - Valor Gasto: R$ ${valorGasto.toFixed(2)}`);
            }
        });

        console.log(`\n`);
    }
}

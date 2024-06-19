import Empresa from "../../modelo/empresa";
import CompraProduto from "../../modelo/compraProduto";
import CompraServico from "../../modelo/compraServico";

export default class ListarMaisConsumidosPorPet {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarMaisConsumidos(): void {
        console.log(`\nLista dos produtos e serviços mais consumidos por raça e tipo de pet:`);

        const quantidadePorProdutoPorPet = new Map<string, Map<string, number>>();
        const quantidadePorServicoPorPet = new Map<string, Map<string, number>>();

        // Processar compras de produtos
        this.empresa.getComprasProdutos().forEach((compraProduto: CompraProduto) => {
            const cpfCliente = compraProduto.getCpfCliente();
            const cliente = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (cliente) {
                cliente.getPets.forEach(pet => {
                    const key = `${pet.getTipo()}:${pet.getRaca()}`;
                    if (!quantidadePorProdutoPorPet.has(key)) {
                        quantidadePorProdutoPorPet.set(key, new Map<string, number>());
                    }
                    const produtoMap = quantidadePorProdutoPorPet.get(key);
                    if (produtoMap) {
                        const nomeProduto = compraProduto.getProduto();
                        produtoMap.set(nomeProduto, (produtoMap.get(nomeProduto) || 0) + 1);
                    }
                });
            }
        });

        // Processar compras de serviços
        this.empresa.getComprasServicos().forEach((compraServico: CompraServico) => {
            const cpfCliente = compraServico.getCpfCliente();
            const cliente = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (cliente) {
                cliente.getPets.forEach(pet => {
                    const key = `${pet.getTipo()}:${pet.getRaca()}`;
                    if (!quantidadePorServicoPorPet.has(key)) {
                        quantidadePorServicoPorPet.set(key, new Map<string, number>());
                    }
                    const servicoMap = quantidadePorServicoPorPet.get(key);
                    if (servicoMap) {
                        const nomeServico = compraServico.getServico();
                        servicoMap.set(nomeServico, (servicoMap.get(nomeServico) || 0) + 1);
                    }
                });
            }
        });

        // Exibir os resultados
        quantidadePorProdutoPorPet.forEach((produtoMap, key) => {
            const [tipoPet, racaPet] = key.split(':');
            console.log(`\nProdutos mais consumidos para ${tipoPet} de raça ${racaPet}:`);
            const produtosOrdenados = Array.from(produtoMap.entries()).sort((a, b) => b[1] - a[1]);
            produtosOrdenados.forEach(([nomeProduto, quantidade], index) => {
                console.log(`${index + 1}. Produto: ${nomeProduto} - Quantidade: ${quantidade}`);
            });
        });

        quantidadePorServicoPorPet.forEach((servicoMap, key) => {
            const [tipoPet, racaPet] = key.split(':');
            console.log(`\nServiços mais consumidos para ${tipoPet} de raça ${racaPet}:`);
            const servicosOrdenados = Array.from(servicoMap.entries()).sort((a, b) => b[1] - a[1]);
            servicosOrdenados.forEach(([nomeServico, quantidade], index) => {
                console.log(`${index + 1}. Serviço: ${nomeServico} - Quantidade: ${quantidade}`);
            });
        });

        console.log(`\n`);
    }
}

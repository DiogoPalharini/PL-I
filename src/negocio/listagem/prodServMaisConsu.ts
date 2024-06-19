import Empresa from "../../modelo/empresa";


export default class ListarMaisConsumidos {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarMaisConsumidos(): void {
        console.log(`\nLista dos produtos e serviços mais consumidos:`);

        const quantidadePorProduto = new Map<string, number>();
        const quantidadePorServico = new Map<string, number>();

        // Contar quantidade de compras de produtos
        this.empresa.getComprasProdutos().forEach(compraProduto => {
            const nomeProduto = compraProduto.getProduto();
            quantidadePorProduto.set(nomeProduto, (quantidadePorProduto.get(nomeProduto) || 0) + 1);
        });

        // Contar quantidade de compras de serviços
        this.empresa.getComprasServicos().forEach(compraServico => {
            const nomeServico = compraServico.getServico();
            quantidadePorServico.set(nomeServico, (quantidadePorServico.get(nomeServico) || 0) + 1);
        });

        // Converter o mapa para uma matriz de pares chave-valor e ordenar pela quantidade
        const produtosMaisConsumidos = Array.from(quantidadePorProduto.entries())
            .sort(([, quantidadeA], [, quantidadeB]) => quantidadeB - quantidadeA);

        const servicosMaisConsumidos = Array.from(quantidadePorServico.entries())
            .sort(([, quantidadeA], [, quantidadeB]) => quantidadeB - quantidadeA);

        // Exibir os resultados
        console.log(`\nProdutos mais consumidos:`);
        produtosMaisConsumidos.forEach(([nomeProduto, quantidade], index) => {
            console.log(`${index + 1}. Produto: ${nomeProduto} - Quantidade: ${quantidade}`);
        });

        console.log(`\nServiços mais consumidos:`);
        servicosMaisConsumidos.forEach(([nomeServico, quantidade], index) => {
            console.log(`${index + 1}. Serviço: ${nomeServico} - Quantidade: ${quantidade}`);
        });

        console.log(`\n`);
    }
}

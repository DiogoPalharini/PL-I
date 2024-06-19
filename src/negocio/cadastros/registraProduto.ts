import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";
import CompraProduto from "../../modelo/compraProduto";

export default class RegistrarCompra {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public registrarCompraProduto(): void {
        console.log(`Início do registro de compra de produto`);
        let cpfCliente = this.entrada.receberTexto(`Por favor, informe o CPF do cliente: `);
        
        let clienteEncontrado = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

        if (clienteEncontrado) {
            let nomeProduto = this.entrada.receberTexto(`Informe o nome do produto comprado: `);
            let produtoEncontrado = this.empresa.getProdutos.find(produto => produto.getNome === nomeProduto);

            if (produtoEncontrado) {
                let compraProduto = new CompraProduto(nomeProduto, cpfCliente);
                this.empresa.registrarCompraProduto(compraProduto);
                console.log(`Compra de produto registrada com sucesso.`);
            } else {
                console.log(`Produto não encontrado.`);
            }
        } else {
            console.log(`Cliente não encontrado.`);
        }
    }
}

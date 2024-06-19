import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";

export default class DeletarCliente {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public deletarCliente(): void {
        console.log(`Início da remoção do cliente`);
        let cpfRemover = this.entrada.receberTexto(`Por favor, informe o CPF do cliente a ser removido: `);
        this.empresa.removerClientePorCPF(cpfRemover);
    }
}

import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class EditarCliente {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public editarCliente(): void {
        console.log(`Início da edição de cliente`);
        let cpfEditar = this.entrada.receberTexto(`Por favor, informe o CPF do cliente a ser editado: `);
        
        let clienteEncontrado = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfEditar);

        if (clienteEncontrado) {
            console.log(`Cliente encontrado. Informe os novos dados:`);
            let nomeNovo = this.entrada.receberTexto(`Novo nome do cliente: `);
            let nomeSocialNovo = this.entrada.receberTexto(`Novo nome social do cliente: `);
            clienteEncontrado.nome = nomeNovo;
            clienteEncontrado.nomeSocial = nomeSocialNovo;
            console.log(`Cliente editado com sucesso.`);
        } else {
            console.log(`Cliente não encontrado.`);
        }
    }
}

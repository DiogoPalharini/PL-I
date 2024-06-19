import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Empresa from "../../modelo/empresa";

export default class EditarServico {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public editarServico(): void {
        console.log(`\nInício da edição de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço a ser editado: `);
        let servicoEncontrado = this.empresa.getServicos.find(servico => servico.nome === nome);

        if (servicoEncontrado) {
            let novoNome = this.entrada.receberTexto(`Novo nome do serviço: `);
            let novoPreco = this.entrada.receberNumero(`Novo preço do serviço: `);
            servicoEncontrado.nome = novoNome;
            servicoEncontrado.preco = novoPreco;
            console.log(`\nServiço editado com sucesso!\n`);
        } else {
            console.log(`\nServiço não encontrado.\n`);
        }
    }
}

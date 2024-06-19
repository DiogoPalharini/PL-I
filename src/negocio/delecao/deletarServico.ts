import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";

export default class DeletarServico {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public deletarServico(): void {
        console.log(`\nInício da deleção de serviço`);
        let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço a ser deletado: `);

        const servicoIndex = this.empresa.getServicos.findIndex(servico => servico.nome === nomeServico);

        if (servicoIndex !== -1) {
            this.empresa.getServicos.splice(servicoIndex, 1);
            console.log(`\nServiço deletado com sucesso :)\n`);
        } else {
            console.log(`\nServiço não encontrado :(\n`);
        }
    }
}

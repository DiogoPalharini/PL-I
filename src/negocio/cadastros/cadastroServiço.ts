import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Empresa from "../../modelo/empresa";

export default class CadastroServico {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public cadastrarServico(): void {
        console.log(`\nInício do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        let servico = new Servico(nome, preco);
        this.empresa.getServicos.push(servico);
        console.log(`\nCadastro concluído :)\n`);
    }
}

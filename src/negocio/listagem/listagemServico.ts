import Servico from "../../modelo/servico";
import Empresa from "../../modelo/empresa";

export default class ListagemServicos {
    private empresa: Empresa;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
    }

    public listarServicos(): void {
        console.log(`\nLista de todos os serviços:`);
        this.empresa.getServicos.forEach(servico => {
            console.log(`Nome: ${servico.nome}, Preço: ${servico.preco}`);
        });
        console.log(`\n`);
    }
}

import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";

export default class DeletarPet {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public deletarPet(): void {
        console.log(`Início da remoção do pet`);
        let nomeRemover = this.entrada.receberTexto(`Por favor, informe o nome do pet a ser removido: `);
        this.empresa.removerPetPorNome(nomeRemover);
    }
}

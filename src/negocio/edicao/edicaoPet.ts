import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";

export default class EditarPet {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public editarPet(): void {
        console.log(`Início da edição de pet`);
        let cpfDono = this.entrada.receberTexto(`Por favor, informe o CPF do dono do pet: `);
        
        let petEncontrado = this.empresa.getPets.find(pet => pet.getDonoCpf() === cpfDono);

        if (petEncontrado) {
            console.log(`Pet encontrado. Informe os novos dados:`);
            let novoNome = this.entrada.receberTexto(`Novo nome do pet: `);
            let novaRaca = this.entrada.receberTexto(`Nova raça do pet: `);
            let novoGenero = this.entrada.receberTexto(`Novo gênero do pet: `);
            let novoTipo = this.entrada.receberTexto(`Novo tipo do pet: `);
            
            petEncontrado.setNome(novoNome);
            petEncontrado.setRaca(novaRaca);
            petEncontrado.setGenero(novoGenero);
            petEncontrado.setTipo(novoTipo);

            console.log(`Pet editado com sucesso.`);
        } else {
            console.log(`Pet não encontrado para o CPF informado.`);
        }
    }
}

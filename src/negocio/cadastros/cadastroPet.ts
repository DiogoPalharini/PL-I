import Entrada from "../../io/entrada";
import { CadastrarPet } from "./cadastro";
import Pet from "../../modelo/pet";
import Cliente from "../../modelo/cliente";

export default class CadastroPet extends CadastrarPet {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>; // Lista de clientes para verificação
    private entrada: Entrada;

    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super();
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrarPet(): void {
        console.log(`\nInício do cadastro do Pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe o raça do Pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o genero do Pet: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do Pet: `);
        let donoCpfValor = this.entrada.receberTexto(`Por favor informe o CPF do dono do Pet: `);

        // Verificar se o CPF existe na lista de clientes
        let clienteDono = this.clientes.find(cliente => cliente.getCpf.getValor === donoCpfValor);

        if (clienteDono) {
            // Criar o pet e associá-lo ao cliente
            let pet = new Pet(nome, raca, genero, tipo, donoCpfValor);
            this.pets.push(pet);
            clienteDono.adicionarPet(pet); // Adiciona o pet ao cliente dono
            console.log(`\nCadastro concluído :)\n`);
        } else {
            console.log(`\nCPF do dono não encontrado. Cadastro do Pet não realizado.\n`);
        }
    }
}

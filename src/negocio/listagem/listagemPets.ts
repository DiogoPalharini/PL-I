import Pet from "../../modelo/pet";
import { ListarPets } from "./listagem";

export default class ListaPets extends ListarPets {
    private pets: Array<Pet>;

    constructor(pets: Array<Pet>) {
        super();
        this.pets = pets;
    }

    public listarpet(): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`--------------------------------------`);
            console.log(`Nome: ${pet.getNome()}`); 
            console.log(`Tipo: ${pet.getTipo()}`); 
            console.log(`Raça: ${pet.getRaca()}`); 
            console.log(`Gênero: ${pet.getGenero()}`); 
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}

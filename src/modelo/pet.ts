export default class Pet {
    private nome: string;
    private tipo: string;
    private raca: string;
    private genero: string;
    private donoCpf: string;

    constructor(nome: string, raca: string, genero: string, tipo: string, donoCpf: string) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
        this.donoCpf = donoCpf;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(novoTipo: string): void {
        this.tipo = novoTipo;
    }

    public getRaca(): string {
        return this.raca;
    }

    public setRaca(novaRaca: string): void {
        this.raca = novaRaca;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(novoGenero: string): void {
        this.genero = novoGenero;
    }

    public getDonoCpf(): string {
        return this.donoCpf;
    }
}

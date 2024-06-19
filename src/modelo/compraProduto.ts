export default class CompraProduto {
    private produto: string;
    private cpfCliente: string;

    constructor(produto: string, cpfCliente: string) {
        this.produto = produto;
        this.cpfCliente = cpfCliente;
    }

    public getProduto(): string {
        return this.produto;
    }

    public setProduto(produto: string): void {
        this.produto = produto;
    }

    public getCpfCliente(): string {
        return this.cpfCliente;
    }

    public setCpfCliente(cpfCliente: string): void {
        this.cpfCliente = cpfCliente;
    }
    
}

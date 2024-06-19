export default class CompraServico {
    private servico: string;
    private cpfCliente: string;

    constructor(servico: string, cpfCliente: string) {
        this.servico = servico;
        this.cpfCliente = cpfCliente;
    }

    public getServico(): string {
        return this.servico;
    }

    public setServico(servico: string): void {
        this.servico = servico;
    }

    public getCpfCliente(): string {
        return this.cpfCliente;
    }

    public setCpfCliente(cpfCliente: string): void {
        this.cpfCliente = cpfCliente;
    }
}

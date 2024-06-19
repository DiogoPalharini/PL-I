import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";
import Pet from "./pet";
import CompraProduto from "./compraProduto";
import CompraServico from "./compraServico";

export default class Empresa {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private pets: Array<Pet>;
    private comprasProdutos: Array<CompraProduto>; 
    private comprasServicos: Array<CompraServico>; 

    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
        this.pets = [];
        this.comprasProdutos = [];
        this.comprasServicos = [];
    }

    public get getClientes(): Array<Cliente> {
        return this.clientes;
    }

    public get getProdutos(): Array<Produto> {
        return this.produtos;
    }

    public get getServicos(): Array<Servico> {
        return this.servicos;
    }

    public get getPets(): Array<Pet> {
        return this.pets;
    }

    public adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    public adicionarServico(servico: Servico): void {
        this.servicos.push(servico);
    }

    public removerClientePorCPF(cpf: string): void {
        this.clientes = this.clientes.filter(cliente => cliente.getCpf.getValor !== cpf);
    }  

    public removerPetPorNome(nome: string): void {
        this.pets = this.pets.filter(pet => pet.getNome() !== nome);
    }

    public getComprasProdutos(): Array<CompraProduto> {
        return this.comprasProdutos;
    }
    
    public registrarCompraProduto(compraProduto: CompraProduto): void {
        this.comprasProdutos.push(compraProduto);
    }

    public getComprasServicos(): Array<CompraServico> {
        return this.comprasServicos;
    }

    public registrarCompraServico(compraServico: CompraServico): void {
        this.comprasServicos.push(compraServico);
    }
    
    public adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }
}

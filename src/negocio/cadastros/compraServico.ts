// src/negocio/registrarCompraServico.ts

import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";
import CompraServico from "../../modelo/compraServico";

export default class RegistrarCompraServico {
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public registrarCompraServico(): void {
        console.log(`Início do registro de compra de serviço`);
        let cpfCliente = this.entrada.receberTexto(`Por favor, informe o CPF do cliente: `);
        
        let clienteEncontrado = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

        if (clienteEncontrado) {
            let nomeServico = this.entrada.receberTexto(`Informe o nome do serviço comprado: `);
            let servicoEncontrado = this.empresa.getServicos.find(servico => servico.getNome === nomeServico);

            if (servicoEncontrado && clienteEncontrado) {
                let compraServico = new CompraServico(nomeServico, cpfCliente);
                this.empresa.registrarCompraServico(compraServico);
                console.log(`Compra de serviço registrada com sucesso.`);
            } else {
                console.log(`Serviço não encontrado.`);
            }
        } else {
            console.log(`Cliente não encontrado.`);
        }
    }
}

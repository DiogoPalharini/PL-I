import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastros/cadastroCliente";
import ListagemClientes from "../negocio/listagem/listagemClientes";
import CadastroPet from "../negocio/cadastros/cadastroPet";
import ListaPets from "../negocio/listagem/listagemPets";
import DeletarCliente from "../negocio/delecao/delcaoCliente";
import DeletarPet from "../negocio/delecao/delecaoPet";
import EditarCliente from "../negocio/edicao/edicaoCliente";
import EditarPet from "../negocio/edicao/edicaoPet";
import CadastroProduto from "../negocio/cadastros/cadastroProduto";
import ListagemProdutos from "../negocio/listagem/listagemProduto";
import EditarProduto from "../negocio/edicao/editarProduto";
import DeletarProduto from "../negocio/delecao/deletarProduto";
import CadastroServico from "../negocio/cadastros/cadastroServiço";
import ListagemServicos from "../negocio/listagem/listagemServico";
import EditarServico from "../negocio/edicao/editarServico";
import DeletarServico from "../negocio/delecao/deletarServico";
import RegistrarCompra from "../negocio/cadastros/registraProduto";
import ListarComprasProdutos from "../negocio/listagem/listaCompraProduto";
import ListarComprasServicos from "../negocio/listagem/listaCompraServiço";
import RegistrarCompraServico from "../negocio/cadastros/compraServico";
import ListarTopClientes from "../negocio/listagem/top10Clientes";
import ListarMaisConsumidos from "../negocio/listagem/prodServMaisConsu"; 
import ListarMaisConsumidosPorPet from "../negocio/listagem/listaProdSerPorPet";
import ListarTopClientesPorValor from "../negocio/listagem/5ClientesValor";


import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);
let empresa = new Empresa();
let execucao = true;
let entrada = new Entrada();


const produtosPadrao = [
    { nome: "Ração", preco: 50.0 },
    { nome: "Brinquedo", preco: 20.0 },
];

const servicosPadrao = [
    { nome: "a", preco: 30.0 },
    { nome: "b", preco: 40.0 },
];
function criarProdutosPadrao(empresa: Empresa): void {
    produtosPadrao.forEach(produto => {
        empresa.adicionarProduto(new Produto(produto.nome, produto.preco));
    });
}

// Função para criar serviços padrão
function criarServicosPadrao(empresa: Empresa): void {
    servicosPadrao.forEach(servico => {
        empresa.adicionarServico(new Servico(servico.nome, servico.preco));
    });
}

// Se necessário, chame as funções de criação automaticamente
criarProdutosPadrao(empresa);
criarServicosPadrao(empresa);

while (execucao) {
    console.log(`------------------------------------------------`);
    console.log(`Área Cadastro`)
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar pets`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Cadastrar serviço`);
    console.log(`------------------------------------------------`);
    console.log(`Área Deleção`)
    console.log(`5 - Deletar cliente`);
    console.log(`6 - Deletar pet`);
    console.log(`7 - Deletar produto`);
    console.log(`8 - Deletar serviço`);
    console.log(`------------------------------------------------`);
    console.log(`Área Edição`)
    console.log(`9 - Editar cliente`);
    console.log(`10 - Editar pet`);
    console.log(`11 - Editar produto`);
    console.log(`12 - Editar serviço`);
    console.log(`------------------------------------------------`);
    console.log(`Área Listagem`)
    console.log(`13 - Listar todos os produtos`);
    console.log(`14 - Listar todos os pets`);
    console.log(`15 - Listar todos os clientes`);
    console.log(`16 - Listar todos os serviços`);
    console.log(`------------------------------------------------`);
    console.log(`Área Compras`)
    console.log(`17 - Registrar compra de produto`);
    console.log(`18 - Listar compras de produtos`);
    console.log(`19 - Registrar compra de serviço`);
    console.log(`20 - Listar compras de serviços`);
    console.log(`------------------------------------------------`);
    console.log(`Área Filtros`)
    console.log(`21 - Listar top 10 clientes compra quantidade`);
    console.log(`22 - Listar produtos e serviços mais consumidos`); 
    console.log(`23 - Listar produtos e serviços mais consumidos por raça e tipo de pet`);
    console.log(`24 - Top 5 clientes que mais consumiram em valor`)
    console.log(`------------------------------------------------`);
    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes);
            cadastroPet.cadastrarPet();
            break;
        case 3:
            let cadastroProduto = new CadastroProduto(empresa);
            cadastroProduto.cadastrarProduto();
            break;
        case 4:
            let cadastroServico = new CadastroServico(empresa);
            cadastroServico.cadastrarServico();
            break;
        case 5:
            let deletarCliente = new DeletarCliente(empresa);
            deletarCliente.deletarCliente();
            break;
        case 6:
            let deletarPet = new DeletarPet(empresa);
            deletarPet.deletarPet();
            break;
        case 7:
            let deletarProduto = new DeletarProduto(empresa);
            deletarProduto.deletarProduto();
            break;
        case 8:
            let deletarServico = new DeletarServico(empresa);
            deletarServico.deletarServico();
            break;
        case 9:
            let editarCliente = new EditarCliente(empresa);
            editarCliente.editarCliente();
            break;
        case 10:
            let editarPet = new EditarPet(empresa);
            editarPet.editarPet();
            break;
        case 11:
            let editarProduto = new EditarProduto(empresa);
            editarProduto.editarProduto();
            break;
        case 12:
            let editarServico = new EditarServico(empresa);
            editarServico.editarServico();
            break;
        case 13:
            let listagemProdutos = new ListagemProdutos(empresa);
            listagemProdutos.listarProdutos();
            break;
        case 14:
            let listagemPets = new ListaPets(empresa.getPets);
            listagemPets.listarpet();
            break;
        case 15:
            let listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listar();
            break;
        case 16:
            let listagemServicos = new ListagemServicos(empresa);
            listagemServicos.listarServicos();
            break;
        case 17:
            let registrarCompraProduto = new RegistrarCompra(empresa);
            registrarCompraProduto.registrarCompraProduto();
            break;
        case 18:
            let listarComprasProdutos = new ListarComprasProdutos(empresa);
            listarComprasProdutos.listarComprasProdutos();
            break;
        case 19:
            let registrarCompraServico = new RegistrarCompraServico(empresa);
            registrarCompraServico.registrarCompraServico();
            break;
        case 20:
            let listarComprasServicos = new ListarComprasServicos(empresa);
            listarComprasServicos.listarComprasServicos();
            break;
        case 21:
            let listarTopClientes = new ListarTopClientes(empresa);
            listarTopClientes.listarTopClientes();
            break;
        case 22:
            let listarMaisConsumidos = new ListarMaisConsumidos(empresa);
            listarMaisConsumidos.listarMaisConsumidos(); // Chama o método para listar mais consumidos
            break;
        case 23:
            let listarMaisConsumidosPorPet = new ListarMaisConsumidosPorPet(empresa);
            listarMaisConsumidosPorPet.listarMaisConsumidos();
            break;
        case 24:
            let listarTop5clientes = new ListarTopClientesPorValor(empresa);
            listarTop5clientes.listarTopClientesPorValor();
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}

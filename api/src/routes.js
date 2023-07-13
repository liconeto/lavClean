import { Router } from "express";
import {
  deletePessoa,
  insertPessoa,
  selectPessoa,
  selectPessoas,
  updatePessoa,
} from "./controller/pessoa.js";

import {
  deleteEndereco,
  insertEndereco,
  selectEndereco,
  updateEndereco,
} from "./controller/endereco.js";

import {
  deleteFuncionario,
  insertFuncionario,
  selectFuncionario,
  selectFuncionarios,
  updateFuncionario,
} from "./controller/funcionario.js";

import {
  deletePessoaContato,
  insertPessoaContato,
  selectPessoaContato,
  updatePessoaContato,
} from "./controller/pessoaContato.js";

import {
  deleteSetor,
  insertSetor,
  selectSetor,
  selectSetores,
  updateSetor,
} from "./controller/setor.js";

import {
  deletePedido,
  insertPedido,
  selectPedido,
  selectPedidos,
  updatePedido,
} from "./controller/pedido.js";

import {
  deleteItemPedido,
  insertItemPedido,
  selectItemPedido,
  selectItensPedido,
  updateItemPedido,
} from "./controller/itemPedido.js";

import {
  deleteProduto,
  insertProduto,
  selectProduto,
  selectProdutos,
  updateProduto,
} from "./controller/produtos.js";

import {
  deleteLogradouro,
  insertLogradouro,
  selectLogradouro,
  selectLogradouros,
  updateLogradouro,
} from "./controller/logradouro.js";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    msg: "Api rodando!",
  });
});

//Rotas Pessoa
router.get("/pessoas", selectPessoas);
router.get("/pessoa", selectPessoa);
router.post("/pessoa", insertPessoa);
router.put("/pessoa", updatePessoa);
router.delete("/pessoa", deletePessoa);

//Rotas PessoaContato
router.get("/pessoaContato", selectPessoaContato);
router.post("/pessoaContato", insertPessoaContato);
router.put("/pessoaContato", updatePessoaContato);
router.delete("/pessoaContato", deletePessoaContato);

//Rotas Endereço
router.get("/endereco", selectEndereco);
router.post("/endereco", insertEndereco);
router.put("/endereco", updateEndereco);
router.delete("/endereco", deleteEndereco);

//Rotas Produtos
router.get("/logradouros", selectLogradouros);
router.get("/logradouro", selectLogradouro);
router.post("/logradouro", insertLogradouro);
router.put("/logradouro", updateLogradouro);
router.delete("/logradouro", deleteLogradouro);

//Rotas Funcionario
router.get("/funcionarios", selectFuncionarios);
router.get("/funcionario", selectFuncionario);
router.post("/funcionario", insertFuncionario);
router.put("/funcionario", updateFuncionario);
router.delete("/funcionario", deleteFuncionario);

//Rotas Setor
router.get("/setores", selectSetores);
router.get("/setor", selectSetor);
router.post("/setor", insertSetor);
router.put("/setor", updateSetor);
router.delete("/setor", deleteSetor);

//Rotas Pedido
router.get("/pedidos", selectPedidos);
router.get("/pedido", selectPedido);
router.post("/pedido", insertPedido);
router.put("/pedido", updatePedido);
router.delete("/pedido", deletePedido);

//Rotas ItemPedido
router.get("/itensPedido", selectItensPedido);
router.get("/itemPedido", selectItemPedido);
router.post("/itemPedido", insertItemPedido);
router.put("/itemPedido", updateItemPedido);
router.delete("/itemPedido", deleteItemPedido);

//Rotas Produtos
router.get("/produtos", selectProdutos);
router.get("/produto", selectProduto);
router.post("/produto", insertProduto);
router.put("/produto", updateProduto);
router.delete("/produto", deleteProduto);

export default router;

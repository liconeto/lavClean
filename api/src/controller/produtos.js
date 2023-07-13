import { openDb } from "../configDb.js";

export async function selectProdutos(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM produtos").then((produtos) => res.json(produtos));
  });
}

export async function selectProduto(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM produtos WHERE idproduto=?", [id]).then((produto) =>
      res.json(produto)
    );
  });
}

export async function insertProduto(req, res) {
  let produto = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO produtos( idFuncionario, codigo, tpProduto, nome, descricao, tamanho, cor) VALUES (?,?,?,?,?,?,?)",
      [
        produto.idFuncionario,
        produto.codigo,
        produto.tpProduto,
        produto.nome,
        produto.descricao,
        produto.tamanho,
        produto.cor,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateProduto(req, res) {
  let produto = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE produtos SET idFuncionario=?, codigo=?, tpProduto=?, nome=?, descricao=?, tamanho=?, cor=? WHERE idproduto=?",
      [
        produto.idFuncionario,
        produto.codigo,
        produto.tpProduto,
        produto.nome,
        produto.descricao,
        produto.tamanho,
        produto.cor,
        produto.idproduto,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteProduto(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM produtos WHERE idproduto=?", [id]).then((produto) =>
      res.json(produto)
    );
  });
  res.json({
    statusCode: 200,
  });
}

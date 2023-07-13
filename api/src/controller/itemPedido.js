import { openDb } from "../configDb.js";

export async function selectItensPedido(req, res) {
  let idPedido = req.body.id;
  openDb().then((db) => {
    db.all("SELECT * FROM itemPedido WHERE idpedido=?", [idPedido]).then(
      (itemPedido) => res.json(itemPedido)
    );
  });
}

export async function selectItemPedido(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM itemPedido WHERE iditemPedido=?", [id]).then(
      (itemPedido) => res.json(itemPedido)
    );
  });
}

export async function insertItemPedido(req, res) {
  let itemPedido = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO itemPedido( idpedido, obsItem, idproduto, qtde, valorUnit) VALUES (?,?,?,?,?)",
      [
        itemPedido.idpedido,
        itemPedido.obsItem,
        itemPedido.idproduto,
        itemPedido.qtde,
        itemPedido.valorUnit,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateItemPedido(req, res) {
  let itemPedido = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE itemPedido SET idpedido=?, obsItem=?, idproduto=?, qtde=?, valorUnit=? WHERE iditemPedido=?",
      [
        itemPedido.idpedido,
        itemPedido.obsItem,
        itemPedido.idproduto,
        itemPedido.qtde,
        itemPedido.valorUnit,
        itemPedido.iditemPedido,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteItemPedido(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM itemPedido WHERE iditemPedido=?", [id]).then(
      (itemPedido) => res.json(itemPedido)
    );
  });
  res.json({
    statusCode: 200,
  });
}

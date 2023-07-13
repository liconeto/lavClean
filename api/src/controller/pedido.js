import { openDb } from "../configDb.js";

export async function selectPedidos(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM pedido").then((pedidos) => res.json(pedidos));
  });
}

export async function selectPedido(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM pedido WHERE idPedido=?", [id]).then((pedido) =>
      res.json(pedido)
    );
  });
}

export async function insertPedido(req, res) {
  let pedido = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO pedido( idCliente, idFuncionario, qtde, total, dtlancamento, dtfechado, obs) VALUES (?,?,?,?,?,?,?)",
      [
        pedido.idCliente,
        pedido.idFuncionario,
        pedido.qtde,
        pedido.total,
        pedido.dtlancamento,
        pedido.dtfechado,
        pedido.obs,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updatePedido(req, res) {
  let pedido = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE pedido SET idCliente=?, idFuncionario=?, qtde=?, total=?, dtlancamento=?, dtfechado=?, obs=? WHERE idPedido=?",
      [
        pedido.idCliente,
        pedido.idFuncionario,
        pedido.qtde,
        pedido.total,
        pedido.dtlancamento,
        pedido.dtfechado,
        pedido.obs,
        pedido.idPedido,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deletePedido(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM pedido WHERE idPedido=?", [id]).then((pedido) =>
      res.json(pedido)
    );
  });
  res.json({
    statusCode: 200,
  });
}

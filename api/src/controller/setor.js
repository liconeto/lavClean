import { openDb } from "../configDb.js";

export async function selectSetores(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM setor").then((setores) => res.json(setores));
  });
}

export async function selectSetor(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM setor WHERE idSetor=?", [id]).then((setor) =>
      res.json(setor)
    );
  });
}

export async function insertSetor(req, res) {
  let setor = req.body;
  openDb().then((db) => {
    db.run("INSERT INTO setor( nome, observacao) VALUES (?,?)", [
      setor.nome,
      setor.observacao,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateSetor(req, res) {
  let setor = req.body;
  openDb().then((db) => {
    db.run("UPDATE setor SET nome=?, observacao=? WHERE idSetor=?", [
      setor.nome,
      setor.observacao,
      setor.idSetor,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteSetor(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM setor WHERE idSetor=?", [id]).then((setor) =>
      res.json(setor)
    );
  });
  res.json({
    statusCode: 200,
  });
}

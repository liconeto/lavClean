import { openDb } from "../configDb.js";

export async function selectLogradouros(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM logradouro").then((logradouros) =>
      res.json(logradouros)
    );
  });
}

export async function selectLogradouro(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM logradouro WHERE id=?", [id]).then((logradouro) =>
      res.json(logradouro)
    );
  });
}

export async function insertLogradouro(req, res) {
  let logradouro = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO logradouro( cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        logradouro.cep,
        logradouro.logradouro,
        logradouro.complemento,
        logradouro.bairro,
        logradouro.localidade,
        logradouro.uf,
        logradouro.ibge,
        logradouro.gia,
        logradouro.ddd,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateLogradouro(req, res) {
  let logradouro = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE logradouro SET cep=?, logradouro=?, complemento=?, bairro=?, localidade=?, uf=?, ibge=?, gia=?, ddd=? WHERE id=?",
      [
        logradouro.cep,
        logradouro.logradouro,
        logradouro.complemento,
        logradouro.bairro,
        logradouro.localidade,
        logradouro.uf,
        logradouro.ibge,
        logradouro.gia,
        logradouro.ddd,
        logradouro.id,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteLogradouro(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM logradouro WHERE id=?", [id]).then((logradouro) =>
      res.json(logradouro)
    );
  });
  res.json({
    statusCode: 200,
  });
}

import { openDb } from "../configDb.js";

export async function selectEndereco(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM endereco WHERE idpessoa=?", [id]).then((endereco) =>
      res.json(endereco)
    );
  });
}

export async function insertEndereco(req, res) {
  let endereco = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO endereco( idpessoa, numero, complemento) VALUES (?,?,?)",
      [endereco.idpessoa, endereco.numero, endereco.complemento]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateEndereco(req, res) {
  let endereco = req.body;
  openDb().then((db) => {
    db.run("UPDATE endereco SET numero=?, complemento=? WHERE idpessoa=?", [
      endereco.numero,
      endereco.complemento,
      endereco.idpessoa,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteEndereco(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM endereco WHERE idpessoa=?", [id]).then((endereco) =>
      res.json(endereco)
    );
  });
  res.json({
    statusCode: 200,
  });
}

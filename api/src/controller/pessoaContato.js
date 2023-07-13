import { openDb } from "../configDb.js";

export async function selectPessoaContato(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM pessoaContato WHERE id=?", [id]).then(
      (pessoaContato) => res.json(pessoaContato)
    );
  });
}

export async function insertPessoaContato(req, res) {
  let pessoaContato = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO pessoaContato( idpessoa, telefone, email, site, instagram ) VALUES (?,?,?,?,?)",
      [
        pessoaContato.idpessoa,
        pessoaContato.telefone,
        pessoaContato.email,
        pessoaContato.site,
        pessoaContato.instagram,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updatePessoaContato(req, res) {
  let pessoaContato = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE pessoaContato SET telefone=?, email=?, site=?, instagram=? WHERE idpessoa =?",
      [
        pessoaContato.telefone,
        pessoaContato.email,
        pessoaContato.site,
        pessoaContato.instagram,
        pessoaContato.idpessoa,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deletePessoaContato(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM pessoaContato WHERE idPessoa=?", [id]).then(
      (pessoaContato) => res.json(pessoaContato)
    );
  });
  res.json({
    statusCode: 200,
  });
}

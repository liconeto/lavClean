import { openDb } from "../configDb.js";

export async function selectFuncionarios(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM funcionario").then((funcionarios) =>
      res.json(funcionarios)
    );
  });
}

export async function selectFuncionario(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM funcionario WHERE pessoa_idpessoa=?", [id]).then(
      (funcionario) => res.json(funcionario)
    );
  });
}

export async function insertFuncionario(req, res) {
  let funcionario = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO funcionario( pessoa_idpessoa, funcao, setor_idSetor, tpFuncionario, dtnascimento, dtinicio, dtfim, ativo ) VALUES (?,?,?,?,?,?,?,?)",
      [
        funcionario.pessoa_idpessoa,
        funcionario.funcao,
        funcionario.setor_idSetor,
        funcionario.tpFuncionario,
        funcionario.dtnascimento,
        funcionario.dtinicio,
        funcionario.dtfim,
        funcionario.ativo,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateFuncionario(req, res) {
  let funcionario = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE funcionario SET funcao=?, setor_idSetor=?, tpFuncionario=?, dtnascimento=?, dtinicio=?, dtfim=?, ativo=? WHERE pessoa_idpessoa=?",
      [
        funcionario.funcao,
        funcionario.setor_idSetor,
        funcionario.tpFuncionario,
        funcionario.dtnascimento,
        funcionario.dtinicio,
        funcionario.dtfim,
        funcionario.ativo,
        funcionario.pessoa_idpessoa,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteFuncionario(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM funcionario WHERE pessoa_idpessoa=?", [id]).then(
      (funcionario) => res.json(funcionario)
    );
  });
  res.json({
    statusCode: 200,
  });
}

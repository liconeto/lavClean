import { openDb } from "../configDb.js";

export async function createTable() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)"
    );
  });
}

export async function selectPessoas(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM Pessoa").then((pessoas) => res.json(pessoas));
  });
}

export async function selectPessoa(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM Pessoa WHERE id=?", [id]).then((pessoa) =>
      res.json(pessoa)
    );
  });
}

export async function insertPessoa(req, res) {
  let pessoa = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO Pessoa(	nome, idade, sobreNome, cpf, cnpj, documento, tipoPessoa, unidade_idunidade, indCliente, indFuncionario, cliente_idCliente, matricula) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        pessoa.nome,
        pessoa.idade,
        pessoa.sobreNome,
        pessoa.cpf,
        pessoa.cnpj,
        pessoa.documento,
        pessoa.tipoPessoa,
        pessoa.unidade_idunidade,
        pessoa.indCliente,
        pessoa.indFuncionario,
        pessoa.cliente_idCliente,
        pessoa.matricula,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updatePessoa(req, res) {
  let pessoa = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE Pessoa SET nome=?, idade=?, sobreNome=?, cpf=?, cnpj=?, documento=?, tipoPessoa=?, unidade_idunidade=?, indCliente=?, indFuncionario=?, cliente_idCliente=?, matricula=? where id=? ",
      [
        pessoa.nome,
        pessoa.idade,
        pessoa.sobreNome,
        pessoa.cpf,
        pessoa.cnpj,
        pessoa.documento,
        pessoa.tipoPessoa,
        pessoa.unidade_idunidade,
        pessoa.indCliente,
        pessoa.indFuncionario,
        pessoa.cliente_idCliente,
        pessoa.matricula,
        pessoa.id,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function deletePessoa(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM Pessoa WHERE id=?", [id]).then((pessoa) =>
      res.json(pessoa)
    );
  });
  res.json({
    statusCode: 200,
  });
}

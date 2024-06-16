const { METHODS } = require("http");
const bd = require("../config/config");
const { FORMERR } = require("dns");

const Frase = {};

Frase.getAll = () => {
  const sql = `
    SELECT
        misfrases
    FROM
        frases
    ORDER BY
        misfrases
    `;
  return bd.manyOrNone(sql);
};

Frase.create = (frase) => {
  const sql = `
    INSERT INTO
        frases(
            misfrases
        )
        VALUES ($1)
        `;

  return bd.oneOrNone(sql, [frase.misfrases]);
};

Frase.delete = (frase) => {
  const sql = `
    DELETE FROM 
        frases
        WHERE misfrases = $1
        `;

  return bd.none(sql, [frase.misfrases]);
};

module.exports = Frase;

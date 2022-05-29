const mysql = require('mysql2/promise');

async function connect() {
  try {
    const con = await mysql.createConnection({
      "host": "localhost",
      "port": 3306,
      "user": "root",
      "password": "password",
      "database": "test",
    });

    await con.beginTransaction();

    const updateResult = await con.query(`UPDATE EMPLOYEES SET NAME = CONCAT('MR', NAME) WHERE NAME IN (?, ?)`, ['JOHN', 'SSMITH'])
    console.log(updateResult);

    const deleteBrittany = await con.query(`DELETE FROM EMPLOYEES WHERE SSN = ?`, ['777777'])
    console.log(deleteBrittany);

    const insertBrittany = await con.query(`INSERT INTO EMPLOYEES (NAME, SSN) values (?, ?)`, ['Brittany', '777777']);
    console.log(insertBrittany);

    const [allRows, schema] = await con.query('SELECT * FROM EMPLOYEES');
    console.table(allRows);

    const name = "BOB";
    const [bobRow, schema1] = await con.query(`SELECT * FROM EMPLOYEES WHERE NAME=?`, [name]);
    console.table(bobRow);

    await con.commit();

  } catch(e) {
    console.error(e);
  }
}

connect();

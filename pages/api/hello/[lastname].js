import {stringifyRequest} from "next/dist/build/webpack/stringify-request";

const sqlite3 = require('sqlite3').verbose();

export default async function handler(req, res) {
  const { lastname } = req.query

  let db = new sqlite3.Database('./test-next.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log('BOOM')
      console.error(err.message);
    }
    console.log('Connected to the test-next database.');
  });

  const sql = `SELECT firstname, lastname FROM persons WHERE lastname = "${lastname}"`

  db.get(sql, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return row
      ? res.status(200).end(`Hello ${row.firstname} ${row.lastname}`)
      : res.end(`No person with the lastname ${lastname}`);
  })
  //   .then((row)=>{
  //   res.end(`Hello ${row.firstname} ${row.lastname}`)
  // });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });




  // res.end(`Hello ${row.firstname} ${row.lastname}`)
}
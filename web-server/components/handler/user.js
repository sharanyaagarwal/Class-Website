const sql = require(__base + "/components/db-master/sql-queries");
const bcrypt = require("bcrypt");

const userHandler = {
  userLogin: (reqParams) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await userLoginProcess(reqParams);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
};

const userTbl = "user";

const userLoginProcess = (reqParams) => {
  const what = ["first_name", "last_name", "credit", "password"];
  const conditions = {
    where: {
      email: reqParams.email,
    },
  };
  return new Promise((resolve, reject) => {
    sql.select(userTbl, what, conditions, (err, rows) => {
      if (!rows.length)
        return reject("No account associated with the email address provided.");
      bcrypt.compare(reqParams.password, rows[0].password, (err, result) => {
        if (err || !result) reject("Username/Password mismatch.");
        rows[0].password = undefined;
        resolve(rows[0]);
      });
    });
  });
};

module.exports = userHandler;

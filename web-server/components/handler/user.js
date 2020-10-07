const sql = require(__base + "/components/db-master/sql-queries");
const bcrypt = require("bcrypt");
const validator = require("validator");

const saltRounds = 10;

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
  userSignUp: (reqParams) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await userSignUpProcess(reqParams);
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
  return new Promise(async (resolve, reject) => {
    try {
      const rows = await sql.select(userTbl, what, conditions);
      if (!rows.length) {
        return reject("No account associated with the email address provided.");
      }
      bcrypt.compare(reqParams.password, rows[0].password, (err, result) => {
        if (err || !result) reject("Username/Password mismatch.");
        rows[0].password = undefined;
        resolve(rows[0]);
      });
    } catch (err) {
      reject(err);
    }
  });
};

const userSignUpProcess = (reqParams) => {
  const what = "*";
  const conditions = {
    where: {
      email: reqParams.email,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      // Checking - required params
      await signUpCheckPoint(reqParams, reject);
      // Checking - valid email address
      if (validator.isEmail(reqParams.email)) {
        // Checking - email address availability
        const rows = await sql.select(userTbl, what, conditions);
        if (rows.length) {
          return reject(
            "There's already an account associated with the email address provided."
          );
        } else {
          // proceed to create new user
          bcrypt.hash(reqParams.password, saltRounds, function (err, hash) {
            const insertParam = {
              first_name: reqParams.first_name,
              last_name: reqParams.last_name,
              email: reqParams.email,
              password: hash,
            };
            try {
              const res = sql.insert(userTbl, insertParam);
              // new user created
              if (res) {
                resolve(true);
              }
            } catch (err) {
              // error creating new user
              reject(err);
            }
          });
        }
      } else {
        // error - invalid email address
        return reject("Invalid email address.");
      }
    } catch (err) {
      // error - any other error
      reject(err);
    }
  });
};

const signUpCheckPoint = (data) => {
  return new Promise((resolve, reject) => {
    // require params to sign-up an user
    const requiredParams = ["first_name", "last_name", "email", "password"];
    // checking the required params with the provided params
    const checkPoint = requiredParams.filter((i) => {
      return data.hasOwnProperty(i) && data[i] != "";
    });
    requiredParams.length == checkPoint.length
      ? resolve(true)
      : reject("Bad Request");
  });
};

module.exports = userHandler;

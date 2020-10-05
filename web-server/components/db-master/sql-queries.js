/**
 * @author Paras Sahu <paras.sahu@vertisystem.com>
 * @package Class Web - Database SQL queries master component
 */

const dbObj = require("./connection");

const queries = {
  select: async (tableName, what, conditions) => {
    return new Promise((resolve, reject) => {
      let querySelect = dbObj.select(what).from(tableName);
      if (conditions && conditions.where) {
        querySelect.where(conditions.where);
      }
      if (conditions && conditions.whereE) {
        conditions.whereE.forEach((item) => {
          querySelect.where(item.f, item.m, item.l);
        });
      }
      querySelect
        .then((rows) => {
          resolve(rows);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },
  insert: async (tableName, insertParam) => {
    return new Promise((resolve, reject) => {
      dbObj(tableName)
        .insert(insertParam)
        .then(function (response) {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = queries;

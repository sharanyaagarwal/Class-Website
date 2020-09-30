/**
 * @author Paras Sahu <paras.sahu@vertisystem.com>
 * @package Class Web - Database SQL queries master component
 */

const dbObj = require("./connection");

const queries = {
  select: (tableName, what, conditions, callback) => {
    let querySelect = dbObj.select(what).from(tableName);
    if (conditions && conditions.where) {
      querySelect.where(conditions.where);
    }
    if (conditions && conditions.whereE) {
      conditions.whereE.forEach((item) => {
        querySelect.where(item.f, item.m, item.l);
      });
    }
    console.log(querySelect.toString());
    querySelect
      .then((rows) => {
        console.log("then rows", rows);
        callback(null, rows);
      })
      .catch((err) => {
        console.log(err);
        callback(err, null);
      });
  },
};

module.exports = queries;

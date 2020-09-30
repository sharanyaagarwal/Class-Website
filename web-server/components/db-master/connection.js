/**
 * @author Paras Sahu <paras.sahu@vertisystem.com>
 * @package Class Web - Database connection component
 */

/* **** DATABASE CONNECTION **** */

/* Component for Database Connectivity
 *  is for providing a Database Object to, then Controller
 *  assign it to any module it wants.
 */

const log = require(__base + "components/logger").consoleLog;

const requireUncached = (module) => {
  delete require.cache[require.resolve(module)];
  return require(module);
};

const config = requireUncached(__base + "/config"),
  db = requireUncached("knex")({
    client: "mysql2",
    connection: {
      host: config.sql.host,
      user: config.sql.user,
      password: config.sql.password,
      database: config.sql.database,
      debug: config.sql.debugmode,
      port: config.sql.port,
    },
    //acquireConnectionTimeout: 10000, // 10 seconds
    pool: {
      min: config.sql.pool.min,
      max: config.sql.pool.max,
    },
    log: {
      warn(message) {
        log(message, "info");
      },
      error(message) {
        log(message, "error");
      },
      deprecate(message) {
        log(message, "info");
      },
      debug(message) {
        log(message, "debug");
      },
    },
  });

module.exports = db;

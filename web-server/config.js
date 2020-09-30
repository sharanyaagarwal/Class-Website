const fs = require("fs");
let externalCredentials, databaseCredentials;

module.exports = (() => {
  externalCredentials = JSON.parse(
    fs.readFileSync("../secure-path/app-config.json")
  );
  databaseCredentials = JSON.parse(
    fs.readFileSync("../secure-path/database-config.json")
  );
  return {
    sql: {
      host: databaseCredentials.masterDatabase.host,
      user: databaseCredentials.masterDatabase.user,
      password: databaseCredentials.masterDatabase.password,
      database: databaseCredentials.masterDatabase.database,
      pool: {
        min: databaseCredentials.masterDatabase.pool.min,
        max: databaseCredentials.masterDatabase.pool.max,
      },
      port: databaseCredentials.masterDatabase.port,
    },
    server: {
      ssl: {
        certificate: {
          key: externalCredentials.certificates.key,
          cert: externalCredentials.certificates.cert,
          rejectUnauthorized: false,
        },
      },
      port: 9000,
      logs: {
        path: {
          accessLog: "../access-logs",
        },
      },
    },
  };
})();

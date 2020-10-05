// cluster
const cluster = require("cluster");
const cpus = require("os").cpus();

if (cluster.isMaster) {
  console.log("this is the master process", process.pid);
  for (i = 0; i < cpus.length; i++) {
    cluster.fork();
  }
} else {
  console.log("this is the worker process", process.pid);
  require("./core");
}

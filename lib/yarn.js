const childProcess = require('child_process');

function runYarn(options) {
  return new Promise((resolve, reject) => {
    const installProcess = childProcess.exec('yarn', options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ isInstalled: true });
    });
    installProcess.stdout.on('data', data => console.log(data));
  });
}

function install(projectDir) {
  return runYarn({ cwd: projectDir })
    .catch((err) => {
      console.error('Something went wrong while attempting to use Yarn.');
      console.info(err);
    });
}

module.exports = {
  install,
};
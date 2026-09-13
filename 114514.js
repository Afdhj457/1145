const { spawn } = require('child_process');
const path = require('path');

const scriptPath = path.join(__dirname, '114514.sh');

const child = spawn('bash', [scriptPath], { stdio: 'inherit' });

child.on('close', (code) => {
  console.log(`退出码: ${code}`);
});
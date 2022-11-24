export const shell = ({
  command,
  onData,
}: {
  command: string;
  onData?: (data: string) => void;
}) => {
  return new Promise((resolve, reject) => {
    try {
      const child = require('child_process').exec(command);

      // use event hooks to provide a callback to execute when data are available:
      child.stdout.on('data', (data: any) => {
        if (onData) {
          if (data.includes('returned a non-zero code')) {
            reject({ message: data });
          }
          onData(data.toString());
        }
      });

      child.stderr.on('data', (data: any) => {
        if (onData) {
          if (data.includes('returned a non-zero code')) {
            reject({ message: data });
          }
          onData(data);
        }
      });

      child.stdout.on('exit', (code: any) => {
        reject(code);
      });
      child.stdout.on('close', (code: any) => {
        resolve(code);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default shell;

const warn = console.warn;

console.warn = (...data: any) => {
  try {
    if (data[0].indexOf('index.html is not found') >= 0) {
      return;
    }
  } catch (error) {}

  warn(...data);
};

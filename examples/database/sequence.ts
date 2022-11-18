export const delay = (time = 3000): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const sequence = async ({
  method,
  list,
  showLogs = false,
  nextDelay = 0,
  data,
}: {
  method: any;
  list: any[];
  showLogs?: boolean;
  nextDelay?: number;
  data?: any;
}) => {
  let currentIndex = 0;
  const results: any[] = [];

  const next = async () => {
    try {
      const result = await method(
        list[currentIndex],
        {
          index: currentIndex,
          total: list.length,
        },
        data,
      );

      results.push(result);

      if (showLogs) {
        console.log(
          'completed - sequence',
          currentIndex + 1,
          'of',
          list.length,
        );
      }
    } catch (_) {
      if (showLogs) {
        console.log('error - sequence', currentIndex + 1, 'of', list.length);
      }
    }

    currentIndex++;
    if (currentIndex + 1 <= list.length) {
      await delay(nextDelay);
      await next();
    }
  };

  if (list.length) {
    await next();
  }

  return results;
};

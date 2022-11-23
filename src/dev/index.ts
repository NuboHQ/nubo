let lastUpdated = localStorage.getItem('_dev_last_updated')
  ? new Date(localStorage.getItem('_dev_last_updated')).getTime()
  : null;

let failed = 0;
let interval;

export const reloadOnChange = async () => {
  try {
    if (interval && failed >= 5) {
      clearInterval(interval);
    }

    const result = await fetch('/__dev');
    const data = await result.json();

    if (lastUpdated !== new Date(data.updated).getTime()) {
      localStorage.setItem('_dev_last_updated', data.updated);
      window.location.reload();
    }

    failed = 0;
  } catch (error) {
    failed++;
  }
};

export const startDev = () => {
  console.log('[nubo-dev-server]');
  interval = setInterval(reloadOnChange, 500);
  reloadOnChange();
};

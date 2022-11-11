import { api, startApi } from '@nubojs/api';

(async () => {
  api.get('/', async (req, res) => {
    res.json({ message: 'nubo edge api' });
  });

  await startApi();
})();

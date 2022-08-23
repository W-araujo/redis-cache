import { Router } from 'express';
import { CacheRedis } from '../database/RedisConfig';

const cacheRedis = new CacheRedis();
cacheRedis.clientRedis.connect();

const routes = Router();

routes.get('/', (req, res) => {
  return res.json('Hello world!');
});

routes.post('/saveData', async (req, res) => {
  const data = req.body;
  await cacheRedis.setCache(data.id, data);
  return res.status(200).json(data);
});

routes.get('/showData/:key', async (req, res) => {
  const key = req.params.key;
  const data = await cacheRedis.getCache(key);
  if (data) return res.status(200).json(JSON.parse(data));
  return res.status(400).json({ error: 'Data not found' });
});

export { routes };

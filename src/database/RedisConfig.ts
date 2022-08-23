import { createClient } from 'redis';

class CacheRedis {
  clientRedis;
  constructor() {
    this.clientRedis = createClient();
  }

  async getCache(key: string): Promise<string | null> {
    const value = await this.clientRedis.get(key);
    return value;
  }

  async setCache(key: string, value: string): Promise<string | null> {
    return await this.clientRedis.set(
      JSON.stringify(key),
      JSON.stringify(value),
    );
  }
}

export { CacheRedis };

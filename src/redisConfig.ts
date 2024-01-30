import Redis from "ioredis";
import { promisify } from "util";

//Pode-se passar os dados redis como objeto caso não seja a configuração padrão
//Nesse exemplo, está rodando em um docker
const redisClient = new Redis();

function getRedis(value: string) {
  return redisClient.get(value)
}

function setRedis(key: string, value: string) {
  redisClient.set(key, value)
}

export { redisClient, getRedis, setRedis };

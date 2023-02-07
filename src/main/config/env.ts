export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://root:root@127.0.0.1:27017/clean-node-api?authSource=admin',
  port: process.env.PORT ?? 5050
}

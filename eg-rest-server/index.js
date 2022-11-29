const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')

// Format:
// [redis[s]:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]

const client = redis.createClient('redis://redis-master:6379');
const init = async () => {
  await client.connect();
  await client.select(1);
}

init();
// client.keys('*', (...args) => console.log({ args }));

const rawParser = bodyParser.raw({
  limit: '1000kb',
  type: '*/*',
});

const app = express()

const collection = /\/$/;
const resource = /[^/]$/;

app.use(rawParser);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  next();
});

app.get(collection, async (req, res) => {
  console.log(`get collection ${req.url}`);
  const data = await client.smembers(req.url);
  res.send(JSON.stringify(data));
});

app.get(resource, async (req, res) => {
  console.log(`get resource ${req.url}`);
  // await new Promise((resolve) => setTimeout(resolve, 10));
  const data = await client.get(req.url);
  res.send(data);
});


app.post(collection, async (req, res) => {
  console.log(`posted to collection ${req.url}`);
  const id = uuidv4();
  await client.sadd(req.url, id);
  await client.set(req.url + id, req.body.toString('utf8'));
  res.send(id);
});

app.put(resource, async (req, res, next) => {
  console.log(`put to resource ${req.url}`);
  await client.set(req.url, req.body);
  res.send('k');
});





app.listen(8083, (err) => {
  if (err) { throw err; }
  console.log('server ready on http://localhost:8080')
})


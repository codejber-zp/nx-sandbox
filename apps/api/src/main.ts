import express from 'express';
import * as path from 'path';
import { Message, MessageRoute } from '@nx-sandbox/api-interface';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get<Message>(MessageRoute.GET_INIT_MESSAGE, (req, res) => {
  res.send({ text: 'Welcome to api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
